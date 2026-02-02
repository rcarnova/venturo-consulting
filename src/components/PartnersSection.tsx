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
    <section className="py-16 bg-secondary">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Per progetti che richiedono employer intelligence strutturata, 
            collaboriamo con partner tecnologici che condividono il nostro approccio concreto.
          </p>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-8">
          {partners.map((partner, index) => (
            <AnimatedSection
              key={partner.name}
              animation="fade-up"
              delay={index * 100}
              className="w-full max-w-2xl"
            >
              <div className="bg-card rounded-xl p-8 md:p-12 shadow-subtle text-center callout-glow hover:scale-[1.01] transition-all duration-300">
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>

                {/* Tagline */}
                <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-[#FF006E] mb-6">
                  {partner.tagline}
                </p>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
                  {partner.description}
                </p>

                {/* CTA Link */}
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#FF006E] font-semibold hover:opacity-80 transition-opacity"
                >
                  {partner.linkText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
