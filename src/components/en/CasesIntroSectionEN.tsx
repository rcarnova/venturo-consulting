import AnimatedSection from "@/components/AnimatedSection";

const CasesIntroSectionEN = () => {
  return (
    <section className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
              References
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-8">
              Leading companies ask important questions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Not "how do we improve our values?", but "which values do we already live?". 
              Not "how do we motivate people?", but "why do people stay?". 
              Here's who works with us to answer these questions.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CasesIntroSectionEN;
