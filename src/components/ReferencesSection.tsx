import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const ReferencesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-sm font-mono font-medium tracking-widest uppercase text-primary mb-4">
              Referenze
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Le aziende leader si fanno domande importanti
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Non "come miglioriamo i valori?", ma "quali valori viviamo già?".
              Non "come motiviamo le persone?", ma "perché le persone rimangono?".
              Ecco chi lavora con noi per rispondere a queste domande.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Case - Randstad */}
        <AnimatedSection delay={200}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Content column - Left */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl tracking-wide text-foreground">
                    Randstad
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    HR & Recruiting
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-7xl md:text-8xl font-bold text-foreground leading-none">
                      30
                    </span>
                    <span className="text-base text-muted-foreground">
                      manager coinvolti nel workshop
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium leading-tight text-foreground">
                  Dal 4.2/5 all'allineamento culturale reale
                </h3>

                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  Workshop con 30 manager per far emergere chi funziona davvero in
                  Randstad. Non abbiamo creato personas aspirazionali, ma estratto
                  pattern da storie concrete. Risultato: candidati pre-filtrati sul
                  cultural fit prima dell'assessment tecnico.
                </p>

                <Link
                  to="/casi-studio/randstad"
                  className="inline-flex items-center text-primary font-mono font-medium group hover:underline"
                >
                  Leggi il caso completo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Image column - Right */}
              <div className="order-first md:order-last">
                <img
                  src="/cases/randstad-envisioning.jpg"
                  alt="Workshop Randstad - Partecipanti al lavoro con visual thinking e materiali sul tavolo"
                  className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={400}>
          <div className="max-w-7xl mx-auto mt-12 text-center">
            <Link
              to="/casi-studio"
              className="inline-flex items-center text-primary font-mono font-medium group hover:underline"
            >
              Vedi tutti i progetti
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ReferencesSection;
