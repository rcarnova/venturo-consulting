import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import ReferencesSectionEN from "@/components/en/ReferencesSectionEN";

const cases = [
  {
    company: "Ricehouse",
    result: "From strong identity to qualified applications",
    description: "Complete redefinition of employer brand and value proposition.",
    slug: "ricehouse",
    hasDetail: true,
    logo: "/logos/ricehouse_white.png",
  },
  {
    company: "Randstad",
    result: "Visible culture, aligned candidates",
    description: "Employer branding campaign that translates internal values into concrete messages for the job market.",
    slug: "randstad",
    hasDetail: true,
    logo: "/logos/randstad_blue.svg",
    invertLogo: true,
  },
  {
    company: "Lely",
    result: "Tools for managing people without HR experience",
    description: "Practical framework for technical managers who need to lead teams.",
    slug: "lely",
    hasDetail: true,
    logo: "/logos/lely_white.svg",
    logoScale: 1.3,
  },
  {
    company: "Ufficio Pio",
    result: "Naming that creates culture",
    description: "Strategic naming project to give departments a shared language and make the beneficiaries' journey recognizable.",
    slug: "ufficio-pio",
    hasDetail: false,
    logo: "/logos/ufficio_pio_white.png",
  },
  {
    company: "CVE",
    result: "The First Company Town Hall",
    description: "Design and facilitation of a historic moment for the company.",
    slug: "cve",
    hasDetail: false,
    logo: "/logos/cve_mono.png",
    logoScale: 0.8,
  },
  {
    company: "Smart Working",
    result: "+35-50% satisfaction",
    description: "Method tested across dozens of companies for effective hybrid work.",
    slug: "smart-working",
    hasDetail: false,
  },
];

const CaseStudies = () => {
  const scrollToContact = () => {
    window.location.href = "/en#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies"
        description="Organizational culture projects with Italian companies. Employer branding, leadership, rituals and internal communication."
        canonical="https://venturo.it/en/case-studies"
        lang="en"
        alternateUrls={{ it: "https://venturo.it/casi-studio", en: "https://venturo.it/en/case-studies" }}
      />
      <HeaderEN />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20">
          <div className="container-wide text-center">
            <AnimatedSection>
              <h1 className="text-display text-charcoal">Our case studies</h1>
              <p className="text-subheadline mt-4 max-w-2xl mx-auto">
                Projects that have transformed organizational cultures
              </p>
            </AnimatedSection>
          </div>
        </section>
        {/* Featured Case */}
        <ReferencesSectionEN />

        {/* Grid */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseStudy, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  {caseStudy.hasDetail ? (
                    <Link to={`/en/case-studies/${caseStudy.slug}`} className="block h-full">
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
                          Read the case →
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
              <h2 className="text-headline text-charcoal mb-4">Want similar results?</h2>
              <Button onClick={scrollToContact} variant="default" size="lg">
                Let's talk
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <FooterEN />
    </div>
  );
};

export default CaseStudies;
