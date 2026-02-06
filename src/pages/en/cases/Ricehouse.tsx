import CaseStudyLayoutEN from "@/components/en/CaseStudyLayoutEN";

const RicehouseEN = () => {
  return (
    <CaseStudyLayoutEN
      logo="/logos/ricehouse_white.png"
      logoAlt="Ricehouse"
      title="Ricehouse"
      subtitle="From strong identity to qualified applications"
      overview={[
        { label: "Industry", value: "Circular economy" },
        { label: "Size", value: "25 people" },
        { label: "Duration", value: "6-8 weeks" },
      ]}
      challenge={{
        description:
          "Ricehouse, an innovative company in the circular economy, struggled to attract qualified profiles despite a strong sustainability identity. Candidates didn't clearly perceive what it meant to work at Ricehouse and which values guided daily decisions.",
        problems: [
          "Strong but implicit identity",
          "Difficulty attracting aligned qualified profiles",
          "Gap between promises and actual candidate experience",
        ],
      }}
      phases={[
        {
          title: "Identity emergence (2 weeks)",
          description:
            "\"Who do we want with us?\" workshop with founders and management. We didn't ask \"what are your values?\" but \"tell us about the last time someone made a mistake - what happened?\". Identity emerged from facts, not aspirations.",
        },
        {
          title: "Employer Personas (2 weeks)",
          description:
            "Building concrete personas: who we know will thrive here, who will struggle. Cultural fit definition verifiable from the interview.",
        },
        {
          title: "Operational application (2-3 weeks)",
          description:
            "Redesign of operational rituals. Weekly meetings went from 90 minutes to 45 minutes while maintaining effectiveness. Job posting and interview process revision to reflect the emerged identity.",
        },
      ]}
      results={[
        "More qualified applications aligned with company values",
        "Coherence between declared identity and daily practices",
        "More effective meetings: from 90' to 45' maintaining output",
        "Clearer and more transparent onboarding process",
      ]}
    />
  );
};

export default RicehouseEN;
