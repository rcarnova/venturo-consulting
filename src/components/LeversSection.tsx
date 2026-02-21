import { UserPlus, Sparkles, Users2, Home, Target, Handshake, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface Lever {
  title: string;
  description: string;
  icon: LucideIcon;
}

const levers: Lever[] = [
  {
    title: "Attrazione Talenti",
    description: "I candidati migliori accettano e poi se ne vanno entro un anno. Oppure non arrivano proprio. Spesso il problema non è l'offerta, è che dall'esterno non si capisce chi siete davvero. Rendiamo la vostra identità culturale leggibile e verificabile già dal primo colloquio.",
    icon: UserPlus
  },
  {
    title: "Innovazione & AI Readiness",
    description: "Avete investito in strumenti, formazione, hackathon. Ma le idee si fermano sempre allo stesso punto. Se la cultura interna punisce l'errore, nessuna tecnologia vi renderà innovativi. Lavoriamo sugli assunti invisibili che bloccano il cambiamento prima che parta.",
    icon: Sparkles
  },
  {
    title: "Generazioni al lavoro",
    description: "I senior difendono un modo di fare che ha funzionato. I nuovi arrivati ne portano un altro. Nessuno dei due ha torto, ma non si parlano. Facciamo emergere le culture diverse che convivono nella stessa organizzazione e costruiamo un linguaggio condiviso.",
    icon: Users2
  },
  {
    title: "Cultura del Lavoro Ibrido",
    description: "L'ibrido c'è, ma funziona come un compromesso più che come una scelta. La fiducia è fragile, la visibilità conta più del risultato. Progettiamo sistemi di responsabilità e fiducia che funzionano anche senza presenza fisica.",
    icon: Home
  },
  {
    title: "Marketing & Coerenza Esterna",
    description: "Il vostro marketing racconta un'azienda che le persone interne non riconoscono. I clienti prima o poi se ne accorgono. Allineiamo chi siete dentro con quello che dite fuori — partendo da dentro.",
    icon: Target
  },
  {
    title: "Vendita & Relazione Cliente",
    description: "Il team commerciale vende in un modo che non somiglia all'azienda. Oppure la relazione col cliente dipende da una persona sola. In contesti B2B complessi, rendiamo il modello di vendita coerente con la vostra identità reale.",
    icon: Handshake
  }
];

const LeversSection = () => {
  return (
    <section id="leve" className="section-padding bg-primary">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-headline text-primary-foreground">
              Le aree di intervento
            </h2>
            <p className="text-subheadline mt-4 text-primary-foreground/70">
              Le sei leve concrete su cui agiamo dentro le vostre organizzazioni.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {levers.map((lever, index) => {
            const IconComponent = lever.icon;
            return (
              <AnimatedSection key={index} animation="scale" delay={index * 100}>
                <div className="bg-white rounded-xl p-8 md:p-10 border border-black/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300 cursor-default h-full flex flex-col">
                  <IconComponent className="w-7 h-7 md:w-10 md:h-10 text-foreground mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
                    {lever.title}
                  </h3>
                  <p className="text-[0.95rem] md:text-base text-muted-foreground leading-relaxed">
                    {lever.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={600}>
          <div className="text-center mt-16">
            <Link
              to="/le-sfide"
              className="inline-flex items-center text-primary-foreground/90 hover:text-primary-foreground font-medium text-lg underline underline-offset-4 decoration-primary-foreground/40 hover:decoration-primary-foreground transition-all duration-300"
            >
              Riconosci una di queste situazioni? Leggi come le affrontiamo.
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeversSection;
