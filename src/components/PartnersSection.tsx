import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
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
    description: `Quando servono dati strutturati su employer branding e talent attraction, Ingaze fornisce la piattaforma analytics. Noi traduciamo quei dati in strategie culturali applicabili.

La partnership funziona così: Ingaze misura percezione e posizionamento employer, Venturo progetta gli interventi per colmare i gap emersi. Dati che diventano azione.`,
    link: "https://ingaze.io",
    linkText: "Scopri Ingaze",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
            Partner
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Per progetti che richiedono employer intelligence strutturata, 
            collaboriamo con partner tecnologici.
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

export default PartnersSection;
