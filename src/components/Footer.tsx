import { Linkedin, Mail } from "lucide-react";
import logoVenturo from "@/assets/logo-venturo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logoVenturo} alt="Venturo" className="h-5" />
            <span className="text-muted-foreground">
              Comunicazione Rituali Leadership
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@venturoconsulting.it" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@venturoconsulting.it</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Venturo è un progetto di Studio Miller
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} Venturo. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
