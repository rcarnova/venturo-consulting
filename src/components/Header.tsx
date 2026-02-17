import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import logoVenturo from "@/assets/logo-venturo.png";
import { getEnRoute } from "@/lib/language-routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/#le-sfide", label: "Le sfide" },
  { href: "/casi-studio", label: "Casi studio" },
  { href: "/chi-siamo", label: "Chi siamo" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const enPath = getEnRoute(location.pathname);

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
              className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
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
                <a href="/" className="flex items-center gap-2 cursor-pointer">
                  <span className="text-sm font-medium">🇮🇹</span>
                  <span>Italiano</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={enPath} className="flex items-center gap-2 cursor-pointer">
                  <span className="text-sm font-medium">🇬🇧</span>
                  <span>English</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button onClick={scrollToContact} variant="default" size="default" className="hidden sm:inline-flex">
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
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-lg font-mono font-medium text-foreground hover:text-primary transition-colors py-2"
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
                
                {/* Language Switcher */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Lingua</p>
                  <div className="flex gap-2">
                    <a
                      href="/"
                      onClick={handleNavClick}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-primary/10 text-foreground font-medium"
                    >
                      <span>🇮🇹</span>
                      <span>Italiano</span>
                    </a>
                    <a
                      href={enPath}
                      onClick={handleNavClick}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-border text-muted-foreground hover:bg-accent transition-colors"
                    >
                      <span>🇬🇧</span>
                      <span>English</span>
                    </a>
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
