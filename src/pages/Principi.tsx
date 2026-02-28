import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import PrincipiHero from "@/components/principi/PrincipiHero";
import PrincipiSection from "@/components/principi/PrincipiSection";
import PrincipiIntegration from "@/components/principi/PrincipiIntegration";
import PrincipiCTA from "@/components/principi/PrincipiCTA";
import { sezioni } from "@/data/principi";

const Principi = () => {
  return (
    <>
      <SEO
        title="I nostri principi - Consulenza Employer Branding e Cultura Organizzativa | Venturo"
        description="I libri e i principi che guidano il nostro approccio: da Schein a Neumeier, da Kahneman a Kotter. Brand strategy, cultura organizzativa e design thinking al servizio dell'employer branding."
        canonical="https://venturo.it/principi"
        lang="it"
        alternateUrls={{ it: "https://venturo.it/principi", en: "https://venturo.it/en/principles" }}
      />
      <Header />
      <PrincipiHero />
      {sezioni.map((sezione, i) => (
        <PrincipiSection key={sezione.id} sezione={sezione} index={i} />
      ))}
      <PrincipiIntegration />
      <PrincipiCTA />
      <Footer />
    </>
  );
};

export default Principi;
