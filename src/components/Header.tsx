import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoVenturo from "@/assets/logo-venturo.png";

const navLinks = [
  { href: "/#problema", label: "Il Problema" },
  { href: "/#come-lavoriamo", label: "Come Lavoriamo" },
  { href: "/#leve", label: "Le Leve" },
  { href: "/casi-studio", label: "Case Study" },
  { href: "/#chi-siamo", label: "Chi Siamo" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToContact = () => {
    if (window.location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <a href="/">
          <img src={logoVenturo} alt="Venturo" className="h-6 md:h-8" />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button onClick={scrollToContact} variant="default" size="default" className="hidden sm:inline-flex">
            Parliamone
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Apri menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-12">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <Button 
                  onClick={() => {
                    handleNavClick();
                    scrollToContact();
                  }} 
                  variant="default" 
                  size="lg"
                  className="mt-4 w-full"
                >
                  Parliamone
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
