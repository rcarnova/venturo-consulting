import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Abstract representation of cultural evolution" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-display text-charcoal animate-fade-up">
            Comunicazione Rituali Leadership
          </h1>
          
          <p className="text-subheadline mt-6 max-w-xl animate-fade-up-delay-1">
            La cultura non è quello che dite di essere. È quello che fate quando nessuno vi guarda.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
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
        <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-charcoal/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
