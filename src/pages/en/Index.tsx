import { SEO } from "@/components/SEO";
import HeaderEN from "@/components/en/HeaderEN";
import HeroSectionEN from "@/components/en/HeroSectionEN";
import ProblemSectionEN from "@/components/en/ProblemSectionEN";
import HowWeWorkSectionEN from "@/components/en/HowWeWorkSectionEN";
import LeversSectionEN from "@/components/en/LeversSectionEN";
import CasesSectionEN from "@/components/en/CasesSectionEN";
import AboutSectionEN from "@/components/en/AboutSectionEN";
import PartnersSectionEN from "@/components/en/PartnersSectionEN";
import ClientsSectionEN from "@/components/en/ClientsSectionEN";
import ContactSectionEN from "@/components/en/ContactSectionEN";
import FooterEN from "@/components/en/FooterEN";
import ReferencesSectionEN from "@/components/en/ReferencesSectionEN";

const IndexEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Communication Rituals Leadership"
        description="We help companies close the gap between declared culture and the one lived every day. Consulting in communication, rituals and organizational leadership."
        canonical="https://venturo.it/en"
        lang="en"
        alternateUrls={{ it: "https://venturo.it", en: "https://venturo.it/en" }}
      />
      <HeaderEN />
      <main>
        <HeroSectionEN />
        <ReferencesSectionEN />
        <ProblemSectionEN />
        <HowWeWorkSectionEN />
        <LeversSectionEN />
        <ClientsSectionEN />
        <CasesSectionEN />
        <AboutSectionEN />
        <PartnersSectionEN />
        <ContactSectionEN />
      </main>
      <FooterEN />
    </div>
  );
};

export default IndexEN;
