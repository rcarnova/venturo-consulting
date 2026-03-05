import { Users, MessageSquare, Repeat, Package, ArrowRight } from "lucide-react";
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
          <div className="mt-16 mb-16 py-16 border-t border-border/50">
            <div className="max-w-2xl">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">
                Our method
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mt-4 mb-5">
                Lumen — We don't measure culture. We illuminate it.
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
                Organizational culture is invisible precisely because it's omnipresent. Lumen is how we bring it to the surface — through stories, not questionnaires. The result is a faithful mirror of how people truly experience the organization.
              </p>
              <Link
                to="/en/lumen"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all duration-300"
              >
                Discover how Lumen works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Final Callout - Concrete Artifacts */}
        <AnimatedSection animation="fade-up" delay={450}>
          <div 
            className="mt-12 rounded-xl p-8 md:p-10 border-l-[6px] border-l-[#FF006E] flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 transition-all duration-300 hover:scale-[1.02] hover:border-l-[8px] cursor-default group callout-glow"
            style={{ 
              background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)'
            }}
          >
            <div className="flex-shrink-0">
              <Package className="w-12 h-12 text-white opacity-90" />
            </div>
            <div className="text-center md:text-left">
               <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                 The result? Concrete artifacts
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-white/90">
                Our projects don't end with summary slides. We produce tools that stay in your company and get used: operational playbooks, decision canvases, toolkits for managers. We don't leave you with insights, we leave you with what you need to act.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowWeWorkSectionEN;
