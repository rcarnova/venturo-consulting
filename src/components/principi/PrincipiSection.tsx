import AnimatedSection from "@/components/AnimatedSection";
import type { Sezione } from "@/data/principi";
import { BookOpen } from "lucide-react";

interface PrincipiSectionProps {
  sezione: Sezione;
  index: number;
}

const PrincipiSection = ({ sezione, index }: PrincipiSectionProps) => {
  const isEven = index % 2 === 0;

  return (
    <section
      id={sezione.id}
      className={`py-24 ${isEven ? "bg-muted/40" : "bg-background"}`}
    >
      <div className="container-wide max-w-5xl">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{sezione.titolo}</h2>
          {sezione.intro && (
            <p className="text-muted-foreground text-lg max-w-3xl mb-12 leading-relaxed">
              {sezione.intro}
            </p>
          )}
        </AnimatedSection>

        <div className="space-y-10">
          {sezione.libri.map((libro, i) => (
            <AnimatedSection key={libro.titolo} delay={i * 100}>
              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg leading-snug">{libro.titolo}</h3>
                    <p className="text-sm text-muted-foreground">{libro.autore}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                      Concetto chiave
                    </p>
                    <div className="text-foreground text-sm leading-relaxed whitespace-pre-line">
                      {libro.concetto}
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                    Come lo applichiamo
                  </p>
                  <p className="text-foreground text-sm leading-relaxed">
                    {libro.applicazione}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipiSection;
