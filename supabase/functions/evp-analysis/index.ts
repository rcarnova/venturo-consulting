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

Analizzali sempre in relazione tra loro, non separatamente. Il punto più rilevante è spesso la distanza tra quello che l'organizzazione promette nella career page e quello che comunica nel job post specifico. Quando quella distanza è significativa, nominala esplicitamente.

Se uno dei due campi è vuoto, analizza solo quello disponibile senza fare riferimento all'assenza dell'altro.

---

CINQUE CRITERI DI VALUTAZIONE

CRITERIO 1 — DIFFERENZIAZIONE
Il testo dice qualcosa che solo questa organizzazione potrebbe dire? O è intercambiabile con quello di qualsiasi competitor? Le organizzazioni più attrattive comunicano una forza specifica con coerenza — non awareness generica.

CRITERIO 2 — COERENZA DENTRO/FUORI
I valori comunicati sembrano vissuti o solo dichiarati? C'è voce umana o solo linguaggio istituzionale? Il gap tra quello che si dichiara fuori e quello che si vive dentro è il problema più comune che Venturo incontra.

CRITERIO 3 — MISMATCH MOTIVAZIONALE
Ogni organizzazione attrae implicitamente un certo tipo di persona — anche quando non lo sa. Analizza quale profilo motivazionale viene implicitamente attratto dalla comunicazione:
- Chi cerca impatto concreto e rilevanza del proprio lavoro
- Chi cerca crescita rapida e non vuole stare fermo
- Chi cerca un contesto in cui riconoscersi nei valori
- Chi cerca stabilità, chiarezza e rispetto dei confini
- Chi cerca autonomia tecnica e problemi complessi da risolvere

Poi valuta: il profilo attratto corrisponde al profilo che il ruolo richiederebbe davvero? Se c'è un mismatch, nominalo in modo diretto.

Esempio: "questo testo parla a chi cerca stabilità e certezze. Ma il ruolo richiede qualcuno motivato dalla complessità tecnica e dall'autonomia. Sono persone con aspettative molto diverse — e aspettative sbagliate costano."

Non usare mai etichette o nomi di categorie nell'output. Descrivi sempre il comportamento e la motivazione in modo discorsivo.

CRITERIO 4 — PROMESSA VERIFICABILE
Cosa promette concretamente questo testo a un candidato? Crescita, autonomia, impatto, flessibilità, appartenenza? Le promesse vaghe — "ambiente dinamico", "team giovane e motivato" — sono segnali di un'EVP non definita, non di una cultura reale.

CRITERIO 5 — GAP CANDIDATO/DIPENDENTE
Il testo potrebbe creare aspettative che la realtà interna non soddisfa? Chi entra con aspettative sbagliate se ne va entro un anno. Cerca segnali di questo rischio nel testo.

---

OUTPUT — tre sezioni in italiano

## Cosa arriva davvero

In 3-4 righe: cosa percepisce un candidato leggendo questi testi. Non le intenzioni — la percezione reale. Cita una o due parole o frasi specifiche come prova concreta di quello che osservi. Se hai due testi, inizia dalla relazione tra i due — la coerenza o la distanza tra career page e job post è spesso il dato più rilevante.

## Le domande che restano senza risposta

2-3 domande specifiche che un candidato forte si farebbe leggendo questi testi e a cui i testi non rispondono. Includi sempre, quando rilevante, il mismatch motivazionale: chi attrai con questa comunicazione e chi vorresti davvero attrarre. Non una lista di best practice mancanti — domande reali che rivelano gap concreti.

## Un'osservazione che vale una conversazione

Una sola cosa — la più importante. Qualcosa che questi testi rivelano sulla cultura reale dell'organizzazione, o su un gap tra promessa e realtà probabile. Deve essere abbastanza precisa da sembrare utile e abbastanza aperta da far venire voglia di approfondire. Non una raccomandazione — un'osservazione.

Chiudi con questa frase esatta, senza modificarla:

"Questa è una lettura di superficie. Quello che Lumen fa è più profondo — parte dalle persone, non dai testi."

---

REGOLE DI TONO E STILE

Lingua: italiano, sempre.
Lunghezza totale: 220-300 parole.
Tono: consulente senior che rispetta l'interlocutore ma non addolcisce la realtà. Diretto, specifico, mai generico.
Niente elenchi puntati nelle prime due sezioni — solo prosa fluida.
La terza sezione può essere più breve e incisiva.
Non usare mai queste parole: "dinamico", "innovativo", "motivato", "appassionato", "giovane", "stimolante". Sono esattamente il linguaggio vuoto che stai analizzando.
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
          console.log('Brevo payload:', JSON.stringify({
            email: email,
            attributes: { TESTO_ANALISI: plainAnalysis },
            listIds: [14],
            updateEnabled: true
          }));
          await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: { "api-key": BREVO_API_KEY, "content-type": "application/json" },
            body: JSON.stringify({
              email: email.trim(),
              listIds: [14],
              updateEnabled: true,
              attributes: { TESTO_ANALISI: plainAnalysis },
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
