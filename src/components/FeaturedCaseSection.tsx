import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const FeaturedCaseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Come lavoriamo: un esempio concreto
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Il caso Randstad mostra il nostro approccio: non cerchiamo di migliorare
              la reputazione, ma di rendere esplicita la cultura che già esiste.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Logo column */}
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="bg-background rounded-2xl p-10 md:p-14 flex items-center justify-center shadow-sm">
              <img
                src="/logos/randstad_blue.svg"
                alt="Randstad logo"
                className="w-full max-w-[280px] h-auto"
              />
            </div>
          </AnimatedSection>

          {/* Content column */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Randstad</h3>
              <p className="text-primary font-medium mt-1">
                Dalla brand reputation al cultural fit
              </p>
            </div>

            <div className="space-y-5 mb-8">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Sfida</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Gap tra ottima reputazione employer (rating 4.2/5) e difficoltà
                  ad attrarre candidati realmente allineati alla cultura aziendale.
                  Il problema non era il brand, ma l'esplicitazione di chi funziona
                  davvero in Randstad.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Approccio</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Workshop con 30 manager per far emergere le caratteristiche reali
                  che distinguono chi ha successo in azienda. Non abbiamo creato
                  personas aspirazionali, ma estratto pattern da storie concrete.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Risultato</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Personas evidence-based integrate nei colloqui. Candidati pre-filtrati
                  sul cultural fit prima ancora dell'assessment tecnico. Linguaggio
                  comune tra recruiting e line manager.
                </p>
              </div>
            </div>

            <Link to="/casi-studio/randstad">
              <Button variant="outline" className="group">
                Leggi il caso completo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400}>
          <div className="max-w-6xl mx-auto mt-10 text-center">
            <Link to="/casi-studio">
              <Button variant="link" className="text-primary group">
                Vedi altri progetti
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedCaseSection;
