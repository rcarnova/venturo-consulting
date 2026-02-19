import { SEO } from "@/components/SEO";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import AnimatedSection from "@/components/AnimatedSection";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Rosario Carnovale",
    role: "Partner",
    title: "Business Coach & Brand Strategist",
    image: "/team/rosario.jpg",
    linkedin: "https://www.linkedin.com/in/rosariocarnovale/",
  },
  {
    name: "Arianna Barisan",
    role: "Partner",
    title: "Art Director",
    image: "/team/arianna.jpg",
    linkedin: "https://www.linkedin.com/in/arianna-barisan/",
  },
  {
    name: "Massimo Benedetti",
    role: "Partner",
    title: "Communication & Storytelling Specialist",
    image: "/team/massimo.jpg",
    linkedin: "https://www.linkedin.com/in/massimobenedetti/",
  },
];

const AboutEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us"
        description="Venturo is a boutique consultancy that closes the gap between stated and lived organizational culture. Meet the team: Rosario, Arianna and Massimo."
        canonical="https://venturo.it/en/about"
        lang="en"
        alternateUrls={{ it: "https://venturo.it/chi-siamo", en: "https://venturo.it/en/about" }}
      />
      <HeaderEN />
      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container-wide">
          {/* Intro Section */}
          <AnimatedSection className="mb-16 md:mb-24">
            <div className="max-w-2xl">
              <p className="text-sm font-mono uppercase tracking-widest text-primary mb-4">
                About us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                We make visible what your organization already knows about itself.
              </h1>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="max-w-3xl space-y-6 mb-24">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Venturo is a boutique consultancy that closes the gap between stated 
                and lived organizational culture. We don't create aspirational values. 
                We make explicit the culture that already exists.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work selectively with 3-5 clients per year — family businesses 
                (100-300 people) and scale-ups (50-200 people) — at moments when 
                culture is most visible: when someone makes a mistake, when decisions 
                must be made under pressure, when promises meet reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach is maieutic. We surface authentic patterns from real 
                stories, not from generic workshops. We work on three external pillars 
                — Communication, Rituals, Leadership — supported by six internal 
                operational levers. Surgical cultural design, not generic change management.
              </p>
            </div>
          </AnimatedSection>

          {/* Team Section */}
          <div className="border-t border-border pt-16 md:pt-24">
            <AnimatedSection>
              <div className="max-w-2xl mb-12">
                <p className="text-sm font-mono uppercase tracking-widest text-primary mb-4">
                  Team
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Partners
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {team.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 100}>
                  <div className="group">
                    <div className="aspect-square overflow-hidden rounded-lg mb-6 bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-[center_30%] grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {member.name}
                        </h3>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      </div>
                      <p className="text-sm font-mono uppercase tracking-widest text-primary">
                        {member.role}
                      </p>
                      <p className="text-base font-mono text-muted-foreground">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </main>
      <FooterEN />
    </div>
  );
};

export default AboutEN;
