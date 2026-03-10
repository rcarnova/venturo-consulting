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
        subtitle="Identità di marca per chi seleziona i migliori"
        overview={[
          { label: "Settore", value: "Ricerca e selezione HR" },
          { label: "Dimensione", value: "Divisione specializzata — Italia" },
          { label: "Durata", value: "4-5 mesi" },
          { label: "Interlocutori", value: "HR, Marketing, Business Unit Leader" },
        ]}
        challenge={{
          description:
            "Randstad Professionals è la divisione di Randstad dedicata ai profili middle e top management. Nonostante l'alta qualità del servizio, la divisione faticava a raccontarsi in modo distinto rispetto alla casa madre, sia verso i candidati che verso le aziende clienti. Il team voleva costruire un'identità forte, riconoscibile e credibile, capace di attrarre i professionisti giusti e di posizionare Randstad Professionals come partner d'elezione nel mercato della ricerca qualificata.",
          problems: [
            "Come differenziare Randstad Professionals da Randstad Italia agli occhi del mercato",
            "Come costruire una EVP (Employee Value Proposition) autentica e riconoscibile",
            "Come dare voce ai professionisti del team attraverso contenuti credibili",
            "Come allineare valori interni e comunicazione esterna",
          ],
        }}
        phases={[
          {
            title: "Workshop di Envisioning",
            description:
              "Sessioni di lavoro con il team per far emergere la percezione interna: chi siamo, come vediamo il mercato, come vogliamo mostrarci al mondo. Attraverso lavoro con immagini e stimoli visivi, abbiamo portato alla luce i valori reali e le ambizioni della divisione.",
            image: {
              src: "/cases/randstad-professionals-envisioning.jpg",
              alt: "Workshop di envisioning con il team Randstad Professionals, lavoro con vision board e ritagli di immagini",
              caption: "Workshop di envisioning con il team Randstad Professionals",
            },
          },
          {
            title: "Sviluppo della EVP e dei Pillar valoriali",
            description:
              "A partire dagli output del workshop, abbiamo costruito la Employee Value Proposition di Randstad Professionals, organizzata attorno a tre pillar: Human (empatia, relazione, etica), Professionals (competenza, consulenza, crescita), Forward (innovazione, anticipazione, ambizione).",
          },
          {
            title: "Talent Personas",
            description:
              "Definizione delle personas target: i professionisti che Randstad Professionals vuole attrarre e trattenere. Profili dettagliati per paure, desideri, comportamenti e stili di vita, per costruire messaggi davvero rilevanti.",
            image: {
              src: "/cases/randstad-professionals-personas.png",
              alt: "Documento di lavoro sulle Talent Personas di Randstad Professionals",
              caption: "Talent Personas sviluppate per Randstad Professionals",
            },
          },
          {
            title: "Produzione video employer branding",
            description:
              "Scrittura, regia e produzione di video interviste con i professionisti del team. Ogni video racconta una persona reale: chi è, perché ha scelto Randstad Professionals, cosa la fa restare. Autenticità come scelta strategica, non come effetto.",
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
