import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { SEO } from "@/components/SEO";
import LumenHeroEN from "@/components/lumen/en/LumenHeroEN";
import LumenScheinEN from "@/components/lumen/en/LumenScheinEN";
import LumenTechniquesEN from "@/components/lumen/en/LumenTechniquesEN";
import LumenChallengesEN from "@/components/lumen/en/LumenChallengesEN";
import LumenProcessEN from "@/components/lumen/en/LumenProcessEN";
import LumenFormatsEN from "@/components/lumen/en/LumenFormatsEN";
import LumenCTAEN from "@/components/lumen/en/LumenCTAEN";

const LumenEN = () => {
  return (
    <>
      <SEO
        title="Lumen - Methodology for Organizational Culture & Employer Branding"
        description="Lumen doesn't measure organizational culture: it illuminates it. Methodology for authentic employer branding based on narrative interviews, questionnaire and workshops (Schein model)."
        canonical="https://venturo.it/en/lumen"
        lang="en"
        alternateUrls={{ it: "https://venturo.it/lumen", en: "https://venturo.it/en/lumen" }}
      />
      <HeaderEN />
      <LumenHeroEN />
      <LumenScheinEN />
      <LumenTechniquesEN />
      <LumenChallengesEN />
      <LumenProcessEN />
      <LumenFormatsEN />
      <LumenCTAEN />
      <FooterEN />
    </>
  );
};

export default LumenEN;
