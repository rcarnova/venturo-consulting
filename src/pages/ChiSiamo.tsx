import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Rosario Carnovale",
    role: "Partner",
    title: "Business Coach & Brand Strategist",
    image: "/team/rosario.jpg",
    linkedin: "https://www.linkedin.com/in/rosariocarnovale/",
  },
  {
    name: "Arianna Barisan",
    role: "Partner",
    title: "Art Director",
    image: "/team/arianna.jpg",
    linkedin: "https://www.linkedin.com/in/arianna-barisan/",
  },
  {
    name: "Massimo Benedetti",
    role: "Partner",
    title: "Communication & Storytelling Specialist",
    image: "/team/massimo.jpg",
    linkedin: "https://www.linkedin.com/in/massimobenedetti/",
  },
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chi Siamo"
        description="Venturo è una boutique di consulenza che chiude il gap tra cultura aziendale dichiarata e cultura vissuta. Conosci il team: Rosario, Arianna e Massimo."
        canonical="https://venturo.it/chi-siamo"
        lang="it"
        alternateUrls={{ it: "https://venturo.it/chi-siamo", en: "https://venturo.it/en/about" }}
      />
      <Header />
      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container-wide">
          {/* Intro Section */}
          <AnimatedSection className="mb-16 md:mb-24">
            <div className="max-w-2xl">
              <p className="text-sm font-mono uppercase tracking-widest text-primary mb-4">
                Chi siamo
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Rendiamo visibile ciò che la vostra organizzazione sa già di sé.
              </h1>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="max-w-3xl space-y-6 mb-24">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Venturo è una boutique di consulenza che chiude il gap tra cultura 
                aziendale dichiarata e cultura vissuta. Non creiamo valori aspirazionali. 
                Rendiamo esplicita la cultura che già esiste.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lavoriamo selettivamente con 3-5 clienti all'anno — imprese familiari 
                (100-300 persone) e scale-up (50-200 persone) — nei momenti in cui la 
                cultura è più visibile: quando qualcuno fa un errore, quando si devono 
                prendere decisioni sotto pressione, quando le promesse incontrano la realtà.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Il nostro approccio è maieutico. Facciamo emergere pattern autentici da 
                storie reali, non da workshop generici. Lavoriamo su tre pilastri esterni 
                — Comunicazione, Rituali, Leadership — supportati da sei leve operative 
                interne. Design culturale chirurgico, non change management generico.
              </p>
            </div>
          </AnimatedSection>

          {/* Team Section */}
          <div className="border-t border-border pt-16 md:pt-24">
            <AnimatedSection>
              <div className="max-w-2xl mb-12">
                <p className="text-sm font-mono uppercase tracking-widest text-primary mb-4">
                  Team
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  I partner
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {team.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 100}>
                  <div className="group">
                    <div className="aspect-square overflow-hidden rounded-lg mb-6 bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-[center_30%] grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {member.name}
                        </h3>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn di ${member.name}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      </div>
                      <p className="text-sm font-mono uppercase tracking-widest text-primary">
                        {member.role}
                      </p>
                      <p className="text-base font-mono text-muted-foreground">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
