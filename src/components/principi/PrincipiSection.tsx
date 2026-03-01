import AnimatedSection from "@/components/AnimatedSection";
import type { Sezione } from "@/data/principi";
import { BookOpen } from "lucide-react";

interface PrincipiSectionProps {
  sezione: Sezione;
  index: number;
  lang?: "it" | "en";
}

const labels = {
  it: { concetto: "Concetto chiave", applicazione: "Come lo applichiamo" },
  en: { concetto: "Key concept", applicazione: "How we apply it" },
};

const PrincipiSection = ({ sezione, index, lang = "it" }: PrincipiSectionProps) => {
  const isEven = index % 2 === 0;
  const t = labels[lang];
  const anchorBook = sezione.libri[0];
  const otherBooks = sezione.libri.slice(1);

  return (
    <section
      id={sezione.id}
      className={`py-24 ${isEven ? "bg-muted/40" : "bg-background"}`}
    >
      <div className="container-wide max-w-5xl">
        {/* Section header with cover image */}
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{sezione.titolo}</h2>
        </AnimatedSection>

        {/* Editorial layout: cover + intro + anchor book */}
        <AnimatedSection delay={100}>
          <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-14 mb-14`}>
            {/* Book cover */}
            {sezione.coverImage && (
              <div className="shrink-0 flex justify-center md:justify-start">
                <div className="relative">
                  <img
                    src={sezione.coverImage}
                    alt={anchorBook.titolo}
                    className="w-[180px] md:w-[200px] h-auto rounded-sm shadow-[0_8px_30px_-8px_hsl(var(--foreground)/0.15)]"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Intro + anchor book info */}
            <div className="flex-1 min-w-0">
              {sezione.intro && (
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {sezione.intro}
                </p>
              )}

              {/* Anchor book — prominent card */}
              <div className="border border-border rounded-xl p-8 bg-background">
                <div className="mb-1">
                  <h3 className="font-bold text-xl leading-snug">{anchorBook.titolo}</h3>
                  <p className="text-sm text-muted-foreground">{anchorBook.autore}</p>
                </div>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                      {t.concetto}
                    </p>
                    <div className="text-foreground text-sm leading-relaxed whitespace-pre-line">
                      {anchorBook.concetto}
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                      {t.applicazione}
                    </p>
                    <p className="text-foreground text-sm leading-relaxed">
                      {anchorBook.applicazione}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Other books — compact cards */}
        {otherBooks.length > 0 && (
          <div className="space-y-6">
            {otherBooks.map((libro, i) => (
              <AnimatedSection key={libro.titolo} delay={(i + 2) * 80}>
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
                        {t.concetto}
                      </p>
                      <div className="text-foreground text-sm leading-relaxed whitespace-pre-line">
                        {libro.concetto}
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                      {t.applicazione}
                    </p>
                    <p className="text-foreground text-sm leading-relaxed">
                      {libro.applicazione}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PrincipiSection;
