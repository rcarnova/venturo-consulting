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
    bio: "Cresciuto come manager in Oracle, nel 2016 ha cofondato Smartworking Srl — la prima società di consulenza sul lavoro ibrido in Italia. Ha lavorato in boutique e grandi realtà come Deloitte Digital come coach e consulente su progetti di cambiamento organizzativo. Nel 2017 fonda Studio Miller con Massimo Benedetti. Oggi in Venturo porta la visione strategica sulla cultura organizzativa e una delle esperienze più solide in Italia sul lavoro ibrido.",
  },
  {
    name: "Arianna Barisan",
    role: "Partner",
    title: "Art Director",
    image: "/team/arianna.jpg",
    linkedin: "https://www.linkedin.com/in/arianna-barisan/",
    bio: "Art Director con una traiettoria nel lusso: Miu Miu, Marco Bicego, Panerai — otto anni come responsabile di concept, immagine ed eventi per brand di orologeria e gioielleria internazionale. Dal 2019 lavora come consulente freelance su strategie visive, eventi e processi comunicativi. In Venturo porta rigore estetico e capacità di dare forma visiva a contenuti complessi.",
  },
  {
    name: "Massimo Benedetti",
    role: "Partner",
    title: "Communication & Storytelling Specialist",
    image: "/team/massimo.jpg",
    linkedin: "https://www.linkedin.com/in/massimobenedetti/",
    bio: "Laureato al Politecnico di Torino, nel 2016 acquisisce la qualifica di Corporate Storytelling Specialist allo IULM. Dal 2017 è formatore presso Innovation School di Talent Garden. Cofondatore di Studio Miller, lavora da anni su strategie di contenuto e narrazione per brand come Randstad, Sambonet, Samsung, Findomestic. In Venturo è il responsabile della dimensione narrativa — trasforma quello che le organizzazioni vivono in storie che le persone riconoscono come proprie.",
  },
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chi Siamo"
        description="Venturo rende visibile ciò che la vostra organizzazione sa già di sé. Lavoriamo con 3-5 clienti all'anno per far emergere e riprodurre la cultura che già funziona."
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
                Lavoriamo selettivamente con 3-5 clienti all'anno — PMI in crescita e 
                grandi organizzazioni, accomunate da uno stesso momento: quello in cui la 
                cultura aziendale diventa visibile e urgente. Non per esclusività, ma 
                perché fare questo lavoro bene richiede tempo e attenzione vera. Lavoriamo 
                nei momenti in cui la cultura è più esposta: quando qualcuno fa un errore, 
                quando si devono prendere decisioni sotto pressione, quando le promesse 
                incontrano la realtà.
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

            <AnimatedSection delay={50}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
                Venturo nasce dall'incontro di tre partner con background ibridi, accomunati dalla stessa visione: rendere visibile la cultura che già esiste nelle organizzazioni.
              </p>
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
                      <p className="text-base text-muted-foreground leading-relaxed mt-3">
                        {member.bio}
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
