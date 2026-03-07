import { SEO } from "@/components/SEO";
import HeaderEN from "@/components/en/HeaderEN";
import HeroSectionEN from "@/components/en/HeroSectionEN";
import WhyVenturoSectionEN from "@/components/en/WhyVenturoSectionEN";
import HowWeWorkSectionEN from "@/components/en/HowWeWorkSectionEN";
import ReferencesSectionEN from "@/components/en/ReferencesSectionEN";
import LeversSectionEN from "@/components/en/LeversSectionEN";
import CasesSectionEN from "@/components/en/CasesSectionEN";
import ResultCalloutEN from "@/components/en/ResultCalloutEN";
import PartnersSectionEN from "@/components/en/PartnersSectionEN";
import TeamPreviewSectionEN from "@/components/en/TeamPreviewSectionEN";
import ClientsSectionEN from "@/components/en/ClientsSectionEN";
import ContactSectionEN from "@/components/en/ContactSectionEN";
import FooterEN from "@/components/en/FooterEN";

const IndexEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Venturo — Organizational Culture & Employer Branding Consulting"
        description="We make your organization's culture visible. Venturo works on employer branding, internal communication and cultural transformation for companies that want to attract and retain the right talent."
        canonical="https://venturo.it/en"
        lang="en"
        alternateUrls={{ it: "https://venturo.it", en: "https://venturo.it/en" }}
      />
      <HeaderEN />
      <main>
        <HeroSectionEN />
        <ClientsSectionEN />
        <WhyVenturoSectionEN />
        <HowWeWorkSectionEN />
        <ReferencesSectionEN />
        <LeversSectionEN />
        <CasesSectionEN />
        <ResultCalloutEN />
        <PartnersSectionEN />
        <TeamPreviewSectionEN />
        <ContactSectionEN />
      </main>
      <FooterEN />
    </div>
  );
};

export default IndexEN;
