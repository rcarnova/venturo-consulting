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
            Come comunica la vostra EVP?
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Vai sulla career page o sul job post che vuoi analizzare. Seleziona tutto il testo
            con Cmd+A (Mac) o Ctrl+A (Windows), copialo con Cmd+C e incollalo nei campi qui sotto.
          </p>

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
              <p className="text-xs text-muted-foreground mb-2">Incolla il testo della tua career page</p>
              <Textarea
                value={careerPage}
                onChange={(e) => setCareerPage(e.target.value)}
                placeholder="Incolla qui il testo della career page..."
                className="min-h-[160px] resize-y"
              />
            </div>
            <div>
              <Label className="text-foreground font-semibold mb-1 block">Job post</Label>
              <p className="text-xs text-muted-foreground mb-2">Incolla il testo di un annuncio specifico</p>
              <Textarea
                value={jobPost}
                onChange={(e) => setJobPost(e.target.value)}
                placeholder="Incolla qui il testo del job post..."
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
              Ti mandiamo solo l'analisi. Nient'altro.
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
            {loading ? "Analisi in corso..." : "Analizza"}
          </Button>

          {/* Result */}
          {analysis && (
            <div className="mt-12">
              <div className="rounded-xl p-6 md:p-8 border-l-[3px]" style={{ borderColor: '#E1FF00' }}>
                <div className="max-w-none text-foreground [&_h2]:text-[16px] [&_h2]:font-semibold [&_h2]:text-[#0A0A0A] [&_h2]:mb-2 [&_h2]:mt-6 [&_h2:first-child]:mt-0 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_em]:text-[#888888] [&_em]:text-sm">
                  <ReactMarkdown>{analysis}</ReactMarkdown>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <p className="text-foreground">
                  Vuoi capire cosa emerge quando sono le persone a raccontare?{" "}
                  <Link to="/lumen" className="text-primary font-semibold hover:underline">
                    Scopri Lumen →
                  </Link>
                </p>
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
      </main>

      <Footer />
    </div>
  );
};

export default AnalisiEVP;
