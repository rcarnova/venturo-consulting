import AnimatedSection from "@/components/AnimatedSection";

const WhyVenturoSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container-wide">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Perché esiste Venturo
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Venturo nasce da una convinzione: la cultura di un'organizzazione non è un tema soft. Modella i comportamenti, determina i risultati, e si riflette in tutto ciò che l'azienda dice e fa verso l'esterno. Per questo lavoriamo sulle tre dimensioni della cultura: ciò che si vede, ciò che si fa, ciò che si dà per scontato.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyVenturoSection;
