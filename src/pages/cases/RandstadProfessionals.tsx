import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const RandstadProfessionals = () => {
  return (
    <>
      <SEO
        title="EVP e employer branding per divisione top management — Randstad Professionals — Venturo"
        description="EVP, Talent Personas e video employer branding per costruire un'identità distintiva per Randstad Professionals, la divisione dedicata ai profili middle e top management."
        canonical="https://venturo.it/casi-studio/randstad-professionals"
        lang="it"
        alternateUrls={{ it: "https://venturo.it/casi-studio/randstad-professionals", en: "https://venturo.it/en/case-studies/randstad-professionals" }}
      />
      <CaseStudyLayout
        caseId="randstad-professionals"
        logo="/logos/randstad_blue.svg"
        logoAlt="Randstad Professionals"
        logoClassName="h-16 sm:h-20 md:h-28 lg:h-32 mx-auto mb-8 brightness-0"
        title="Randstad Professionals"
        subtitle="Da divisione invisibile a identità riconoscibile"
        overview={[
          { label: "Settore", value: "Ricerca e selezione HR" },
          { label: "Dimensione", value: "Divisione specializzata — Italia" },
          { label: "Durata", value: "4-5 mesi" },
          { label: "Interlocutori", value: "HR, Marketing, Business Unit Leader" },
        ]}
        challenge={{
          description:
            "Randstad Professionals è la divisione dedicata alla ricerca e selezione di middle, senior e top management. Nel 2020 la divisione era al centro di un'ambizione importante: inserire oltre 40 professionisti e raggiungere obiettivi di fatturato significativi. Ma c'era un problema di percezione su due fronti. All'esterno, Randstad era conosciuta principalmente come brand della somministrazione, non come player del hunting manageriale. All'interno, la divisione Professionals era percepita come individualista e poco integrata. Il team aveva valori chiari — formazione, correttezza con i candidati, rispetto del committente — ma non riusciva a renderli visibili né all'esterno né dentro l'organizzazione.",
          problems: [
            "Come differenziare Randstad Professionals da Randstad Italia agli occhi del mercato",
            "Come costruire una EVP autentica per attrarre oltre 40 professionisti in un anno",
            "Come rendere visibili i valori agiti della divisione, non solo quelli aspirazionali",
            "Come coinvolgere il team nelle scelte strategiche invece di calare decisioni dall'alto",
          ],
        }}
        phases={[
          {
            title: "Workshop di progettazione",
            description:
              "Prima di costruire qualsiasi messaggio, abbiamo lavorato con Marketing, HR, Director e management di Professionals per capire la direzione strategica. L'obiettivo non era produrre una lista di valori, ma progettare insieme il secondo workshop e definire cosa volevamo davvero che emergesse dalle persone.",
          },
          {
            title: "Workshop di Envisioning",
            description:
              "Quindici persone, immagini, stimoli visivi e tre domande: chi siamo, come vediamo il mercato, come vogliamo mostrarci al mondo. Un approccio bottom-up per far rispondere la divisione alla domanda più concreta dell'employer branding: cosa vuol dire lavorare qui? I valori emersi — empatia, competenza, ambizione, etica — non erano stati scritti da nessun consulente. Erano già lì, vissuti ogni giorno.",
            image: {
              src: "/cases/randstad-professionals-envisioning.jpg",
              alt: "Workshop di envisioning con il team Randstad Professionals, lavoro con vision board e ritagli di immagini",
              caption: "Workshop di envisioning con il team Randstad Professionals",
            },
          },
          {
            title: "Sviluppo EVP e Talent Personas",
            description:
              "Dagli output dei workshop abbiamo costruito la Employee Value Proposition di Randstad Professionals, organizzata attorno a tre pillar: Human (empatia, relazione, etica), Professionals (competenza, consulenza, crescita), Forward (innovazione, anticipazione, ambizione). In parallelo abbiamo definito le Talent Personas target — profili dettagliati per paure, desideri, comportamenti e stili di vita — per costruire messaggi davvero rilevanti per chi la divisione voleva attrarre.",
            image: {
              src: "/cases/randstad-professionals-personas.png",
              alt: "Documento di lavoro sulle Talent Personas di Randstad Professionals",
              caption: "Talent Personas sviluppate per Randstad Professionals",
            },
          },
          {
            title: "Produzione video employer branding",
            description:
              "Il manifesto e le personas avevano bisogno di una voce. Abbiamo scritto, diretto e prodotto video-interviste con i professionisti del team: ogni video racconta una persona reale, perché ha scelto Randstad Professionals, cosa la trattiene. Autenticità come scelta strategica, non come effetto collaterale. Materiali progettati per funzionare sia verso l'esterno — candidati, LinkedIn, careers page — sia verso l'interno, come strumento di coesione e identità.",
            image: {
              src: "/cases/randstad-professionals-video.jpg",
              alt: "Set di produzione video employer branding con ciak per Randstad Professionals",
              caption: "Sul set delle video interviste employer branding",
            },
          },
        ]}
        results={[
          "EVP strutturata e condivisa internamente",
          "Talent Personas definite per recruitment e comunicazione",
          "Pillar valoriali allineati tra HR, marketing e business",
          "Video employer branding prodotti con volti e voci reali",
          "Identità distintiva rispetto al brand Randstad Italia",
          "Materiale utilizzabile su LinkedIn, careers page e selezione",
        ]}
      />
    </>
  );
};

export default RandstadProfessionals;
