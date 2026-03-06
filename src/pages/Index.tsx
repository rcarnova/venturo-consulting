import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyVenturoSection from "@/components/WhyVenturoSection";
import ReferencesSection from "@/components/ReferencesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import LeversSection from "@/components/LeversSection";
import CasesSection from "@/components/CasesSection";
import PartnersSection from "@/components/PartnersSection";
import TeamPreviewSection from "@/components/TeamPreviewSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Consulenza Employer Branding e Cultura Organizzativa"
        description="Consulenza di employer branding e cultura organizzativa. Aiutiamo le aziende a chiudere il gap tra cultura dichiarata e vissuta con comunicazione, rituali e leadership."
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
        <PartnersSection />
        <TeamPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
