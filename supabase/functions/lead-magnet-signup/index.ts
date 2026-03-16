import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
const PDF_URL = Deno.env.get("PDF_URL");

const ALLOWED_ORIGIN = "https://venturoconsulting.it";

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// --- Rate limiting: 3 requests per IP per minute ---
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip)?.filter((t) => now - t < RATE_LIMIT_WINDOW_MS) ?? [];
  rateLimitMap.set(ip, timestamps);
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  return false;
}

// --- HTML sanitization ---
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(clientIp)) {
    return new Response(
      JSON.stringify({ success: false, error: "Too many requests. Try again in a minute." }),
      { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    if (!BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY is not configured");
    }

    const { email, marketingConsent } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const safeEmail = escapeHtml(email);

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [13],
        updateEnabled: true,
        attributes: {
          SOURCE: "lead-magnet-employer-branding",
          ...(marketingConsent === true ? { OPT_IN: true } : { OPT_IN: false }),
        },
      }),
    });

    const brevoBody = await res.text();
    console.log("Brevo /contacts status:", res.status, "body:", brevoBody);

    if (res.status === 204 || res.status === 201) {
      console.log("Contact added to Brevo (status " + res.status + "):", email);
    } else if (!res.ok) {
      console.error("Brevo API error:", brevoBody);
      throw new Error(brevoBody || "Failed to add contact to Brevo");
    }

    // Send transactional email with guide link
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [{ email }],
        templateId: 40,
        params: {
          GUIDE_LINK: "https://drive.google.com/file/d/1HwEZz-rxBD8JZM7_GcmUPlPqWcI-z5w6/view?usp=sharing",
        },
      }),
    });

    if (!emailRes.ok) {
      const emailData = await emailRes.json();
      console.error("Brevo email send error:", emailData);
    } else {
      console.log("Guide email sent to:", email);
    }

    // Send notification email to Venturo
    const notifyRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [{ email: "info@venturoconsulting.it" }],
        sender: { email: "info@venturoconsulting.it", name: "Venturo" },
        subject: "Nuovo download — Guida Employer Branding",
        htmlContent: `<p>Nuovo contatto ha scaricato la guida.</p><p>Email: ${safeEmail}</p><p>OPT_IN: ${marketingConsent === true}</p>`,
      }),
    });

    if (!notifyRes.ok) {
      const notifyData = await notifyRes.json();
      console.error("Brevo notify email error:", notifyData);
    } else {
      console.log("Notification email sent for:", email);
    }

    // Send notification email to Rosario
    const notifyRes2 = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [{ email: "rosario.carnovale@gmail.com" }],
        sender: { email: "info@venturoconsulting.it", name: "Venturo" },
        subject: "Nuovo download — Guida Employer Branding",
        htmlContent: `<p>Nuovo contatto ha scaricato la guida.</p><p>Email: ${safeEmail}</p><p>OPT_IN marketing: ${marketingConsent === true}</p>`,
      }),
    });

    if (!notifyRes2.ok) {
      const notifyData2 = await notifyRes2.json();
      console.error("Brevo notify email error (Rosario):", notifyData2);
    } else {
      console.log("Notification email sent to Rosario for:", email);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in lead-magnet-signup:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: msg }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
