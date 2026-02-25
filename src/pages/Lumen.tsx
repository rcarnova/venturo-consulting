import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import LumenHero from "@/components/lumen/LumenHero";
import LumenSchein from "@/components/lumen/LumenSchein";
import LumenTechniques from "@/components/lumen/LumenTechniques";
import LumenChallenges from "@/components/lumen/LumenChallenges";
import LumenProcess from "@/components/lumen/LumenProcess";
import LumenFormats from "@/components/lumen/LumenFormats";
import LumenCTA from "@/components/lumen/LumenCTA";

const Lumen = () => {
  return (
    <>
      <SEO
        title="Lumen | Metodologia Venturo — Illuminare la cultura organizzativa"
        description="Lumen non misura la cultura aziendale: la illumina. Interviste narrative, questionario e workshop basati sul modello di Edgar Schein per far emergere la cultura reale."
        canonical="https://venturo.it/lumen"
        lang="it"
        alternateUrls={{ it: "https://venturo.it/lumen", en: "https://venturo.it/en/lumen" }}
      />
      <Header />
      <LumenHero />
      <LumenSchein />
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
