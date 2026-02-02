import { X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const problems = [
  "Talenti che abbandonano dopo 18 mesi",
  "Innovazione che resta sulla carta",
  "Team che non si capiscono perché parlano lingue diverse",
  "Gap tra promesse ai clienti e realtà interna",
  "Decisioni che si bloccano ai livelli intermedi"
];

const ProblemSection = () => {
  return (
    <section id="problema" className="section-padding bg-charcoal">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-headline text-warm-white">
            Strategia solida, persone competenti.
            <span className="text-warm-white/60 block mt-2">Eppure...</span>
          </h2>
        </AnimatedSection>

        <ul className="mt-12 space-y-4">
          {problems.map((problem, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <li className="flex items-start gap-4 text-lg text-warm-white/80">
                <X className="w-5 h-5 text-warm-white/60 mt-1 flex-shrink-0" />
                <span>{problem}</span>
              </li>
            </AnimatedSection>
          ))}
        </ul>

        <AnimatedSection delay={500}>
          <div className="mt-12 pt-8 border-t border-warm-white/10">
            <p className="text-xl text-warm-white font-display font-medium">
              Questi non sono problemi di processo.
              <span className="block text-warm-white/60">Sono problemi culturali.</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSection;
