import { ArrowUpRight, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";
import { allCases } from "@/data/cases";

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
          {allCases.map((caseStudy, index) => {
            const content = (
              <div className="card-subtle group hover:bg-card transition-all duration-300 cursor-pointer h-full glow-yellow hover:scale-[1.02]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {caseStudy.logo && (
                        <div className="bg-charcoal rounded px-4 py-2.5 inline-flex items-center justify-center">
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
            );

            return (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                {caseStudy.slug ? (
                  <Link to={`/casi-studio/${caseStudy.slug}`} className="block h-full">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </AnimatedSection>
            );
          })}
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
