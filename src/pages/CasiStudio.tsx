import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const cases = [
  {
    company: "Ricehouse",
    result: "Da identità forte a candidature qualificate",
    description: "Ridefinizione completa dell'employer brand e della proposta di valore.",
    slug: "ricehouse",
    hasDetail: true,
    logo: "/logos/ricehouse_white.png",
  },
  {
    company: "Randstad",
    result: "Cultura visibile, candidati allineati",
    description: "Campagna employer branding che traduce valori interni in messaggi concreti per il mercato del lavoro.",
    slug: "randstad",
    hasDetail: true,
    logo: "/logos/randstad_blue.svg",
    invertLogo: true,
  },
  {
    company: "Lely",
    result: "Tool per gestire persone senza esperienza HR",
    description: "Framework pratico per manager tecnici che devono guidare team.",
    slug: "lely",
    hasDetail: true,
    logo: "/logos/lely_white.svg",
    logoScale: 1.3,
  },
  {
    company: "Ufficio Pio",
    result: "Naming che fa cultura",
    description: "Progetto di naming strategico per dare linguaggio condiviso ai dipartimenti e rendere riconoscibile il percorso dei beneficiari.",
    slug: "ufficio-pio",
    hasDetail: true,
    logo: "/logos/ufficio_pio_white.png",
  },
  {
    company: "CVE",
    result: "La Prima Town Hall aziendale",
    description: "Progettazione e facilitazione di un momento storico per l'azienda.",
    slug: "cve",
    hasDetail: true,
    logo: "/logos/cve_mono.png",
    logoScale: 0.8,
  },
  {
    company: "Findomestic",
    result: "Da linguaggio istituzionale a conversazione unificata",
    description: "Workshop intensivo per unificare il linguaggio tra assistenza clienti e team social.",
    slug: "findomestic",
    hasDetail: true,
    logo: "/logos/findomestic_white.png",
    logoScale: 2.5,
  },
  {
    company: "Smart Working",
    result: "+35-50% satisfaction",
    description: "Metodo testato su decine di aziende per il lavoro ibrido efficace.",
    slug: "smart-working",
    hasDetail: false,
  },
];

const CasiStudio = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Casi Studio"
        description="Progetti di cultura organizzativa realizzati con aziende italiane. Employer branding, leadership, rituali e comunicazione interna."
        canonical="https://venturo.it/casi-studio"
        lang="it"
        alternateUrls={{ it: "https://venturo.it/casi-studio", en: "https://venturo.it/en/case-studies" }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20">
          <div className="container-wide text-center">
            <AnimatedSection>
              <h1 className="text-display text-charcoal">I nostri casi</h1>
              <p className="text-subheadline mt-4 max-w-2xl mx-auto">
                Progetti che hanno trasformato culture organizzative
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseStudy, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  {caseStudy.hasDetail ? (
                    <Link to={`/casi-studio/${caseStudy.slug}`} className="block h-full">
                      <div className="card-subtle group hover:bg-card transition-all duration-300 cursor-pointer h-full flex flex-col glow-yellow hover:scale-[1.02]">
                        <div className="flex items-start justify-between">
                          <div>
                            {caseStudy.logo ? (
                              <div className="bg-charcoal rounded px-3 py-1.5 inline-flex items-center justify-center mb-2">
                                <img 
                                  src={caseStudy.logo} 
                                  alt={caseStudy.company} 
                                  className={`h-5 w-auto ${caseStudy.invertLogo ? 'invert brightness-0 invert' : ''}`}
                                  style={{ transform: `scale(${caseStudy.logoScale || 1})` }}
                                />
                              </div>
                            ) : (
                              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                                {caseStudy.company}
                              </span>
                            )}
                            <h3 className="text-xl font-display font-semibold text-charcoal mt-2">
                              {caseStudy.result}
                            </h3>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                            <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                          </div>
                        </div>
                        <p className="text-muted-foreground mt-4 flex-grow">
                          {caseStudy.description}
                        </p>
                        <p className="text-sm text-primary font-medium mt-4 group-hover:underline">
                          Leggi il caso →
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <div className="card-subtle h-full flex flex-col glow-yellow hover:scale-[1.02] transition-all duration-300">
                      <div>
                        {caseStudy.logo ? (
                          <div className="bg-charcoal rounded px-3 py-1.5 inline-flex items-center justify-center mb-2">
                            <img 
                              src={caseStudy.logo} 
                              alt={caseStudy.company} 
                              className={`h-5 w-auto ${caseStudy.invertLogo ? 'invert brightness-0 invert' : ''}`}
                              style={{ transform: `scale(${caseStudy.logoScale || 1})` }}
                            />
                          </div>
                        ) : (
                          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            {caseStudy.company}
                          </span>
                        )}
                        <h3 className="text-xl font-display font-semibold text-charcoal mt-2">
                          {caseStudy.result}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mt-4 flex-grow">
                        {caseStudy.description}
                      </p>
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="text-headline text-charcoal mb-4">Vuoi risultati simili?</h2>
              <Button onClick={scrollToContact} variant="default" size="lg">
                Parliamone
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CasiStudio;
