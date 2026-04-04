import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/evp-analysis`;

const AnalisiEVP = () => {
  const [careerPage, setCareerPage] = useState("");
  const [jobPost, setJobPost] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    const careerLen = careerPage.trim().length;
    const jobLen = jobPost.trim().length;

    if (careerLen < 50 && jobLen < 50) {
      setError("Incolla almeno un testo per procedere.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ careerPage, jobPost, email: email.trim() || undefined }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Errore durante l'analisi.");
      } else {
        setAnalysis(data.analysis);
      }
    } catch {
      setError("Errore di connessione. Riprova tra poco.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCareerPage("");
    setJobPost("");
    setEmail("");
    setAnalysis(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Analisi EVP gratuita — Venturo"
        description="Incolla career page o job post e ottieni un'analisi gratuita della tua Employee Value Proposition con feedback su differenziazione, coerenza e promesse."
        canonical="https://venturoconsulting.it/analisi-evp"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Analisi EVP gratuita",
          "description": "Strumento gratuito per analizzare la comunicazione della tua Employee Value Proposition a partire da career page e job post.",
          "url": "https://venturoconsulting.it/analisi-evp",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
          "provider": { "@type": "Organization", "name": "Venturo", "url": "https://venturoconsulting.it" }
        })}</script>
      </Helmet>
      <Header />

      <main className="pt-28 pb-20 px-4">
        <div className="mx-auto max-w-[680px]">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cosa comunica davvero la vostra EVP?
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground/80 mb-10 leading-relaxed max-w-xl">
            Incollate il testo della vostra career page e di un job post. In pochi secondi ricevete una lettura esterna — quella di un candidato che non vi conosce ancora.
          </p>

          {/* Example preview */}
          <div className="mb-14">
            <h2 className="text-lg font-semibold text-foreground mb-4">Un esempio di analisi</h2>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-6 md:p-8">
              <div className="[&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mb-2 [&_h3]:mt-6 [&_h3:first-child]:mt-0 [&_h3]:pt-6 [&_h3:first-child]:pt-0 [&_h3]:border-t [&_h3]:border-border/20 [&_h3:first-child]:border-t-0 [&_p]:text-sm [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_p:last-child]:mb-0">
                <h3>Come viene percepita la vostra identità</h3>
                <p>La career page comunica apertura internazionale e appartenenza a qualcosa di più grande. Il job post descrive un lavoro concreto, con orari precisi e attività operative. Un candidato che legge entrambi riceve due segnali diversi — e vale la pena chiedersi se il profilo attratto dal primo riconosce poi se stesso nel secondo.</p>
                <h3>Le domande che vale la pena farsi</h3>
                <p>Chi risponde a una comunicazione che parla di avventura e connessioni globali cerca le stesse soddisfazioni di un ruolo che inizia con preparazione merce alle cinque del mattino? Quando si parla di "relazioni durature", ci si riferisce alla profondità commerciale tipica del settore o all'aspettativa di un ambiente più relazionale?</p>
                <h3>Uno spunto che potrebbe valere una conversazione</h3>
                <p>Forse l'azienda sta davvero trasformando un settore tradizionale — e la sfida è comunicare questa evoluzione senza perdere la concretezza del lavoro reale.</p>
                <p className="!mt-5 !text-xs italic !text-muted-foreground/70">Questa è una lettura di superficie. Quello che Lumen fa è più profondo — parte dalle persone, non dai testi.</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-3">Analisi generata su testi reali. Il nome dell'azienda non è riportato.</p>
          </div>

          {/* Steps */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12">
            {[
              { n: "01", t: "Apri la pagina che vuoi analizzare" },
              { n: "02", t: "Seleziona tutto (Cmd+A) e copia (Cmd+C)" },
              { n: "03", t: "Incolla qui sotto e clicca Analizza" },
            ].map((s) => (
              <div key={s.n} className="flex-1">
                <span className="text-xs font-mono text-primary font-semibold">{s.n}</span>
                <p className="text-sm text-foreground mt-1">{s.t}</p>
              </div>
            ))}
          </div>

          {/* Text fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label className="text-foreground font-semibold mb-1 block">Career page</Label>
              <Textarea
                value={careerPage}
                onChange={(e) => setCareerPage(e.target.value)}
                placeholder="Vai sulla career page, seleziona tutto il testo (Cmd+A o Ctrl+A), copialo e incollalo qui."
                className="min-h-[160px] resize-y"
              />
            </div>
            <div>
              <Label className="text-foreground font-semibold mb-1 block">Job post</Label>
              <Textarea
                value={jobPost}
                onChange={(e) => setJobPost(e.target.value)}
                placeholder="Apri l'annuncio che vuoi analizzare, seleziona tutto il testo, copialo e incollalo qui. Puoi lasciare questo campo vuoto — l'analisi funziona anche solo con la career page."
                className="min-h-[160px] resize-y"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-8">
            <Label className="text-foreground font-semibold mb-1 block">
              Vuoi ricevere l'analisi via email?
            </Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email (opzionale)"
              className="max-w-sm"
            />
            <p className="text-xs text-muted-foreground mt-1.5">
              Se inserisci l'email ricevi l'analisi anche lì, per tenerla o condividerla. Nessun'altra comunicazione.
            </p>
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-destructive mb-4">{error}</p>
          )}

          {/* Submit */}
          <Button
            onClick={handleSubmit}
            disabled={loading}
            variant="default"
            size="lg"
          >
            Analizza →
          </Button>
          {loading && (
            <p className="text-sm text-muted-foreground mt-3 animate-fade-in">
              Stiamo leggendo i testi…
            </p>
          )}

          {/* Result */}
          {analysis && (
            <div className="mt-12">
              <div className="rounded-xl p-6 md:p-8 border-l-[3px]" style={{ borderColor: '#E1FF00' }}>
                <div className="max-w-none text-foreground [&_h2]:text-[16px] [&_h2]:font-semibold [&_h2]:text-[#0A0A0A] [&_h2]:mb-2 [&_h2]:mt-6 [&_h2:first-child]:mt-0 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_em]:text-[#888888] [&_em]:text-sm">
                  <ReactMarkdown>{analysis}</ReactMarkdown>
                </div>
              </div>

              <div className="mt-10 space-y-5">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Questa lettura viene da testi pubblici. La conversazione vera parte dalle persone.
                  </p>
                  <Link
                    to="/#contact"
                    className="inline-block mt-2 text-sm text-primary font-semibold hover:underline transition-colors"
                  >
                    Parliamone →
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hai un altro testo da analizzare?{" "}
                  <button
                    onClick={handleReset}
                    className="underline hover:text-foreground transition-colors"
                  >
                    Cancella i campi e riprova.
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* How it works */}
        <div className="mx-auto max-w-[680px] mt-20 pt-12 border-t border-border/40">
          <p className="text-xs text-muted-foreground mb-4">Come funziona questa analisi</p>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>Questo tool legge i vostri testi come li leggerebbe un candidato esterno — qualcuno che non conosce la vostra storia e costruisce la sua percezione solo da quello che trova online.</p>
            <p>L'analisi lavora su tre dimensioni: quanto è riconoscibile la vostra identità, quanto è coerente il tono tra career page e job post, e quale profilo motivazionale viene implicitamente attratto dalla comunicazione.</p>
            <p>Non è una valutazione. È una prima lettura — il punto di partenza per una conversazione più profonda.</p>
          </div>
          <Link to="/lumen" className="inline-block mt-6 text-sm text-primary font-semibold hover:underline transition-colors">
            Scopri come lavora Lumen →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnalisiEVP;
