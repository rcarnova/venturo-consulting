import AnimatedSection from "./AnimatedSection";

const levers = [
  {
    title: "Attrazione Talenti",
    description: "Rendere l'identità culturale esplicita e verificabile già dal colloquio. I candidati sanno in cosa stanno entrando, non lo scoprono dopo."
  },
  {
    title: "Innovazione & AI Readiness",
    description: "Lavorare sugli assunti culturali che bloccano l'innovazione. L'AI amplifica la vostra cultura: se l'errore è punito, nessuno strumento vi renderà innovativi."
  },
  {
    title: "Generazioni al lavoro",
    description: "Far dialogare vecchia guardia e nuovi manager. Riconoscere il valore di ciascuna cultura, creare linguaggio condiviso, progettare rituali di integrazione."
  },
  {
    title: "Cultura del Lavoro Ibrido",
    description: "Trasformare il lavoro ibrido da benefit passivo a leva strategica. Definire sistemi di fiducia e responsabilità che funzionano anche senza visibilità fisica."
  },
  {
    title: "Marketing & Coerenza Esterna",
    description: "Allineare identità interna e promessa esterna. Il marketing diventa credibile quando rappresenta la realtà, non l'aspirazione."
  },
  {
    title: "Vendita & Relazione Cliente",
    description: "Rendere il modello di vendita coerente con l'identità aziendale. In contesti B2B complessi, la relazione è un asset che va protetto."
  }
];

const LeversSection = () => {
  return (
    <section id="leve" className="section-padding bg-primary">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-headline text-primary-foreground">
              Su cosa lavoriamo
            </h2>
            <p className="text-subheadline mt-4 text-primary-foreground/70">
              Sei leve per trasformare la vostra cultura organizzativa.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levers.map((lever, index) => (
            <AnimatedSection key={index} animation="scale" delay={index * 100}>
              <div className="bg-card rounded-xl p-6 md:p-10 hover:scale-[1.02] hover:bg-secondary/50 hover:shadow-elevated transition-all duration-300 cursor-default h-full">
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-card-foreground mb-4">
                  {lever.title}
                </h3>
                <p className="text-[0.95rem] md:text-base text-muted-foreground leading-relaxed">
                  {lever.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeversSection;
