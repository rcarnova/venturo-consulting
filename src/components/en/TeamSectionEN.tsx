import AnimatedSection from "@/components/AnimatedSection";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";

const team = [
  {
    name: "Rosario Carnovale",
    role: "Partner",
    title: "Business Coach & Brand Strategist",
    image: "/team/rosario.jpg",
  },
  {
    name: "Arianna Barisan",
    role: "Partner",
    title: "Art Director",
    image: "/team/arianna.jpg",
  },
  {
    name: "Massimo Benedetti",
    role: "Partner",
    title: "Communication & Storytelling Specialist",
    image: "/team/massimo.jpg",
  },
];

const TeamSectionEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderEN />
      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container-wide">
          {/* Header */}
          <AnimatedSection className="mb-16 md:mb-24">
            <div className="max-w-2xl">
              <p className="text-sm font-body uppercase tracking-widest text-primary mb-4">
                Team
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
                Who we are
              </h1>
            </div>
          </AnimatedSection>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                <div className="group">
                  {/* Photo - B&W with hover color effect */}
                  <div className="aspect-square overflow-hidden rounded-lg mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-1">
                    <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {member.name}
                    </h2>
                    <p className="text-sm font-body uppercase tracking-widest text-primary">
                      {member.role}
                    </p>
                    <p className="text-base font-body text-muted-foreground">
                      {member.title}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      <FooterEN />
    </div>
  );
};

export default TeamSectionEN;
