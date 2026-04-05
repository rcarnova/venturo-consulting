import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import logoVenturo from "@/assets/logo-venturo.webp";
import logoV from "@/assets/logo-v.webp";
import { getEnRoute } from "@/lib/language-routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/le-sfide", label: "Le sfide" },
  { href: "/lumen", label: "Lumen" },
  { href: "/casi-studio", label: "Casi studio" },
  { href: "/principi", label: "Principi" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/analisi-evp", label: "Analisi EVP" },
  { href: "/magazine", label: "Articoli" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const enPath = getEnRoute(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const poll = setInterval(() => {
          const el = document.getElementById('contact');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            clearInterval(poll);
          }
        }, 100);
        setTimeout(() => clearInterval(poll), 5000);
      }, 100);
    }
  };

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="relative h-6 md:h-8 flex items-center" style={{ minWidth: scrolled ? 28 : 120 }}>
          <img
            src={logoVenturo}
            alt="Venturo - consulenza cultura organizzativa ed employer branding"
            className="h-6 md:h-8 w-auto object-contain transition-opacity duration-300 ease-in-out"
            style={{ opacity: scrolled ? 0 : 1 }}
            width={120}
            height={32}
            fetchPriority="high"
          />
          <img
            src={logoV}
            alt="Venturo"
            className="h-5 md:h-7 w-auto object-contain absolute left-0 top-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out"
            style={{ opacity: scrolled ? 1 : 0 }}
            width={28}
            height={28}
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.href.startsWith('/#')
              ? false
              : location.pathname === link.href || location.pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-mono glow-nav ${isActive ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Cambia lingua">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                  <span className="text-sm font-medium">🇮🇹</span>
                  <span>Italiano</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={enPath} className="flex items-center gap-2 cursor-pointer">
                  <span className="text-sm font-medium">🇬🇧</span>
                  <span>English</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button onClick={scrollToContact} variant="default" size="default" className="glow-btn px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm">
            Parliamone
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Apri menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-12">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={handleNavClick}
                    className="text-lg font-mono font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
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
                
                {/* Language Switcher */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Lingua</p>
                  <div className="flex gap-2">
                    <Link
                      to="/"
                      onClick={handleNavClick}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-primary/10 text-foreground font-medium"
                    >
                      <span>🇮🇹</span>
                      <span>Italiano</span>
                    </Link>
                    <Link
                      to={enPath}
                      onClick={handleNavClick}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-border text-muted-foreground hover:bg-accent transition-colors"
                    >
                      <span>🇬🇧</span>
                      <span>English</span>
                    </Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
