import { UserPlus, Sparkles, Users2, Home, Target, Handshake, LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface Lever {
  title: string;
  description: string;
  icon: LucideIcon;
}

const levers: Lever[] = [
  {
    title: "Attrazione Talenti",
    description: "Rendere l'identità culturale esplicita e verificabile già dal colloquio. I candidati sanno in cosa stanno entrando, non lo scoprono dopo.",
    icon: UserPlus
  },
  {
    title: "Innovazione & AI Readiness",
    description: "Lavorare sugli assunti culturali che bloccano l'innovazione. L'AI amplifica la vostra cultura: se l'errore è punito, nessuno strumento vi renderà innovativi.",
    icon: Sparkles
  },
  {
    title: "Generazioni al lavoro",
    description: "Far dialogare vecchia guardia e nuovi manager. Riconoscere il valore di ciascuna cultura, creare linguaggio condiviso, progettare rituali di integrazione.",
    icon: Users2
  },
  {
    title: "Cultura del Lavoro Ibrido",
    description: "Trasformare il lavoro ibrido da benefit passivo a leva strategica. Definire sistemi di fiducia e responsabilità che funzionano anche senza visibilità fisica.",
    icon: Home
  },
  {
    title: "Marketing & Coerenza Esterna",
    description: "Allineare identità interna e promessa esterna. Il marketing diventa credibile quando rappresenta la realtà, non l'aspirazione.",
    icon: Target
  },
  {
    title: "Vendita & Relazione Cliente",
    description: "Rendere il modello di vendita coerente con l'identità aziendale. In contesti B2B complessi, la relazione è un asset che va protetto.",
    icon: Handshake
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {levers.map((lever, index) => {
            const IconComponent = lever.icon;
            return (
              <AnimatedSection key={index} animation="scale" delay={index * 100}>
                <div className="bg-white rounded-xl p-8 md:p-10 border border-black/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300 cursor-default h-full flex flex-col">
                  <IconComponent className="w-7 h-7 md:w-10 md:h-10 text-foreground mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                    {lever.title}
                  </h3>
                  <p className="text-[0.95rem] md:text-base text-muted-foreground leading-relaxed">
                    {lever.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeversSection;
