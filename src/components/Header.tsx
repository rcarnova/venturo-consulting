import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-display text-xl md:text-2xl font-semibold text-charcoal tracking-tight">
          Venturo
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Il Problema
          </a>
          <a href="#come-lavoriamo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Come Lavoriamo
          </a>
          <a href="#leve" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Le Leve
          </a>
          <a href="#casi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Case Study
          </a>
        </nav>

        <Button onClick={scrollToContact} variant="default" size="default">
          Parliamone
        </Button>
      </div>
    </header>
  );
};

export default Header;
