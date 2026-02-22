import { ArrowUpRight, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import GlowTitle from "../GlowTitle";
import { Button } from "../ui/button";

const cases = [
  {
    company: "Ricehouse",
    result: "From strong identity to qualified applications",
    description: "Complete redefinition of employer brand and value proposition.",
    logo: "/logos/ricehouse_white.png",
    logoScale: 1,
    slug: "ricehouse",
  },
  {
    company: "Randstad",
    result: "Visible culture, aligned candidates",
    description: "Employer branding campaign that translates internal values into concrete messages for the job market.",
    logo: "/logos/randstad_blue.svg",
    logoScale: 1,
    invertLogo: true,
    slug: "randstad",
  },
  {
    company: "Lely",
    result: "Tool for managing people without HR experience",
    description: "Practical framework for technical managers who need to lead teams.",
    logo: "/logos/lely_white.svg",
    logoScale: 1.3,
    slug: "lely",
  },
  {
    company: "Ufficio Pio",
    result: "Naming that builds culture",
    description: "Strategic naming project to give shared language to departments and make beneficiaries' journeys recognizable.",
    logo: "/logos/ufficio_pio_white.png",
    logoScale: 1
  },
  {
    company: "CVE",
    result: "The First Company Town Hall",
    rating: "4.3/5",
    description: "Design and facilitation of a historic moment for the company.",
    logo: "/logos/cve_mono.png",
    logoScale: 0.8
  },
  {
    company: "Findomestic",
    result: "Smart Working that actually works",
    description: "Design and implementation of a hybrid work model with measurable impact on satisfaction and productivity.",
    logo: "/logos/findomestic_white.png",
    logoScale: 2.5,
    slug: "findomestic",
  }
];

const CasesSectionEN = () => {
  return (
    <section id="cases" className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <GlowTitle className="text-headline text-charcoal">
              Concrete results
            </GlowTitle>
            <p className="text-subheadline mt-4">
              Some examples of cultural transformations we've guided.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseStudy, index) => {
            const content = (
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
                    <h3 className="text-xl font-semibold text-charcoal mt-2">
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
                  <Link to={`/en/case-studies/${caseStudy.slug}`} className="block h-full">
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
              <Link to="/en/case-studies" className="inline-flex items-center gap-2 glow-btn">
                Discover all case studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CasesSectionEN;
