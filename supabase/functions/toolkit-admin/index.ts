// Admin operations for toolkit access codes (protected by master password)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-admin-password",
};

function generateCode(): string {
  // 8-char readable code (no ambiguous chars)
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  for (let i = 0; i < 8; i++) out += chars[bytes[i] % chars.length];
  return out;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const adminPassword = req.headers.get("x-admin-password");
    const expected = Deno.env.get("TOOLKIT_ADMIN_PASSWORD");
    if (!expected || adminPassword !== expected) {
      return new Response(JSON.stringify({ error: "Non autorizzato" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const body = req.method === "POST" ? await req.json() : {};
    const action = body.action || "list";

    if (action === "list") {
      const { data, error } = await supabase
        .from("toolkit_access_codes")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);
      if (error) throw error;
      return new Response(JSON.stringify({ codes: data }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "create") {
      const clientName = (body.clientName || "").toString().trim();
      const notes = (body.notes || "").toString().trim() || null;
      if (!clientName || clientName.length > 200) {
        return new Response(JSON.stringify({ error: "Nome cliente richiesto (max 200)" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const code = generateCode();
      const { data, error } = await supabase
        .from("toolkit_access_codes")
        .insert({ code, client_name: clientName, notes })
        .select()
        .single();
      if (error) throw error;
      return new Response(JSON.stringify({ code: data }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "toggle") {
      const id = body.id;
      const isActive = !!body.isActive;
      if (!id) {
        return new Response(JSON.stringify({ error: "id richiesto" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const { error } = await supabase
        .from("toolkit_access_codes")
        .update({ is_active: isActive })
        .eq("id", id);
      if (error) throw error;
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Azione non riconosciuta" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("toolkit-admin error", err);
    return new Response(JSON.stringify({ error: "Errore interno" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
