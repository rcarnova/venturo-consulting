import { 
  Crown, 
  Magnet, 
  Lightbulb, 
  Users2, 
  Home, 
  GitBranch, 
  Megaphone, 
  Handshake 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const levers = [
  {
    icon: Crown,
    title: "Leadership & Retention",
    description: "Costruire leader che le persone scelgono di seguire, riducendo il turnover dove conta."
  },
  {
    icon: Magnet,
    title: "Attrazione Talenti",
    description: "Diventare un magnete per i profili giusti, non solo per tanti CV."
  },
  {
    icon: Lightbulb,
    title: "Innovazione & AI Readiness",
    description: "Preparare l'organizzazione al cambiamento, non solo agli strumenti."
  },
  {
    icon: Users2,
    title: "Convivenza tra Subculture",
    description: "Far dialogare generazioni, dipartimenti e mentalità diverse."
  },
  {
    icon: Home,
    title: "Cultura del Lavoro Ibrido",
    description: "Ridefinire presenza, fiducia e collaborazione nel nuovo mondo del lavoro."
  },
  {
    icon: GitBranch,
    title: "Decision Making Distribuito",
    description: "Portare le decisioni dove servono, senza perdere allineamento."
  },
  {
    icon: Megaphone,
    title: "Marketing & Coerenza Esterna",
    description: "Allineare promessa di brand e realtà vissuta dai clienti."
  },
  {
    icon: Handshake,
    title: "Vendita & Relazione Cliente",
    description: "Trasformare la cultura interna in vantaggio competitivo sul mercato."
  }
];

const LeversSection = () => {
  return (
    <section id="leve" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-headline text-charcoal">
            Su cosa lavoriamo
          </h2>
          <p className="text-subheadline mt-4">
            Otto leve per trasformare la vostra cultura organizzativa.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {levers.map((lever, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-xl border-none shadow-subtle data-[state=open]:shadow-medium transition-shadow"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <lever.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display text-lg font-medium text-charcoal text-left">
                    {lever.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5">
                <p className="text-muted-foreground pl-14">
                  {lever.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default LeversSection;
