import AnimatedSection from "../AnimatedSection";
import logoIngaze from "@/assets/logo-ingaze.png";

const PartnersSectionEN = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-narrow">
        <AnimatedSection className="mb-8">
          <p className="text-eyebrow text-muted-foreground mb-3">PARTNER</p>
          <h2 className="text-section text-foreground">
            The AI-powered Employer Intelligence platform
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
                For projects requiring data-driven insights, we partner with Ingaze. A platform providing access to real insights, sentiment analysis and competitor benchmarks. To understand from reviews what truly works and what is driving talent away. Not a technical tool but a methodological partnership that strengthens what Lumen illuminates from within.
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

export default PartnersSectionEN;
