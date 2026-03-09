import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
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
          GUIDE_LINK: "https://drive.google.com/drive/folders/1CUZtF8UhfnGeZunjlHQ_tjEHoJ-yXMR8",
        },
      }),
    });

    if (!emailRes.ok) {
      const emailData = await emailRes.json();
      console.error("Brevo email send error:", emailData);
      // Don't throw — contact was added, email send is best-effort
    } else {
      console.log("Guide email sent to:", email);
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
