import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

interface OverviewItem {
  label: string;
  value: string;
}

interface Phase {
  title: string;
  description: string;
}

interface CaseStudyLayoutProps {
  logo?: string;
  logoAlt?: string;
  logoPlaceholder?: string;
  title: string;
  subtitle: string;
  overview: OverviewItem[];
  challenge: {
    description: string;
    problems: string[];
  };
  phases: Phase[];
  results: string[];
}

const CaseStudyLayout = ({
  logo,
  logoAlt,
  logoPlaceholder,
  title,
  subtitle,
  overview,
  challenge,
  phases,
  results,
}: CaseStudyLayoutProps) => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container-wide py-4">
          <Link
            to="/casi-studio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna ai casi
          </Link>
        </div>

        {/* Hero */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-narrow text-center">
            <AnimatedSection>
              {logo ? (
                <img
                  src={logo}
                  alt={logoAlt || title}
                  className="h-24 md:h-32 mx-auto mb-8 invert"
                />
              ) : (
                <div className="inline-block px-8 py-4 bg-charcoal text-warm-white font-display text-2xl font-semibold rounded-lg mb-8">
                  {logoPlaceholder || title.toUpperCase()}
                </div>
              )}
              <h1 className="text-display text-charcoal">{title}</h1>
              <p className="text-subheadline mt-4 max-w-2xl mx-auto">{subtitle}</p>
            </AnimatedSection>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 bg-accent/50">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {overview.map((item, index) => (
                  <div key={index}>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-display font-medium text-charcoal">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* La Sfida */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="text-headline text-charcoal mb-6">La sfida</h2>
              <p className="text-body-large text-muted-foreground mb-8">
                {challenge.description}
              </p>
              <div className="bg-muted/50 rounded-xl p-6">
                <p className="font-medium text-charcoal mb-4">Problemi principali:</p>
                <ul className="space-y-3">
                  {challenge.problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Come abbiamo lavorato */}
        <section className="section-padding bg-muted/30">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="text-headline text-charcoal mb-12">Come abbiamo lavorato</h2>
            </AnimatedSection>
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-charcoal mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Risultati */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="text-headline text-charcoal mb-8">Risultati</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg"
                  >
                    <span className="text-primary font-semibold">✓</span>
                    <p className="text-charcoal">{result}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="text-headline text-primary-foreground mb-4">
                Vuoi risultati simili per la tua organizzazione?
              </h2>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Parliamone
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
