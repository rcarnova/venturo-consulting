// Validate a toolkit access code (public, no auth required)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { code } = await req.json();
    if (!code || typeof code !== "string" || code.length > 64) {
      return new Response(JSON.stringify({ valid: false, error: "Codice non valido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const normalized = code.trim().toUpperCase();
    const { data, error } = await supabase
      .from("toolkit_access_codes")
      .select("id, client_name, is_active, expires_at, access_count")
      .eq("code", normalized)
      .maybeSingle();

    if (error) throw error;
    if (!data || !data.is_active) {
      return new Response(JSON.stringify({ valid: false, error: "Codice non riconosciuto" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (data.expires_at && new Date(data.expires_at) < new Date()) {
      return new Response(JSON.stringify({ valid: false, error: "Codice scaduto" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Update access tracking (fire and forget)
    await supabase
      .from("toolkit_access_codes")
      .update({
        last_accessed_at: new Date().toISOString(),
        access_count: data.access_count + 1,
      })
      .eq("id", data.id);

    return new Response(
      JSON.stringify({ valid: true, clientName: data.client_name }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("toolkit-validate-code error", err);
    return new Response(JSON.stringify({ valid: false, error: "Errore interno" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
