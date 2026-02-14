import { SEO } from "@/components/SEO";
import TeamSection from "@/components/TeamSection";

const Team = () => (
  <>
    <SEO
      title="Team"
      description="Conosci il team Venturo: Rosario Carnovale, Arianna Barisan e Massimo Benedetti. Partner specializzati in cultura organizzativa, brand strategy, art direction e storytelling."
      canonical="https://venturo.it/team"
      lang="it"
      alternateUrls={{
        it: "https://venturo.it/team",
        en: "https://venturo.it/en/team",
      }}
    />
    <TeamSection />
  </>
);

export default Team;
