import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Challenge {
  title: string;
  reframing: string;
  action: string;
}

const challenges: Challenge[] = [
  {
    title: "Talenti che abbandonano dopo 18 mesi",
    reframing:
      "I talenti non se ne vanno per il mercato o per lo stipendio. Se ne vanno perché la cultura che hanno trovato dentro non corrispondeva a quella che avevano percepito fuori. Il problema non è la retention, è la leggibilità culturale.",
    action:
      "Rendiamo esplicito chi siete davvero, prima che qualcuno lo scopra da solo dopo un anno.",
  },
  {
    title: "Processo di delega che non funziona",
    reframing:
      "La delega non è un problema di processo o di strumenti. È un problema di fiducia culturale. Se l'errore non è permesso, nessuno si prende responsabilità. Se il potere non è mai stato distribuito davvero, nessun framework lo distribuirà. E senza una relazione solida tra manager e collaboratore, il feedback non passa e l'autonomia non attecchisce.",
    action:
      "Lavoriamo sulla qualità della relazione come infrastruttura necessaria per il feedback reale e per l'autonomia sostenibile. Non sul processo di delega in sé.",
  },
  {
    title: "Innovazione che resta sulla carta",
    reframing:
      "L'innovazione non si blocca per mancanza di idee o di budget. Si blocca perché la cultura premia chi non sbaglia più di chi prova cose nuove. Cambiare tool o lanciare un hackathon non cambia questa equazione.",
    action:
      "Identifichiamo quali rituali e linguaggi interni stanno sabotando l'innovazione prima ancora che parta.",
  },
  {
    title: "Team che non si capiscono perché parlano lingue diverse",
    reframing:
      "Non è un problema di comunicazione. È un problema di culture diverse che convivono senza saperlo — generazioni, funzioni, storie aziendali diverse. Ogni gruppo ha le sue assunzioni non dette e nessuno le ha mai messe a confronto.",
    action:
      "Facciamo emergere le culture invisibili che coesistono nella stessa organizzazione e costruiamo un linguaggio condiviso che le rispetti tutte.",
  },
  {
    title: "Gap tra promesse ai clienti e realtà interna",
    reframing:
      "Quando il marketing promette qualcosa che le persone interne non vivono, il problema non è il marketing. È che l'identità esterna è stata costruita senza partire da quella interna. I clienti lo sentono. Le persone interne lo sentono di più.",
    action:
      "Allineiamo chi siete dentro con quello che dite fuori — partendo da dentro, non dall'esterno.",
  },
];

const LeSfide = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Le sfide culturali delle organizzazioni — Venturo"
        description="Le organizzazioni che lavorano con noi non sono in crisi. Ma alcune cose non si sbloccano mai. Di solito non è un problema di processo. È un problema culturale."
        canonical="https://venturo.it/le-sfide"
        lang="it"
        alternateUrls={{ it: "https://venturo.it/le-sfide", en: "https://venturo.it/en" }}
      />
      <Header />

      <main className="pt-28 md:pt-36 pb-24">
        {/* Intro */}
        <section className="container-narrow mb-20 md:mb-28">
          <AnimatedSection>
            <h1 className="text-headline text-foreground leading-tight">
              Le sfide
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Le organizzazioni che lavorano con noi non sono in crisi. Hanno
              strategia, hanno persone, hanno intenzioni. Ma alcune cose non si
              sbloccano mai.{" "}
              <span className="text-foreground font-medium">
                Di solito non è un problema di processo. È un problema culturale.
              </span>
            </p>
          </AnimatedSection>
        </section>

        {/* Challenges */}
        <section className="container-narrow space-y-0">
          {challenges.map((challenge, index) => (
            <AnimatedSection key={index} delay={index * 80}>
              <div className="py-12 md:py-16 border-t border-border first:border-t-0">
                {/* Index number + title */}
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-xs font-mono text-muted-foreground/50 mt-1 tabular-nums pt-1 min-w-[2ch]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-snug">
                    {challenge.title}
                  </h2>
                </div>

                {/* Reframing */}
                <div className="pl-[calc(2ch+1.5rem)] space-y-6">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {challenge.reframing}
                  </p>

                  {/* What we do */}
                  <div className="flex items-start gap-3 pt-2">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-base text-foreground font-medium leading-relaxed">
                      {challenge.action}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </section>

        {/* Closing CTA */}
        <section className="mt-20 md:mt-28 bg-charcoal">
          <div className="container-narrow py-20 md:py-24 text-center">
            <AnimatedSection>
              <p className="text-2xl md:text-3xl font-medium text-warm-white leading-snug">
                Ti riconosci in una di queste situazioni?
              </p>
              <div className="mt-10">
                <Button
                  onClick={scrollToContact}
                  variant="hero"
                  size="lg"
                >
                  Parliamone
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LeSfide;
