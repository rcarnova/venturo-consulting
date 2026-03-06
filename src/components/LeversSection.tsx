import { useState } from "react";
import { UserPlus, Sparkles, Users2, Home, Target, Handshake, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveIcon = levers[activeIndex].icon;

  return (
    <section id="leve" className="section-padding bg-primary">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <GlowTitle className="text-2xl md:text-3xl font-medium text-primary-foreground" variant="light">
              Le aree di intervento
            </GlowTitle>
            <p className="text-subheadline mt-4 text-primary-foreground/70">
              Sei situazioni che riconosciamo spesso. E su cui sappiamo come lavorare.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center flex-nowrap scrollbar-hide">
            {levers.map((lever, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 px-4 py-2.5 md:px-5 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  index === activeIndex
                    ? "bg-white text-foreground shadow-lg"
                    : "bg-transparent text-white border border-white/60 hover:border-white"
                }`}
              >
                {lever.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-10 md:mt-12">
            <div
              key={activeIndex}
              className="bg-white rounded-xl p-8 md:p-12 border border-black/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.12)] animate-fade-in"
            >
              <ActiveIcon className="w-8 h-8 md:w-10 md:h-10 text-foreground mb-6" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                {levers[activeIndex].title}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {levers[activeIndex].description}
              </p>
            </div>
          </div>
        </AnimatedSection>

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
