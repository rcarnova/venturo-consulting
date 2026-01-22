import { X } from "lucide-react";

const problems = [
  "Decisioni che si bloccano ai livelli intermedi",
  "Talenti che se ne vanno dopo 18 mesi",
  "Innovazione che resta sulla carta",
  "Team che non si capiscono perché parlano lingue diverse",
  "Gap tra promesse ai clienti e realtà interna"
];

const ProblemSection = () => {
  return (
    <section id="problema" className="section-padding bg-charcoal">
      <div className="container-narrow">
        <h2 className="text-headline text-warm-white">
          Strategia solida, persone competenti.
          <span className="text-primary block mt-2">Eppure...</span>
        </h2>

        <ul className="mt-12 space-y-4">
          {problems.map((problem, index) => (
            <li 
              key={index}
              className="flex items-start gap-4 text-lg text-warm-white/80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <X className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>{problem}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 pt-8 border-t border-warm-white/10">
          <p className="text-xl text-primary font-display font-medium">
            Questi non sono problemi di processo.
            <span className="block text-warm-white">Sono problemi culturali.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
