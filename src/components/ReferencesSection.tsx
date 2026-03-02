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

        {/* Featured Case - Ricehouse */}
        <AnimatedSection delay={200}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Content column - Left */}
              <div className="space-y-8">
                <div>
                  <img 
                    src="/logos/ricehouse_logo.png" 
                    alt="Ricehouse" 
                    className="h-5 md:h-6 w-auto brightness-0"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Green Tech / Economia Circolare
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium leading-tight text-foreground">
                  Dal riso alla bioedilizia: trovare persone che credono nel tuo perché
                </h3>

                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  Ricehouse trasforma gli scarti della lavorazione del riso in materiali
                  da costruzione sostenibili. Una startup dell'economia circolare con
                  una sfida chiara: come attrarre talenti quando lavori con paglia di riso?
                  Il nostro lavoro: employer branding che racconta il perché prima del cosa.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/50">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Challenge
                    </p>
                    <p className="font-semibold text-foreground">
                      Employer branding per economia circolare
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Settore
                    </p>
                    <p className="font-semibold text-foreground">
                      Green Tech / Bioedilizia
                    </p>
                  </div>
                </div>

                <Link
                  to="/casi-studio/ricehouse"
                  className="inline-flex items-center text-primary font-mono font-medium group hover:underline"
                >
                  Leggi il caso completo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Image column - Right */}
              <div className="order-first md:order-last">
                <img
                  src="/workshop/ricehouse-envisioning-1.jpg"
                  alt="Workshop Ricehouse - Envisioning con il team per definire identità e employer brand"
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
