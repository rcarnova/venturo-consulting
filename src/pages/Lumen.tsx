import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Eye, Users, MessageCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Lumen = () => {
  return (
    <>
      <SEO
        title="Lumen | Metodologia Venturo — Illuminare la cultura organizzativa"
        description="Lumen non misura la cultura aziendale: la illumina. 8 domande narrative basate sul modello di Edgar Schein per far emergere la cultura reale, non quella dichiarata."
        canonical="https://venturo.it/lumen"
        lang="it"
        alternateUrls={{ it: "https://venturo.it/lumen", en: "https://venturo.it/en/lumen" }}
      />
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container-wide max-w-4xl">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Metodologia</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Non misuriamo la cultura.<br />
              <span className="text-primary">La illuminiamo.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="space-y-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              <p>
                La cultura organizzativa è come l'acqua per chi ci nuota dentro: invisibile proprio perché 
                onnipresente. I collaboratori respirano le sue regole non scritte ogni giorno, ma faticano 
                a nominarle — figurarsi a compilare un questionario su di esse.
              </p>
              <p>
                Ecco perché Lumen non somministra scale Likert. Non produce indici aggregati. Non consegna 
                un report con percentuali. Lumen usa domande narrative per far emergere storie — e nelle 
                storie, la cultura si rivela da sola.
              </p>
              <p>
                Il risultato non è una diagnosi. È uno specchio. Un'immagine fedele di come le persone 
                vivono davvero l'organizzazione, non di come pensano che dovrebbero viverla.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SCHEIN BOX */}
      <section className="py-24 bg-muted/40">
        <div className="container-wide max-w-5xl">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Fondamento teorico</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Il modello di Edgar Schein</h2>
            <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
              Ogni organizzazione ha tre strati culturali, sovrapposti come cerchi concentrici. 
              La maggior parte degli strumenti di misurazione vede solo il primo. Lumen scende fino al terzo.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                num: "1",
                label: "Artefatti",
                desc: "Ciò che si vede: spazi fisici, rituali visibili, gergo interno, simboli, storie raccontate ai nuovi. Tutto ciò che un osservatore esterno potrebbe notare entrando in ufficio.",
                examples: ["Riunioni in piedi o seduti?", "Si batte un cinque o si stringe la mano?", "Chi parla nei meeting?"],
              },
              {
                num: "2",
                label: "Valori dichiarati",
                desc: "Ciò che si dice: mission aziendale, valori incorniciati, linee guida, politiche HR. Quello che l'organizzazione afferma di essere e di credere.",
                examples: ["\"Siamo flat e agili\"", "\"Mettiamo le persone al centro\"", "\"Favoriamo l'autonomia\""],
              },
              {
                num: "3",
                label: "Assunzioni di base",
                desc: "Ciò che si dà per scontato: credenze inconsce, regole non scritte che nessuno ha mai deciso ma che tutti seguono. Il vero DNA culturale, spesso invisibile anche ai fondatori.",
                examples: ["Chi sbaglia viene aiutato o punito?", "L'errore ammesso è visto come debolezza?", "Basta fare bene o serve anche apparire?"],
              },
            ].map((level, i) => (
              <AnimatedSection key={level.num} delay={i * 100}>
                <div className="bg-background border border-border rounded-xl p-8 h-full flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-mono font-bold flex items-center justify-center">
                      {level.num}
                    </span>
                    <h3 className="font-bold text-lg">{level.label}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{level.desc}</p>
                  <ul className="mt-auto space-y-1">
                    {level.examples.map((ex) => (
                      <li key={ex} className="text-xs font-mono text-muted-foreground italic">"{ex}"</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Principio metodologico</p>
              <p className="text-foreground leading-relaxed">
                Le survey tradizionali raggiungono al massimo il secondo livello. Le persone rispondono 
                in base a ciò che pensano sia corretto dire, non in base a ciò che vivono. Lumen bypassa 
                questo filtro attraverso domande narrative: quando racconti una storia, la verità emerge 
                prima che tu possa censurarla.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LE DOMANDE */}
      <section className="py-24 bg-background">
        <div className="container-wide max-w-5xl">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Lo strumento</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">8 domande. Nessun questionario.</h2>
            <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
              Non chiediamo "quanto sei soddisfatto?". Chiediamo di raccontare. 
              Tre esempi tra le otto domande che compongono Lumen.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "L'amico al bar",
                question: "Immagina di incontrare un amico che non vedi da mesi. Lui ti chiede com'è lavorare qui. Cosa gli racconti, in due minuti?",
                note: "Rivela la cultura percepita vs quella dichiarata. L'informalità della scena scioglie la difesa.",
              },
              {
                title: "L'errore permesso",
                question: "Pensa all'ultima volta che qualcosa è andato storto — una decisione sbagliata, un progetto che non ha funzionato. Come è andata a finire?",
                note: "Illumina la tolleranza al fallimento e il rapporto con l'accountability reale.",
              },
              {
                title: "Il nuovo collega",
                question: "Se dovessi spiegare a un nuovo collega le cose 'non scritte' — quelle che non troverà mai nel manuale — cosa gli diresti?",
                note: "Porta in superficie le assunzioni di base, il terzo livello di Schein, il più difficile da raggiungere.",
              },
            ].map((q, i) => (
              <AnimatedSection key={q.title} delay={i * 100}>
                <div className="border border-border rounded-xl p-8 h-full flex flex-col gap-4 hover:border-primary/30 transition-colors">
                  <h3 className="font-bold text-base">{q.title}</h3>
                  <p className="italic text-muted-foreground text-sm leading-relaxed flex-1">"{q.question}"</p>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-4 leading-relaxed">{q.note}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <p className="text-sm text-muted-foreground font-mono">
              + altre 5 domande rivelano: gestione del potere, meccanismi di riconoscimento, 
              identità collettiva, rapporto con il cambiamento, qualità della fiducia interna.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* IL PROCESSO */}
      <section className="py-24 bg-muted/40">
        <div className="container-wide max-w-5xl">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Come funziona</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dallo specchio all'azione</h2>
            <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
              Lumen non si esaurisce nella rilevazione. Ogni fase prepara la successiva, 
              fino a trasformare la comprensione in progetto concreto.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                icon: MessageCircle,
                num: "01",
                title: "Somministrazione",
                desc: "Interviste narrative con un campione rappresentativo dell'organizzazione. Non focus group, non questionari: conversazioni one-to-one di 45 minuti ciascuna.",
              },
              {
                icon: Eye,
                num: "02",
                title: "Analisi",
                desc: "Lettura tematica delle trascrizioni. Emersione dei pattern ricorrenti, delle tensioni, delle metafore spontanee usate dalle persone per descrivere la propria esperienza.",
              },
              {
                icon: Users,
                num: "03",
                title: "Workshop",
                desc: "Restituzione al team di leadership. Non un report da leggere: una sessione guidata per riconoscersi nello specchio e decidere insieme cosa fare.",
              },
              {
                icon: Target,
                num: "04",
                title: "Progetto 3 mesi",
                desc: "Definizione di 2–3 interventi concreti sulle leve culturali emerse. Piccoli cambiamenti di rituali, linguaggio, processi che generano spostamenti reali.",
              },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.num} delay={i * 100}>
                  <div className="bg-background border border-border rounded-xl p-8 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-primary">{step.num}</span>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-base">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={400}>
            <div className="bg-background border border-border rounded-xl p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">L'output</p>
              <p className="text-foreground leading-relaxed">
                Non un report di 80 pagine che finisce in un cassetto. Lumen produce uno <strong>specchio narrativo</strong>: 
                un documento di 15–20 pagine in cui le persone dell'organizzazione possono riconoscere la propria voce, 
                le proprie storie, le proprie tensioni — e capire finalmente perché certe cose non cambiano mai, 
                nonostante le buone intenzioni.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FORMATI */}
      <section className="py-24 bg-background">
        <div className="container-wide max-w-4xl">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Modalità di erogazione</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Due formati, un solo obiettivo.</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="border border-border rounded-xl p-8 h-full flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Formato</p>
                  <h3 className="text-2xl font-bold">Essenziale</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground flex-1">
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 8–12 interviste narrative</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Analisi tematica completa</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Specchio narrativo (15 pp.)</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 1 workshop di restituzione (3h)</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Mappa delle leve prioritarie</li>
                </ul>
                <p className="text-xs font-mono text-muted-foreground">Ideale per: prima rilevazione, PMI, team di 20–80 persone</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="border border-primary/50 bg-primary/5 rounded-xl p-8 h-full flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Formato</p>
                  <h3 className="text-2xl font-bold">Esteso</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground flex-1">
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 15–25 interviste (più cluster)</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Analisi per funzione / livello</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Specchio narrativo (25 pp.) + executive summary</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 2 workshop (restituzione + co-progettazione)</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Piano interventi 3 mesi con KPI narrativi</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Follow-up a 90 giorni</li>
                </ul>
                <p className="text-xs font-mono text-muted-foreground">Ideale per: trasformazioni culturali, M&A, organizzazioni 100+ persone</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/40">
        <div className="container-wide max-w-3xl text-center">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Prossimo passo</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Volete vedere cosa emerge<br />quando le persone raccontano davvero?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Una conversazione esplorativa di 30 minuti è sufficiente per capire se Lumen 
              è lo strumento giusto per la vostra organizzazione — e in quale formato.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <a href="mailto:info@venturoconsulting.it">Parliamone</a>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/casi-studio">Vedi i progetti</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Lumen;
