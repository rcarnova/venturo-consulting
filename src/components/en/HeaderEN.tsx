import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import logoVenturo from "@/assets/logo-venturo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/en#problem", label: "The Problem" },
  { href: "/en#how-we-work", label: "How We Work" },
  { href: "/en#levers", label: "Levers" },
  { href: "/en#cases", label: "Case Studies" },
  { href: "/en#about", label: "About Us" },
];

const HeaderEN = () => {
  const [open, setOpen] = useState(false);

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
        <a href="/en">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Change language">
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
                <a href="/en" className="flex items-center gap-2 cursor-pointer">
                  <span className="text-sm font-medium">🇬🇧</span>
                  <span>English</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button onClick={scrollToContact} variant="default" size="default" className="hidden sm:inline-flex">
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
                  Let's Talk
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default HeaderEN;
