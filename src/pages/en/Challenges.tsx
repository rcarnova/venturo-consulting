import { SEO } from "@/components/SEO";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Challenge {
  title: string;
  reframing: string;
  action: string;
}

const challenges: Challenge[] = [
  {
    title: "Talents leaving after 18 months",
    reframing:
      "Talents don't leave because of the market or salary. They leave because the culture they found inside didn't match what they perceived from the outside. The problem isn't retention — it's cultural readability.",
    action:
      "We make explicit who you really are, before someone figures it out on their own after a year.",
  },
  {
    title: "Delegation that doesn't work",
    reframing:
      "Delegation isn't a process or tools problem. It's a problem of cultural trust. If mistakes aren't allowed, no one takes responsibility. If power has never truly been distributed, no framework will distribute it. And without a solid relationship between manager and collaborator, feedback doesn't flow and autonomy doesn't take root.",
    action:
      "We work on the quality of the relationship as the necessary infrastructure for real feedback and sustainable autonomy. Not on the delegation process itself.",
  },
  {
    title: "Innovation that stays on paper",
    reframing:
      "Innovation doesn't stall because of a lack of ideas or budget. It stalls because the culture rewards those who don't fail more than those who try new things. Changing tools or launching a hackathon doesn't change this equation.",
    action:
      "We identify which internal rituals and language are sabotaging innovation before it even starts.",
  },
  {
    title: "Teams that don't understand each other because they speak different languages",
    reframing:
      "It's not a communication problem. It's a problem of different cultures coexisting without knowing it — generations, functions, different company histories. Each group has its unspoken assumptions and no one has ever put them side by side.",
    action:
      "We surface the invisible cultures that coexist within the same organization and build a shared language that respects them all.",
  },
  {
    title: "Gap between promises to clients and internal reality",
    reframing:
      "When marketing promises something that people inside don't experience, the problem isn't marketing. It's that the external identity was built without starting from the internal one. Clients feel it. Internal people feel it even more.",
    action:
      "We align who you are inside with what you say outside — starting from the inside, not the outside.",
  },
  {
    title: "Hybrid work without shared rules",
    reframing:
      "Hybrid work entered companies often without anyone truly deciding what working smart means. The result is questions circulating in the hallways: why does Giorgio get to work remotely and I don't? Why can Milan do it and we can't? Why does it depend on my boss? When rules are missing or applied inconsistently, the problem isn't logistical. It's motivational and generational — younger talents consider flexibility a non-negotiable priority, and if they don't find it, they look elsewhere.",
    action:
      "We help the board and managers answer a strategic question: what does working smart truly mean in your organization? Not how to solve working from home. How to make it a conscious cultural lever.",
  },
];

const Challenges = () => {
  const scrollToContact = () => {
    window.location.href = "/en#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Organizational cultural challenges — Venturo"
        description="The organizations we work with aren't in crisis. But some things never get unblocked. Usually it's not a process problem. It's a cultural problem."
        canonical="https://venturo.it/en/challenges"
        lang="en"
        alternateUrls={{ it: "https://venturo.it/le-sfide", en: "https://venturo.it/en/challenges" }}
      />
      <HeaderEN />

      <main className="pt-28 md:pt-36 pb-24">
        {/* Intro */}
        <section className="container-narrow mb-20 md:mb-28">
          <AnimatedSection>
            <h1 className="text-headline text-foreground leading-tight">
              The challenges
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              The organizations we work with aren't in crisis. They have
              strategy, people, and intentions. But some things never get
              unblocked.{" "}
              <span className="text-foreground font-medium">
                Usually it's not a process problem. It's a cultural problem.
              </span>
            </p>
          </AnimatedSection>
        </section>

        {/* Challenges */}
        <section className="container-narrow space-y-0">
          {challenges.map((challenge, index) => (
            <AnimatedSection key={index} delay={index * 80}>
              <div className="py-12 md:py-16 border-t border-border first:border-t-0">
                {/* Title with large background number */}
                <div className="relative mb-6">
                  <span
                    className="absolute -top-6 -left-2 text-[8rem] md:text-[10rem] font-bold leading-none text-foreground/[0.06] select-none pointer-events-none font-mono"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-snug">
                      {challenge.title}
                    </h2>
                  </div>
                </div>

                {/* Reframing */}
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {challenge.reframing}
                  </p>

                  {/* What we do — dark block */}
                  <div className="bg-charcoal rounded-lg px-5 py-4 md:px-6 md:py-5 flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-warm-white/60 mt-1 flex-shrink-0" />
                    <p className="text-base text-warm-white font-medium leading-relaxed">
                      {challenge.action}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </section>

        {/* Closing CTA */}
        <section className="mt-20 md:mt-28 bg-charcoal">
          <div className="container-narrow py-20 md:py-24 text-center">
            <AnimatedSection>
              <p className="text-2xl md:text-3xl font-medium text-warm-white leading-snug">
                Do you recognize yourself in any of these situations?
              </p>
              <div className="mt-10">
                <Button
                  onClick={scrollToContact}
                  variant="hero"
                  size="lg"
                >
                  Let's talk
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <FooterEN />
    </div>
  );
};

export default Challenges;
