import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyVenturoSection from "@/components/WhyVenturoSection";
import ReferencesSection from "@/components/ReferencesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import LeversSection from "@/components/LeversSection";
import CasesSection from "@/components/CasesSection";
import ResultCallout from "@/components/ResultCallout";
import PartnersSection from "@/components/PartnersSection";
import TeamPreviewSection from "@/components/TeamPreviewSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Venturo — Consulenza Cultura Organizzativa ed Employer Branding"
        description="Rendiamo visibile la cultura della tua organizzazione. Venturo lavora su employer branding, comunicazione interna e trasformazione culturale per aziende che vogliono attrarre e trattenere i talenti giusti."
        canonical="https://venturo.it"
        lang="it"
        alternateUrls={{ it: "https://venturo.it", en: "https://venturo.it/en" }}
      />
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <WhyVenturoSection />
        <HowWeWorkSection />
        <ReferencesSection />
        <LeversSection />
        <CasesSection />
        <ResultCallout />
        <PartnersSection />
        <TeamPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
