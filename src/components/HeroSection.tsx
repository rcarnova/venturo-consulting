import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-background">
      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.95] tracking-tight text-foreground animate-fade-up">
            Comunicazione
            <br />
            Rituali
            <br />
            Leadership
          </h1>
          
          <p className="text-xl md:text-2xl mt-8 max-w-2xl text-muted-foreground leading-relaxed animate-fade-up-delay-1">
            La cultura non è quello che dite di essere. È quello che fate quando nessuno vi guarda.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            <Button onClick={scrollToContact} variant="hero">
              Parliamone
            </Button>
            <Button variant="heroOutline" onClick={() => document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' })}>
              Scopri di più
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
