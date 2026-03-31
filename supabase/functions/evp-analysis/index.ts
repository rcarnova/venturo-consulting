import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { careerPage, jobPost, email } = await req.json();

    // Validation
    const careerLen = (careerPage || "").trim().length;
    const jobLen = (jobPost || "").trim().length;
    if (careerLen < 50 && jobLen < 50) {
      return new Response(
        JSON.stringify({ error: "Incolla almeno un testo per procedere." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build prompt content
    let userContent = "";
    if (careerPage?.trim()) userContent += "CAREER PAGE:\n" + careerPage.trim();
    if (jobPost?.trim()) {
      if (userContent) userContent += "\n\n";
      userContent += "JOB POST:\n" + jobPost.trim();
    }

    // Call Anthropic
    const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");
    if (!ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY not configured");

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: "Sei un esperto di employer branding e comunicazione organizzativa. Analizza il testo fornito (career page e/o job post) e restituisci un'analisi chiara e strutturata della EVP (Employee Value Proposition) che emerge. Evidenzia punti di forza, debolezze, incoerenze e suggerimenti di miglioramento. Rispondi in italiano. Usa il formato markdown.",
        messages: [{ role: "user", content: userContent }],
      }),
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      console.error("Anthropic error:", anthropicRes.status, errText);
      throw new Error("AI analysis failed");
    }

    const anthropicData = await anthropicRes.json();
    const analysis = anthropicData.content?.[0]?.text || "Nessuna analisi generata.";

    // Brevo (silent, non-blocking)
    if (email?.trim()) {
      const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
      if (BREVO_API_KEY) {
        try {
          // Add contact to list
          await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: { "api-key": BREVO_API_KEY, "content-type": "application/json" },
            body: JSON.stringify({
              email: email.trim(),
              listIds: [14],
              updateEnabled: true,
              attributes: { SOURCE: "evp-analysis-tool" },
            }),
          });

          // Send analysis email
          await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: { "api-key": BREVO_API_KEY, "content-type": "application/json" },
            body: JSON.stringify({
              sender: { name: "Venturo", email: "info@venturoconsulting.it" },
              to: [{ email: email.trim() }],
              subject: "La tua analisi EVP — Venturo",
              textContent: analysis,
            }),
          });
        } catch (brevoErr) {
          console.error("Brevo error (non-blocking):", brevoErr);
        }
      }
    }

    return new Response(JSON.stringify({ analysis }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("evp-analysis error:", err);
    return new Response(
      JSON.stringify({ error: "Si è verificato un errore. Riprova tra poco." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
