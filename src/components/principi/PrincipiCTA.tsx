import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Props {
  lang?: "it" | "en";
}

const copy = {
  it: {
    label: "Prossimo passo",
    title: "Pronti a lavorare con noi?",
    desc: "Se questi principi risuonano con il vostro modo di vedere le organizzazioni, probabilmente Venturo è il partner giusto per voi.",
    cta: "Parliamone",
    link: "/casi-studio",
    linkLabel: "Vedi i progetti",
    homePath: "/",
    contactPath: "/#contact",
  },
  en: {
    label: "Next step",
    title: "Ready to work with us?",
    desc: "If these principles resonate with how you see organizations, Venturo is probably the right partner for you.",
    cta: "Let's talk",
    link: "/en/case-studies",
    linkLabel: "See the projects",
    homePath: "/en",
    contactPath: "/en#contact",
  },
};

const PrincipiCTA = ({ lang = "it" }: Props) => {
  const t = copy[lang];

  const scrollToContact = () => {
    if (window.location.pathname === t.homePath) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = t.contactPath;
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container-wide max-w-3xl text-center">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">{t.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.title}</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">{t.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" onClick={scrollToContact}>
              {t.cta}
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to={t.link}>{t.linkLabel}</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PrincipiCTA;
