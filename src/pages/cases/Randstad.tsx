import CaseStudyLayout from "@/components/CaseStudyLayout";

const Randstad = () => {
  return (
    <CaseStudyLayout
      logo="/logos/randstad_blue.svg"
      logoAlt="Randstad"
      logoNeedsInvert={false}
      title="Randstad Italia"
      subtitle="Cultura visibile, candidati allineati"
      overview={[
        { label: "Settore", value: "Ricerca e selezione HR" },
        { label: "Dimensione", value: "Multinazionale - 40 paesi" },
        { label: "Durata", value: "3-4 mesi" },
      ]}
      challenge={{
        description:
          "Randstad Italia, parte di una multinazionale olandese leader nella ricerca del lavoro, cercava un modo per raccontare autenticamente la vita interna dell'azienda. Mara (comunicazione interna), Paola (HR) e Fulvia (marketing) volevano tradurre la cultura aziendale in contenuti credibili attraverso le voci dei dipendenti.",
        problems: [
          "Come raccontare la realtà Randstad in modo autentico",
          "Cosa dire e come dirlo senza retorica HR",
          "Come coinvolgere la community interna nel racconto",
        ],
      }}
      phases={[
        {
          title: "Individuazione valori (workshop)",
          description:
            "Workshop facilitati per far emergere i valori reali su cui si basa Randstad Italia. Non valori aspirazionali, ma quelli effettivamente vissuti e trasmessi quotidianamente.",
        },
        {
          title: "Coinvolgimento community",
          description:
            "Abbiamo chiesto direttamente alla community Randstad di raccontare la propria esperienza con l'azienda. Approccio bottom-up per catturare autenticità.",
        },
        {
          title: "Interviste e racconto",
          description:
            "Realizzazione di interviste con dipendenti che vivono quotidianamente le sfide dell'azienda. Volevamo che fossero loro a raccontare Randstad, non il marketing.",
        },
        {
          title: "Video employer branding",
          description:
            "Creazione video basato sui valori emersi e sulle interviste raccolte. Montaggio che estrapola e trasmette la vera essenza di Randstad attraverso volti e storie reali.",
        },
      ]}
      results={[
        "Video employer branding autentico con voci dei dipendenti",
        "Valori aziendali esplicitati e riconoscibili",
        "Community coinvolta attivamente nel racconto",
        "Messaggi credibili perché basati su esperienze reali",
        "Materiale utilizzabile per attraction e comunicazione interna",
      ]}
    />
  );
};

export default Randstad;
