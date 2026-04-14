import AnimatedSection from "@/components/AnimatedSection";

const WhyVenturoSectionEN = () => {
  return (
    <section className="pt-[80px] pb-[60px] bg-muted/50">
      <div className="container-wide px-6 md:px-8">
        <AnimatedSection>
          <div>
            <h2 className="text-section text-foreground mb-8">
              Why Venturo exists
            </h2>
            <p className="text-body text-foreground text-left md:max-w-[60%]">
              When culture is unclear in an organization:
            </p>

            <ul className="text-body text-foreground mt-6 space-y-2 md:max-w-[60%]">
              <li>you hire the wrong people</li>
              <li>you lose the right ones</li>
              <li>you make inconsistent decisions</li>
              <li>and every HR initiative becomes cosmetic</li>
            </ul>

            <p className="text-body text-foreground mt-8">
              That's why we work on three levels:
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="py-4 md:py-0 md:pr-8">
                <span className="text-subtitle text-foreground">What is seen</span>
                <p className="text-small text-muted-foreground mt-2">How people behave, communicate, and what they celebrate</p>
              </div>
              <div className="py-4 md:py-0 md:px-8">
                <span className="text-subtitle text-foreground">What is done</span>
                <p className="text-small text-muted-foreground mt-2">The patterns that repeat without anyone having written them down</p>
              </div>
              <div className="py-4 md:py-0 md:pl-8">
                <span className="text-subtitle text-foreground">What is taken for granted</span>
                <p className="text-small text-muted-foreground mt-2">The unwritten rules that no one decided but everyone follows</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyVenturoSectionEN;
