import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import logoVenturo from "@/assets/logo-venturo.png";

const FooterEN = () => {
  return (
    <footer className="pt-12 pb-8 border-t border-border bg-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src={logoVenturo} alt="Venturo" className="h-5" />
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@venturoconsulting.it" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@venturoconsulting.it</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/venturo-consulting/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <Link 
              to="/en/lumen" 
              className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              Lumen — Methodology
            </Link>
            <Link 
              to="/privacy" 
              className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-[0.85rem] font-mono text-muted-foreground mt-2">
            © 2025 Studio Miller - P.IVA 02662900022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterEN;
