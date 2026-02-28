import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import LumenHero from "@/components/lumen/LumenHero";
import LumenSchein from "@/components/lumen/LumenSchein";
import LumenValori from "@/components/lumen/LumenValori";
import LumenTechniques from "@/components/lumen/LumenTechniques";
import LumenChallenges from "@/components/lumen/LumenChallenges";
import LumenProcess from "@/components/lumen/LumenProcess";
import LumenFormats from "@/components/lumen/LumenFormats";
import LumenCTA from "@/components/lumen/LumenCTA";

const Lumen = () => {
  return (
    <>
      <SEO
        title="Lumen - Metodologia per Cultura Organizzativa ed Employer Branding"
        description="Lumen non misura la cultura aziendale: la illumina. Metodologia per employer branding autentico basata su interviste narrative, questionario e workshop (modello Schein)."
        canonical="https://venturo.it/lumen"
        lang="it"
        alternateUrls={{ it: "https://venturo.it/lumen", en: "https://venturo.it/en/lumen" }}
      />
      <Header />
      <LumenHero />
      <LumenSchein />
      <LumenValori />
      <LumenTechniques />
      <LumenChallenges />
      <LumenProcess />
      <LumenFormats />
      <LumenCTA />
      <Footer />
    </>
  );
};

export default Lumen;
