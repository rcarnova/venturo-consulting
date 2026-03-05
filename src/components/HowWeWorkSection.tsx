import { Users, MessageSquare, Repeat, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";

const services = [
  {
    icon: Users,
    title: "Cultura e Identità",
    items: [
      "Workshop facilitati che fanno emergere chi siete davvero",
      "Materiali che rendono visibile chi siete già",
      "Profili culturali estratti da storie reali"
    ]
  },
  {
    icon: MessageSquare,
    title: "Linguaggio e Comunicazione",
    items: [
      "Naming strategico",
      "Glossari condivisi",
      "Tone of voice che nasce da dentro, non da fuori"
    ]
  },
  {
    icon: Repeat,
    title: "Rituali e Operatività",
    items: [
      "Rituali ridisegnati a partire da quelli che già funzionano",
      "Processi decisionali che riflettono la cultura reale",
      "Affiancamento con handover"
    ]
  }
];

const HowWeWorkSection = () => {
  return (
    <section id="come-lavoriamo" className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <GlowTitle className="text-2xl md:text-3xl font-medium text-charcoal">
              Il nostro metodo
            </GlowTitle>
            <p className="text-subheadline mt-4">
              Tre pilastri su cui costruiamo ogni intervento.
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

        {/* Sezione Lumen */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-16 mb-16 py-16 border-t border-border/50">
            <div className="max-w-2xl">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">
                Il nostro metodo
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mt-4 mb-5">
                Lumen — Non misuriamo la cultura. La illuminiamo.
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
                La cultura organizzativa è invisibile proprio perché onnipresente. Lumen è il modo in cui la facciamo emergere — attraverso storie, non questionari. Il risultato è uno specchio fedele di come le persone vivono davvero l'organizzazione.
              </p>
              <Link
                to="/lumen"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all duration-300"
              >
                Scopri come funziona Lumen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Callout finale - Artefatti concreti */}
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
                 Il risultato? Non slide. Strumenti.
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-white/90">
                I nostri progetti non finiscono con slide di sintesi. Produciamo strumenti che restano in azienda e vengono usati: playbook operativi, canvas decisionali, toolkit per manager. Non vi lasciamo con insight, vi lasciamo con ciò che serve per agire.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
