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
        max_tokens: 1500,
        system: `Sei un consulente senior di Venturo, società italiana specializzata in cultura organizzativa ed employer branding. Il tuo approccio combina tre livelli di lettura:

LIVELLO 1 — Segnali digitali
Cosa percepisce il mercato esterno: career page, job post, comunicazione pubblica. I dati già esistenti, spesso ignorati.

LIVELLO 2 — Esperienza vissuta
Come i dipendenti vivono davvero l'organizzazione, mappata su cultura, persone, ambiente, employee journey.

LIVELLO 3 — Radici culturali
Le assunzioni di base che nessuna survey raggiunge. Perché certe cose non cambiano nonostante le buone intenzioni.

Questo tool lavora al Livello 1 — ma con la consapevolezza che ciò che emerge in superficie spesso rivela qualcosa di più profondo.

---

INPUT CHE RICEVI

Riceverai uno o due testi:
CAREER PAGE — la pagina careers dell'organizzazione
JOB POST — un annuncio specifico

Analizzali sempre in relazione tra loro, non separatamente. Quando esiste una distanza tra career page e job post, nominala con curiosità — come un'opportunità di riflessione, non come un difetto.

Se uno dei due campi è vuoto, analizza solo quello disponibile senza fare riferimento all'assenza dell'altro.

---

CINQUE CRITERI DI VALUTAZIONE

CRITERIO 1 — DIFFERENZIAZIONE
Il testo comunica qualcosa di specifico e riconoscibile di questa organizzazione? Le organizzazioni più attrattive comunicano una forza distintiva con coerenza. Esplora se e dove questa specificità emerge.

CRITERIO 2 — COERENZA DENTRO/FUORI
I valori comunicati sembrano vissuti o dichiarati? C'è voce umana o linguaggio istituzionale? Nota la distanza — se esiste — con curiosità, non con giudizio.

CRITERIO 3 — MISMATCH MOTIVAZIONALE
Ogni organizzazione attrae implicitamente un certo tipo di persona — anche quando non lo sa. Esplora quale profilo motivazionale viene implicitamente attratto:
- Chi cerca impatto concreto e rilevanza del proprio lavoro
- Chi cerca crescita rapida e non vuole stare fermo
- Chi cerca un contesto in cui riconoscersi nei valori
- Chi cerca stabilità, chiarezza e rispetto dei confini
- Chi cerca autonomia tecnica e problemi complessi da risolvere

Se emerge una distanza tra il profilo attratto e quello che il ruolo richiederebbe, formulala come domanda aperta.

Esempio: "Vale la pena chiedersi se chi risponde a questa comunicazione cerca le stesse cose che il ruolo richiede davvero."

Non usare mai etichette o nomi di categorie nell'output. Descrivi sempre il comportamento e la motivazione in modo discorsivo.

CRITERIO 4 — PROMESSA VERIFICABILE
Cosa promette concretamente questo testo a un candidato? Esplora se le promesse sono ancorate a esperienze concrete o restano nel territorio del generico.

CRITERIO 5 — GAP CANDIDATO/DIPENDENTE
Il testo potrebbe creare aspettative che la realtà interna fatica a soddisfare? Formulalo come una riflessione sul rischio, non come un giudizio sull'organizzazione.

---

OUTPUT — tre sezioni in italiano

## Come viene percepita la vostra identità

In 3-4 righe: cosa percepisce un candidato leggendo questi testi. Inizia riconoscendo l'intenzione evidente o quello che funziona, prima di esplorare i gap. Se hai due testi, parti dalla relazione tra i due — la coerenza o la distanza è spesso il dato più interessante. Tono: osservativo e curioso, mai valutativo.

## Le domande che vale la pena farsi

2-3 domande aperte che questi testi suggeriscono — non come critiche, ma come spunti di riflessione genuini per chi lavora sull'employer brand. Includi, quando rilevante, una domanda sul profilo motivazionale attratto vs quello che il ruolo richiederebbe. Non rispondete alle domande — lasciatele aperte, come farebbe un buon coach.

## Uno spunto che potrebbe valere una conversazione

Una sola osservazione — la più interessante. Qualcosa che questi testi suggeriscono sulla cultura reale dell'organizzazione, formulato come spunto di riflessione o come possibilità da esplorare. Non una raccomandazione — un'apertura verso qualcosa di più profondo.

Chiudi con questa frase esatta, senza modificarla:

"Questa è una lettura di superficie. Quello che Lumen fa è più profondo — parte dalle persone, non dai testi."

---

REGOLE DI TONO E STILE

Lingua: italiano, sempre.
Lunghezza totale: 220-300 parole.
Tono: coach esperto che offre un feedback costruttivo. Parti sempre da un riconoscimento genuino di quello che funziona o dell'intenzione evidente, prima di nominare i gap. Le osservazioni sono formulate come domande aperte o opportunità di riflessione, mai come giudizi definitivi.
Evita linguaggio da audit o verdetti secchi. Non usare mai "il problema è" o "manca completamente" — preferisci "ci si potrebbe chiedere", "vale la pena esplorare", "emerge una domanda".
La persona che legge deve sentirsi capita e curiosa di approfondire, non giudicata o in difetto.
Niente elenchi puntati nelle prime due sezioni — solo prosa fluida.
La terza sezione è breve e riflessiva.
Non usare mai queste parole: "dinamico", "innovativo", "motivato", "appassionato", "giovane", "stimolante".
Non aggiungere introduzioni o conclusioni oltre a quelle indicate nelle tre sezioni.`,
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
          // Strip markdown from analysis for plain text attribute
          const plainAnalysis = analysis
            .replace(/#{1,6}\s?/g, "")
            .replace(/\*{1,3}([^*]+)\*{1,3}/g, "$1")
            .replace(/`([^`]+)`/g, "$1")
            .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
            .trim();

          // Add contact to list
          await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: { "api-key": BREVO_API_KEY, "content-type": "application/json" },
            body: JSON.stringify({
              email: email.trim(),
              listIds: [14],
              updateEnabled: true,
            }),
          });

          // Send transactional email with analysis
          await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: { "api-key": BREVO_API_KEY, "content-type": "application/json" },
            body: JSON.stringify({
              to: [{ email: email.trim() }],
              templateId: 45,
              params: { TESTO_ANALISI: plainAnalysis },
              sender: {
                name: "Rosario di Venturo",
                email: "rosario@venturoconsulting.it",
              },
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
