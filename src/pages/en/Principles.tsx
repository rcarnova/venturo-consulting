import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { SEO } from "@/components/SEO";
import PrincipiHero from "@/components/principi/PrincipiHero";
import PrincipiSection from "@/components/principi/PrincipiSection";
import PrincipiIntegration from "@/components/principi/PrincipiIntegration";
import PrincipiCTA from "@/components/principi/PrincipiCTA";
import { sezioniEN } from "@/data/principiEN";

const Principles = () => {
  return (
    <>
      <SEO
        title="Our Principles - Employer Branding & Organizational Culture Consulting | Venturo"
        description="The books and principles that guide our approach: from Schein to Neumeier, from Kahneman to Kotter. Brand strategy, organizational culture and design thinking for authentic employer branding."
        canonical="https://venturo.it/en/principles"
        lang="en"
        alternateUrls={{ it: "https://venturo.it/principi", en: "https://venturo.it/en/principles" }}
      />
      <HeaderEN />
      <PrincipiHero lang="en" />
      {sezioniEN.map((sezione, i) => (
        <PrincipiSection key={sezione.id} sezione={sezione} index={i} lang="en" />
      ))}
      <PrincipiIntegration lang="en" />
      <PrincipiCTA lang="en" />
      <FooterEN />
    </>
  );
};

export default Principles;
