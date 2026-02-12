import AnimatedSection from "@/components/AnimatedSection";

const CasesIntroSection = () => {
  return (
    <section className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
              Referenze
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-8">
              Le aziende leader si fanno domande importanti
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Non "come miglioriamo i valori?", ma "quali valori viviamo già?". 
              Non "come motiviamo le persone?", ma "perché le persone rimangono?". 
              Ecco chi lavora con noi per rispondere a queste domande.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CasesIntroSection;
