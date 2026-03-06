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
            <GlowTitle className="text-section text-primary-foreground" variant="light">
              Intervention areas
            </GlowTitle>
            <p className="text-subheadline mt-4 text-primary-foreground/70">
              The six concrete levers we act on inside your organizations.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection animation="fade-up" delay={200}>
          {/* Mobile: single scrollable row */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 flex-nowrap scrollbar-hide md:hidden">
            {levers.map((lever, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  index === activeIndex
                    ? "bg-white text-foreground shadow-lg"
                    : "bg-transparent text-white border border-white/60 hover:border-white"
                }`}
              >
                {lever.title}
              </button>
            ))}
          </div>
          {/* Desktop: 2 rows of 3 */}
          <div className="hidden md:grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {levers.map((lever, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 text-center ${
                  index === activeIndex
                    ? "bg-white text-foreground shadow-lg"
                    : "bg-transparent text-white border border-white/60 hover:border-white"
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
              <h3 className="text-subtitle text-foreground mb-4">
                {levers[activeIndex].title}
              </h3>
              <p className="text-body text-muted-foreground max-w-3xl">
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
