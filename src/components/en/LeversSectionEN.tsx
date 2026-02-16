import { UserPlus, Sparkles, Users2, Home, Target, Handshake, LucideIcon } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

interface Lever {
  title: string;
  description: string;
  icon: LucideIcon;
}

const levers: Lever[] = [
  {
    title: "Talent Attraction",
    description: "Make your cultural identity explicit and verifiable from the interview. Candidates know what they're getting into, they don't discover it later.",
    icon: UserPlus
  },
  {
    title: "Innovation & AI Readiness",
    description: "Work on the cultural assumptions that block innovation. AI amplifies your culture: if mistakes aren't allowed, no tool will make you innovative.",
    icon: Sparkles
  },
  {
    title: "Generations at Work",
    description: "Bridge the gap between old guard and new managers. Recognize the value of each culture, create shared language, design integration rituals.",
    icon: Users2
  },
  {
    title: "Hybrid Work Culture",
    description: "Transform hybrid work from a passive benefit to a strategic lever. Define trust and accountability systems that work without physical visibility.",
    icon: Home
  },
  {
    title: "Marketing & External Coherence",
    description: "Align internal identity with external promise. Marketing becomes credible when it represents reality, not aspiration.",
    icon: Target
  },
  {
    title: "Sales & Client Relationships",
    description: "Make your sales model coherent with your company identity. In complex B2B contexts, relationships are assets that must be protected.",
    icon: Handshake
  }
];

const LeversSectionEN = () => {
  return (
    <section id="levers" className="section-padding bg-primary">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-headline text-primary-foreground">
              Intervention areas
            </h2>
            <p className="text-subheadline mt-4 text-primary-foreground/70">
              The six concrete levers we act on inside your organizations.
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
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
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

export default LeversSectionEN;
