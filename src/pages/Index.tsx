import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCaseSection from "@/components/FeaturedCaseSection";
import ProblemSection from "@/components/ProblemSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import LeversSection from "@/components/LeversSection";
import CasesSection from "@/components/CasesSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Comunicazione Rituali Leadership"
        description="Aiutiamo le aziende a chiudere il gap tra la cultura dichiarata e quella vissuta ogni giorno. Consulenza in comunicazione, rituali e leadership organizzativa."
        canonical="https://venturo.it"
        lang="it"
        alternateUrls={{ it: "https://venturo.it", en: "https://venturo.it/en" }}
      />
      <Header />
      <main>
        <HeroSection />
        <FeaturedCaseSection />
        <ProblemSection />
        <HowWeWorkSection />
        <LeversSection />
        <ClientsSection />
        <CasesSection />
        <AboutSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
