import { Users, MessageSquare, Repeat, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import GlowTitle from "../GlowTitle";

const services = [
  {
    icon: Users,
    title: "Culture & Identity",
    items: [
      "Facilitated workshops that reveal who you really are",
      "Materials that make visible who you already are",
      "Cultural profiles extracted from real stories"
    ]
  },
  {
    icon: MessageSquare,
    title: "Language & Communication",
    items: [
      "Strategic naming",
      "Shared glossaries",
      "Tone of voice that comes from within, not imposed from outside"
    ]
  },
  {
    icon: Repeat,
    title: "Rituals & Operations",
    items: [
      "Rituals redesigned from the ones that already work",
      "Decision-making processes that reflect actual culture",
      "Coaching with handover"
    ]
  }
];

const HowWeWorkSectionEN = () => {
  return (
    <section id="how-we-work" className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <GlowTitle className="text-2xl md:text-3xl font-medium text-charcoal">
              Our method
            </GlowTitle>
            <p className="text-subheadline mt-4">
              Three pillars on which we build every intervention.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="scale" delay={index * 150}>
              <div className="card-elevated group transition-all duration-300 h-full callout-glow hover:scale-[1.02]">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Lumen Section */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-16 mb-16 rounded-2xl p-8 md:p-12 lg:p-16" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)' }}>
            <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
              {/* Left column - 60% */}
              <div className="md:col-span-3">
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/50">
                  Our method
                </span>
                <h3 className="text-2xl md:text-3xl font-medium text-white mt-4 mb-5">
                  Lumen — We don't measure culture. We illuminate it.
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-white/70 mb-6">
                  Organizational culture is invisible precisely because it's omnipresent. Lumen is how we bring it to the surface — through stories, not questionnaires. The result is a faithful mirror of how people truly experience the organization.
                </p>
                <Link
                  to="/en/lumen"
                  className="inline-flex items-center gap-2 text-white font-medium underline underline-offset-4 hover:gap-3 transition-all duration-300"
                >
                  Discover how Lumen works
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right column - 40% */}
              <div className="md:col-span-2">
                <div className="rounded-xl bg-white/[0.06] border border-white/[0.08] p-6 md:p-8">
                  <span className="text-xs font-mono tracking-[0.15em] uppercase text-white/40 block mb-4">
                    One of the questions we ask
                  </span>
                  <p className="text-lg md:text-xl italic leading-relaxed text-white/90">
                    "Imagine meeting a friend you haven't seen in months. They ask you what it's like to work here. What do you tell them, in two minutes?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default HowWeWorkSectionEN;
