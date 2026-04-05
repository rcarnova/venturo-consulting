import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import logoVenturo from "@/assets/logo-venturo.webp";
import logoV from "@/assets/logo-v.webp";
import { getItRoute } from "@/lib/language-routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/en/challenges", label: "Challenges" },
  { href: "/en/lumen", label: "Lumen" },
  { href: "/en/case-studies", label: "Case Studies" },
  { href: "/en/principles", label: "Principles" },
  { href: "/en/about", label: "About Us" },
  { href: "/en/evp-analysis", label: "EVP Analysis" },
  { href: "/magazine", label: "Articles" },
];

const HeaderEN = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const itPath = getItRoute(location.pathname);

  const scrollToContact = () => {
    if (window.location.pathname === '/en') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/en#contact';
    }
  };

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link to="/en" className="relative h-6 md:h-8 flex items-center" style={{ minWidth: 120 }}>
          <img src={logoVenturo} alt="Venturo - organizational culture and employer branding consulting" className="h-6 md:h-8 w-auto object-contain" width={120} height={32} />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.href.includes('#')
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
              <Button variant="ghost" size="icon" aria-label="Change language">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to={itPath} className="flex items-center gap-2 cursor-pointer">
                  <span className="text-sm font-medium">🇮🇹</span>
                  <span>Italiano</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/en" className="flex items-center gap-2 cursor-pointer">
                  <span className="text-sm font-medium">🇬🇧</span>
                  <span>English</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button onClick={scrollToContact} variant="default" size="default" className="glow-btn px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm">
            Let's Talk
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
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
                  Let's Talk
                </Button>
                
                {/* Language Switcher */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Language</p>
                  <div className="flex gap-2">
                    <Link
                      to={itPath}
                      onClick={handleNavClick}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-border text-muted-foreground hover:bg-accent transition-colors"
                    >
                      <span>🇮🇹</span>
                      <span>Italiano</span>
                    </Link>
                    <Link
                      to="/en"
                      onClick={handleNavClick}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-primary/10 text-foreground font-medium"
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

export default HeaderEN;
