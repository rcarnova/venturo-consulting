import { SEO } from "@/components/SEO";
import TeamSectionEN from "@/components/en/TeamSectionEN";

const TeamEN = () => (
  <>
    <SEO
      title="Team"
      description="Meet the Venturo team: Rosario Carnovale, Arianna Barisan and Massimo Benedetti. Partners specialized in organizational culture, brand strategy, art direction and storytelling."
      canonical="https://venturo.it/en/team"
      lang="en"
      alternateUrls={{
        it: "https://venturo.it/team",
        en: "https://venturo.it/en/team",
      }}
    />
    <TeamSectionEN />
  </>
);

export default TeamEN;
