import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Rosario Carnovale",
    role: "Partner",
    title: "Business Coach & Brand Strategist",
    image: "/team/rosario.jpg",
    linkedin: "https://www.linkedin.com/in/rosariocarnovale/",
    bio: "Cresciuto come manager in Oracle per 10 anni, nel 2016 ha cofondato Smartworking Srl — la prima società di consulenza sul lavoro ibrido in Italia. Ha lavorato come coach e consulente su progetti di cambiamento organizzativo in Maxim Consulting e Deloitte Digital. Nel 2017 fonda Studio Miller con Massimo Benedetti.",
    bio2: "In Venturo guida progetti di trasformazione culturale e employer branding strategico. Ha vissuto dall'interno il gap tra promessa e realtà organizzativa nelle grandi aziende, e lo ha metodologizzato in strumenti proprietari come lo Smart Working Canvas. Porta una delle esperienze più solide in Italia sul lavoro ibrido e la consapevolezza che la cultura si cambia modificando artefatti concreti — riunioni, rituali, linguaggi.",
  },
  {
    name: "Arianna Barisan",
    role: "Partner",
    title: "Art Director",
    image: "/team/arianna.jpg",
    linkedin: "https://www.linkedin.com/in/arianna-barisan/",
    bio: "Art Director con una traiettoria nel lusso: Miu Miu, Marco Bicego, Panerai — otto anni come responsabile di concept, immagine ed eventi per brand di orologeria e gioielleria internazionale. Dal 2019 lavora come consulente freelance su strategie visive, eventi e processi comunicativi.",
    bio2: "In Venturo traduce insight culturali in artefatti visivi — non solo design ma cultura materializzata. Prima capiamo chi l'organizzazione è davvero (attraverso Lumen), poi creiamo i simboli, i colori, i linguaggi visivi che rinforzano quella identità. Porta rigore estetico e la convinzione che costruire un brand coincide con costruire una cultura interna.",
  },
  {
    name: "Massimo Benedetti",
    role: "Partner",
    title: "Communication & Storytelling Specialist",
    image: "/team/massimo.jpg",
    linkedin: "https://www.linkedin.com/in/massimobenedetti/",
    bio: "Laureato al Politecnico di Torino, nel 2016 acquisisce la qualifica di Corporate Storytelling Specialist allo IULM. Dal 2017 è formatore presso Innovation School di Talent Garden. Cofondatore di Studio Miller, lavora da anni su strategie di contenuto e narrazione per brand come Randstad, Sambonet, Samsung, Findomestic.",
    bio2: "In Venturo guida la metodologia Lumen e facilita i workshop dove le organizzazioni si ascoltano attraverso le proprie voci. È responsabile della dimensione narrativa — le domande di Lumen non sono questionari ma dispositivi di emersione che richiedono competenza nella facilitazione di conversazioni profonde. Trasforma quello che le organizzazioni vivono in storie che le persone riconoscono come proprie.",
  },
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chi Siamo - Consulenza Employer Branding"
        description="Boutique di consulenza employer branding e cultura organizzativa. Lavoriamo con 3-5 clienti all'anno per far emergere e riprodurre la cultura che già funziona."
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
                      <p className="text-base text-muted-foreground leading-relaxed mt-3">
                        {member.bio2}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Perché lavoriamo insieme */}
          <div className="border-t border-border mt-20 pt-16 md:pt-24">
            <AnimatedSection>
              <div className="max-w-2xl mb-8">
                <p className="text-sm font-mono uppercase tracking-widest text-primary mb-4">
                  Sinergia
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Perché lavoriamo insieme
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="max-w-3xl space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Venturo nasce dall'incontro di tre competenze che raramente dialogano.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Rosario</strong> porta la cultura dall'interno — ha vissuto le grandi organizzazioni per 10 anni in Oracle e ha metodologizzato quel vissuto in strumenti proprietari come lo Smart Working Canvas. Sa che le organizzazioni non cambiano con policy dall'alto, ma modificando consapevolmente gli artefatti quotidiani.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Massimo</strong> porta la narrazione come metodo — sa che le storie rivelano più dei numeri, e che facilitare conversazioni profonde è una competenza specifica. Le domande di <Link to="/lumen" className="text-primary hover:underline">Lumen</Link> non sono questionari — sono dispositivi di emersione narrativa.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Arianna</strong> porta il design come materializzazione — traduce insight culturali in artefatti visivi che comunicano e rinforzano significati profondi. Non "fa il logo dopo che la cultura è stata definita" — lavora simultaneamente su cultura e identità.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Questa combinazione ci permette di fare qualcosa che pochi altri fanno: lavorare sulla cultura come infrastruttura della promessa di brand — ciò che rende credibile o falsa ogni comunicazione esterna, ogni selezione, ogni proposta al cliente.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
