import AnimatedSection from "@/components/AnimatedSection";

const WhyVenturoSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container-wide px-6 md:px-8">
        <AnimatedSection>
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
              Perché esiste Venturo
            </h2>
            <p className="text-[16px] md:text-xl leading-[1.6] md:leading-relaxed text-foreground text-left md:max-w-[60%]">
              Venturo nasce da una convinzione: la cultura di un'organizzazione non è un tema soft. Modella i comportamenti, determina i risultati, e si riflette in tutto ciò che l'azienda dice e fa verso l'esterno.
            </p>

            <p className="text-lg md:text-xl text-foreground mt-8">
              Per questo lavoriamo su tre livelli:
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="py-4 md:py-0 md:pr-8">
                <span className="text-base md:text-lg font-bold text-foreground">Ciò che si vede</span>
                <p className="text-sm text-muted-foreground mt-2">Come ci si comporta, come si comunica, cosa si celebra</p>
              </div>
              <div className="py-4 md:py-0 md:px-8">
                <span className="text-base md:text-lg font-bold text-foreground">Ciò che si fa</span>
                <p className="text-sm text-muted-foreground mt-2">I pattern che si ripetono senza che nessuno li abbia scritti</p>
              </div>
              <div className="py-4 md:py-0 md:pl-8">
                <span className="text-base md:text-lg font-bold text-foreground">Ciò che si dà per scontato</span>
                <p className="text-sm text-muted-foreground mt-2">Le regole non scritte che nessuno ha deciso ma tutti seguono</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyVenturoSection;
