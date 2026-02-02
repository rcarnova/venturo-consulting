import { Users, MessageSquare, Repeat, Package } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Users,
    title: "Cultura e Identità",
    items: [
      "Workshop facilitati che fanno emergere chi siete davvero",
      "Materiali coerenti ai valori",
      "Employer personas concrete"
    ]
  },
  {
    icon: MessageSquare,
    title: "Linguaggio e Comunicazione",
    items: [
      "Naming strategico",
      "Glossari condivisi",
      "Tone of voice allineato alla cultura"
    ]
  },
  {
    icon: Repeat,
    title: "Rituali e Operatività",
    items: [
      "Ridisegno meeting e processi decisionali",
      "Framework pratici",
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
            <h2 className="text-headline text-charcoal">
              Architetti della vostra infrastruttura culturale
            </h2>
            <p className="text-subheadline mt-4">
              Tre pilastri per costruire un'organizzazione che funziona davvero.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="scale" delay={index * 150}>
              <div className="card-elevated group hover:shadow-elevated transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-charcoal mb-4">
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

        {/* Callout finale - Artefatti concreti */}
        <AnimatedSection animation="fade-up" delay={450}>
          <div 
            className="mt-12 rounded-xl p-8 md:p-10 border-l-[6px] border-l-[#FF006E] flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
            style={{ 
              background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex-shrink-0">
              <Package className="w-12 h-12 text-white opacity-90" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
                Il risultato? Artefatti concreti
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
