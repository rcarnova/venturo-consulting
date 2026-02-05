import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import logoIngaze from "@/assets/logo-ingaze.png";

interface Partner {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  link: string;
  linkText: string;
}

const partners: Partner[] = [
  {
    name: "Ingaze",
    logo: logoIngaze,
    tagline: "Employer intelligence & analytics",
    description: `When structured data on employer branding and talent attraction is needed, Ingaze provides the analytics platform. We translate that data into applicable cultural strategies.

The partnership works like this: Ingaze measures employer perception and positioning, Venturo designs the interventions to close the gaps that emerge. Data that becomes action.`,
    link: "https://ingaze.ai",
    linkText: "Visit Ingaze",
  },
];

const PartnersSectionEN = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
            Partners
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            For projects requiring structured employer intelligence, 
            we collaborate with technology partners.
          </p>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-6">
          {partners.map((partner, index) => (
            <AnimatedSection
              key={partner.name}
              animation="fade-up"
              delay={index * 100}
            >
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-8 md:h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                  {partner.tagline}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSectionEN;
