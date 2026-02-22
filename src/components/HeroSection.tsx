import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-background">
      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight text-foreground">
            <span className="block typing-line typing-line-1">Comunicazione</span>
            <span className="block typing-line typing-line-2">Rituali</span>
            <span className="block typing-line typing-line-3">Leadership</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-xl">
            Aiutiamo le organizzazioni a vedere e riprodurre ciò che già funziona.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            <Button onClick={scrollToContact} variant="hero" className="glow-btn">
              Parliamone
            </Button>
            <Button variant="heroOutline" className="glow-btn" onClick={() => document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' })}>
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
