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
import LeadMagnetSectionEN from "@/components/en/LeadMagnetSectionEN";
import ContactSectionEN from "@/components/en/ContactSectionEN";
import FooterEN from "@/components/en/FooterEN";

const IndexEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Venturo — Organizational Culture & Employer Branding Consulting"
        description="We make your organization's culture visible. Venturo works on employer branding, internal communication and cultural transformation for companies that want to attract and retain the right talent."
        canonical="https://venturoconsulting.it/en"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it", en: "https://venturoconsulting.it/en" }}
      />
      <HeaderEN />
      <main>
        <HeroSectionEN />
        <ClientsSectionEN />
        <div className="flex justify-center px-6 pt-12 pb-12">
          <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.6, maxWidth: '720px', textAlign: 'left', borderLeft: '3px solid #000000', paddingLeft: '20px' }}>
            Venturo is a consulting firm specializing in organizational culture and employer branding. We work with Italian companies that want to make their cultural identity visible, to attract the right talent, align internal and external communication, and build organizations that are coherent with their values.
          </p>
        </div>
        <WhyVenturoSectionEN />
        <HowWeWorkSectionEN />
        <ReferencesSectionEN />
        <LeversSectionEN />
        <CasesSectionEN />
        <ResultCalloutEN />
        <PartnersSectionEN />
        <TeamPreviewSectionEN />
        <LeadMagnetSectionEN />
        <ContactSectionEN />
      </main>
      <FooterEN />
    </div>
  );
};

export default IndexEN;
