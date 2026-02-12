import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const ReferencesSectionEN = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              References
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Leading companies ask important questions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Not "how do we improve our values?", but "which values do we already live?".
              Not "how do we motivate people?", but "why do people stay?".
              Here's who works with us to answer these questions.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Case - Randstad */}
        <AnimatedSection delay={200}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <p className="text-xl font-serif tracking-wide text-foreground">
                    Randstad
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    HR & Recruiting
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-7xl md:text-8xl font-display font-bold text-foreground leading-none">
                      30
                    </span>
                    <span className="text-base text-muted-foreground">
                      managers involved in the workshop
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight text-foreground">
                  From 4.2/5 rating to actual cultural alignment
                </h3>

                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  Workshop with 30 managers to surface who truly thrives at Randstad.
                  We didn't create aspirational personas — we extracted patterns from
                  real stories. Result: candidates pre-filtered for cultural fit before
                  technical assessment.
                </p>

                <Link
                  to="/en/case-studies/randstad"
                  className="inline-flex items-center text-primary font-medium group hover:underline"
                >
                  Read the full case study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="order-first md:order-last">
                <img
                  src="/cases/randstad-envisioning.jpg"
                  alt="Randstad Workshop - Participants working with visual thinking and materials on the table"
                  className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={400}>
          <div className="max-w-7xl mx-auto mt-12 text-center">
            <Link
              to="/en/case-studies"
              className="inline-flex items-center text-primary font-medium group hover:underline"
            >
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ReferencesSectionEN;
