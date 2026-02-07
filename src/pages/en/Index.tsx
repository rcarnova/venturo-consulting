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
import EnglishMeta from "@/components/en/EnglishMeta";

const IndexEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <EnglishMeta />
      <HeaderEN />
      <main>
        <HeroSectionEN />
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
