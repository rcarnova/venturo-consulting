import AnimatedSection from "@/components/AnimatedSection";

const WhyVenturoSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container-wide">
        <AnimatedSection>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Perché esiste Venturo
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[60%]">
              Venturo nasce da una convinzione: la cultura di un'organizzazione non è un tema soft. Modella i comportamenti, determina i risultati, e si riflette in tutto ciò che l'azienda dice e fa verso l'esterno.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="py-4 md:py-0 md:pr-8">
                <span className="text-base md:text-lg font-bold text-foreground">Ciò che si vede</span>
              </div>
              <div className="py-4 md:py-0 md:px-8">
                <span className="text-base md:text-lg font-bold text-foreground">Ciò che si fa</span>
              </div>
              <div className="py-4 md:py-0 md:pl-8">
                <span className="text-base md:text-lg font-bold text-foreground">Ciò che si dà per scontato</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyVenturoSection;
