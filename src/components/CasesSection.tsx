import { ArrowUpRight, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const cases = [
  {
    company: "Ricehouse",
    result: "Da identità forte a candidature qualificate",
    description: "Ridefinizione completa dell'employer brand e della proposta di valore.",
    logo: "/logos/ricehouse_white.png",
    logoScale: 1
  },
  {
    company: "Randstad",
    result: "Cultura visibile, candidati allineati",
    description: "Campagna employer branding che traduce valori interni in messaggi concreti per il mercato del lavoro.",
    logo: "/logos/randstad_blue.svg",
    logoScale: 1,
    invertLogo: true
  },
  {
    company: "Lely",
    result: "Tool per gestire persone senza esperienza HR",
    description: "Framework pratico per manager tecnici che devono guidare team.",
    logo: "/logos/lely_white.svg",
    logoScale: 1.3
  },
  {
    company: "Ufficio Pio",
    result: "Naming che fa cultura",
    description: "Progetto di naming strategico per dare linguaggio condiviso ai dipartimenti e rendere riconoscibile il percorso dei beneficiari.",
    logo: "/logos/ufficio_pio_white.png",
    logoScale: 1
  },
  {
    company: "CVE",
    result: "La Prima Town Hall aziendale",
    rating: "4.3/5",
    description: "Progettazione e facilitazione di un momento storico per l'azienda.",
    logo: "/logos/cve_mono.png",
    logoScale: 0.8
  },
  {
    company: "Smart Working",
    result: "+35-50% satisfaction",
    description: "Metodo testato su decine di aziende per il lavoro ibrido efficace."
  }
];

const CasesSection = () => {
  return (
    <section id="casi" className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-headline text-charcoal">
              Risultati concreti
            </h2>
            <p className="text-subheadline mt-4">
              Alcuni esempi di trasformazioni culturali che abbiamo guidato.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseStudy, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="card-subtle group hover:bg-card transition-all duration-300 cursor-pointer h-full glow-yellow hover:scale-[1.02]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {caseStudy.logo && (
                        <div className="bg-charcoal rounded px-3 py-1.5 inline-flex items-center justify-center">
                          <img 
                            src={caseStudy.logo} 
                            alt={caseStudy.company} 
                            className={`h-5 w-auto ${caseStudy.invertLogo ? 'invert brightness-0 invert' : ''}`}
                            style={{ transform: `scale(${caseStudy.logoScale || 1})` }}
                          />
                        </div>
                      )}
                      {!caseStudy.logo && (
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                          {caseStudy.company}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-charcoal mt-2">
                      {caseStudy.result}
                    </h3>
                    {caseStudy.rating && (
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-sm font-medium text-primary">{caseStudy.rating}</span>
                      </div>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  {caseStudy.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Link to all cases */}
        <AnimatedSection delay={600}>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/casi-studio" className="inline-flex items-center gap-2">
                Vedi tutti i casi studio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CasesSection;
