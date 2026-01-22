import { Users, MessageSquare, Repeat } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Cultura e Identità",
    items: [
      "Workshop facilitati che fanno emergere chi siete davvero",
      "Definizione per sottrazione: chi NON vogliamo",
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-headline text-charcoal">
            Architetti della vostra infrastruttura culturale
          </h2>
          <p className="text-subheadline mt-4">
            Tre pilastri per costruire un'organizzazione che funziona davvero.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-elevated group hover:shadow-elevated transition-all duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
