import AnimatedSection from "@/components/AnimatedSection";

interface PrincipiHeroProps {
  lang?: "it" | "en";
}

const copy = {
  it: {
    label: "Principi",
    title: "I nostri principi",
    p1: "Non ci siamo inventati niente. Applichiamo principi consolidati in modo originale.",
    p2: "Venturo nasce dall'incontro di tre mondi — brand strategy, organizational culture, design thinking — che raramente dialogano tra loro. Questa ibridazione è la nostra forza. E questi sono i libri che ci hanno formato.",
  },
  en: {
    label: "Principles",
    title: "Our principles",
    p1: "We didn't invent anything. We apply established principles in an original way.",
    p2: "Venturo was born at the intersection of three worlds — brand strategy, organizational culture, design thinking — that rarely talk to each other. This hybridization is our strength. And these are the books that shaped us.",
  },
};

const PrincipiHero = ({ lang = "it" }: PrincipiHeroProps) => {
  const t = copy[lang];

  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container-wide max-w-4xl">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">{t.label}</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">{t.title}</h1>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="space-y-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PrincipiHero;
