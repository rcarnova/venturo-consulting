import { useState } from "react";
import { UserPlus, Sparkles, Users2, Home, Target, Handshake, LucideIcon } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import GlowTitle from "../GlowTitle";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveIcon = levers[activeIndex].icon;

  return (
    <section id="levers" className="section-padding bg-primary">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <GlowTitle className="text-2xl md:text-3xl font-medium text-primary-foreground" variant="light">
              Intervention areas
            </GlowTitle>
            <p className="text-subheadline mt-4 text-primary-foreground/70">
              The six concrete levers we act on inside your organizations.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center scrollbar-hide">
            {levers.map((lever, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 px-4 py-2.5 md:px-5 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  index === activeIndex
                    ? "bg-foreground text-background shadow-lg"
                    : "bg-white/90 text-foreground hover:bg-white"
                }`}
              >
                {lever.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-10 md:mt-12">
            <div
              key={activeIndex}
              className="bg-white rounded-xl p-8 md:p-12 border border-black/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.12)] animate-fade-in"
            >
              <ActiveIcon className="w-8 h-8 md:w-10 md:h-10 text-foreground mb-6" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                {levers[activeIndex].title}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {levers[activeIndex].description}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeversSectionEN;
