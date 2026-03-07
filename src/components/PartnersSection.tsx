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
    link: "https://ingaze.ai",
    linkText: "Scopri Ingaze",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-section text-foreground mb-2">
            Partner
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <a
                href="https://ingaze.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 hover:opacity-80 transition-opacity"
              >
                <img
                  src={logoIngaze}
                  alt="Ingaze logo"
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </a>
              <p className="text-[16px] leading-[1.65] text-[#444444]">
                Per i progetti che richiedono un ancoraggio ai dati, collaboriamo con Ingaze. Una piattaforma che dà accesso a insight reali, analisi del sentiment e confronti con i competitor. Per capire dalle recensioni cosa funziona davvero e cosa sta allontanando i talenti. Non uno strumento tecnico ma una partnership metodologica che rafforza ciò che Lumen illumina dall'interno.
              </p>
            </div>
            <div className="flex-1 w-full">
              <img
                src="/partners/ingaze-dashboard.png"
                alt="Ingaze dashboard"
                className="w-full rounded-xl"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PartnersSection;
