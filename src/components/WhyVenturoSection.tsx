import AnimatedSection from "@/components/AnimatedSection";

const WhyVenturoSection = () => {
  return (
    <section className="pt-[80px] pb-[60px] bg-muted/50">
      <div className="container-wide px-6 md:px-8">
        <AnimatedSection>
          <div>
            <h2 className="text-section text-foreground mb-8">
              Perché esiste Venturo
            </h2>
            <p className="text-body text-foreground text-left md:max-w-[60%]">
              Quando non è chiaro chi sei come organizzazione, succede questo:
            </p>

            <ul className="text-body text-foreground mt-6 space-y-3 md:max-w-[60%] list-none">
              {[
                "assumi le persone sbagliate",
                "perdi quelle giuste",
                "prendi decisioni incoerenti",
                "e ogni iniziativa HR diventa cosmetica",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary mt-[2px]">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-foreground mt-8">
              Per questo lavoriamo su tre livelli:
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="py-4 md:py-0 md:pr-8">
                <span className="text-subtitle text-foreground">Ciò che si vede</span>
                <p className="text-small text-muted-foreground mt-2">Come ci si comporta, come si comunica, cosa si celebra</p>
              </div>
              <div className="py-4 md:py-0 md:px-8">
                <span className="text-subtitle text-foreground">Ciò che si fa</span>
                <p className="text-small text-muted-foreground mt-2">I pattern che si ripetono senza che nessuno li abbia scritti</p>
              </div>
              <div className="py-4 md:py-0 md:pl-8">
                <span className="text-subtitle text-foreground">Ciò che si dà per scontato</span>
                <p className="text-small text-muted-foreground mt-2">Le regole non scritte che nessuno ha deciso ma tutti seguono</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyVenturoSection;
