import AnimatedSection from "./AnimatedSection";

const levers = [
  { title: "Attrazione Talenti" },
  { title: "Innovazione & AI Readiness" },
  { title: "Generazioni al lavoro" },
  { title: "Cultura del Lavoro Ibrido" },
  { title: "Marketing & Coerenza Esterna" },
  { title: "Vendita & Relazione Cliente" }
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
              <div className="bg-card rounded-xl p-8 hover:scale-[1.02] hover:shadow-elevated transition-all duration-300 cursor-default">
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-card-foreground text-center">
                  {lever.title}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeversSection;
