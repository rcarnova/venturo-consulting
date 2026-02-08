import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const Ricehouse = () => {
  return (
    <>
      <SEO
        title="Ricehouse: Da identità forte a candidature qualificate"
        description="Come Ricehouse ha migliorato l'attrazione di talenti qualificati grazie a una cultura organizzativa più esplicita e coerente."
        canonical="https://venturo.it/casi-studio/ricehouse"
        lang="it"
        alternateUrls={{ it: "https://venturo.it/casi-studio/ricehouse", en: "https://venturo.it/en/case-studies/ricehouse" }}
      />
      <CaseStudyLayout
      caseId="ricehouse"
      logo="/logos/ricehouse_white.png"
      logoAlt="Ricehouse"
      title="Ricehouse"
      subtitle="Da identità forte a candidature qualificate"
      overview={[
        { label: "Settore", value: "Economia circolare" },
        { label: "Dimensione", value: "25 persone" },
        { label: "Durata", value: "6-8 settimane" },
      ]}
      challenge={{
        description:
          "Ricehouse, azienda innovativa nell'economia circolare, affrontava difficoltà nell'attrarre profili qualificati nonostante una forte identità di sostenibilità. I candidati non percepivano chiaramente cosa significasse lavorare in Ricehouse e quali valori guidassero le decisioni quotidiane.",
        problems: [
          "Identità forte ma non esplicita",
          "Difficoltà ad attrarre profili qualificati allineati",
          "Gap tra promesse e esperienza reale dei candidati",
        ],
      }}
      phases={[
        {
          title: "Emersione identità (2 settimane)",
          description:
            "Workshop \"Chi vogliamo con noi?\" con founder e management. Non abbiamo chiesto \"quali sono i vostri valori?\" ma \"raccontaci l'ultima volta che qualcuno ha sbagliato - cosa è successo?\". Identità emersa dai fatti, non dalle aspirazioni.",
        },
        {
          title: "Employer Personas (2 settimane)",
          description:
            "Costruzione di personas concrete: chi sappiamo che qui troverà bene, chi farà fatica. Definizione cultural fit verificabile già dal colloquio.",
        },
        {
          title: "Applicazione operativa (2-3 settimane)",
          description:
            "Ridisegno rituali operativi. I meeting settimanali sono passati da 90 minuti a 45 minuti mantenendo efficacia. Revisione job posting e processo colloqui per riflettere identità emersa.",
        },
      ]}
      results={[
        "Candidature più qualificate e allineate ai valori aziendali",
        "Coerenza tra identità dichiarata e pratiche quotidiane",
        "Meeting più efficaci: da 90' a 45' mantenendo output",
        "Processo di onboarding più chiaro e trasparente",
      ]}
    />
    </>
  );
};

export default Ricehouse;
