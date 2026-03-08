import AnimatedSection from "./AnimatedSection";
import logoIngaze from "@/assets/logo-ingaze.png";

const PartnersSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-narrow">
        <AnimatedSection className="mb-8">
          <p className="text-eyebrow text-muted-foreground mb-3">PARTNER</p>
          <h2 className="text-section text-foreground">
            La piattaforma di Employer Intelligence basata su AI
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
              <p className="text-[16px] leading-[1.65] text-muted-foreground">
                Per i progetti che richiedono un ancoraggio ai dati, collaboriamo con Ingaze. Una piattaforma di employer intelligence che dà accesso a insight reali, analisi del sentiment e confronti con i competitor. Per capire dalle recensioni cosa funziona davvero e cosa sta allontanando i talenti dalla vostra organizzazione. Una partnership metodologica che porta dati concreti alla strategia di employer branding e rafforza ciò che Lumen illumina dall'interno.
              </p>
            </div>
            <div className="flex-1 w-full">
              <img
                src="/partners/ingaze-dashboard.png"
                alt="Ingaze dashboard"
                className="w-full"
                style={{ borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PartnersSection;
