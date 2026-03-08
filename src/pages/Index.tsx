import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Venturo",
  "url": "https://venturoconsulting.it",
  "logo": "https://venturoconsulting.it/logo.png",
  "email": "info@venturoconsulting.it",
  "description": "Consulenza specializzata in cultura organizzativa ed employer branding. Rendiamo visibile il perché delle organizzazioni.",
  "areaServed": "IT",
  "knowsLanguage": ["it", "en"],
  "sameAs": ["https://linkedin.com/company/venturo-consulting"],
  "founder": [
    { "@type": "Person", "name": "Rosario Carnovale" },
    { "@type": "Person", "name": "Massimo Benedetti" },
    { "@type": "Person", "name": "Arianna Barisan" }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Venturo — Cultura Organizzativa ed Employer Branding"
        description="Rendiamo visibile la cultura della tua organizzazione. Lavoriamo su employer branding, comunicazione interna e trasformazione culturale per attrarre i talenti giusti."
        canonical="https://venturo.it"
        lang="it"
        alternateUrls={{ it: "https://venturo.it", en: "https://venturo.it/en" }}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <div className="flex justify-center px-6 pt-12 pb-12">
          <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.6, maxWidth: '720px', textAlign: 'left', borderLeft: '3px solid #000000', paddingLeft: '20px' }}>
            Venturo è una società di consulenza specializzata in cultura organizzativa ed employer branding. Lavoriamo con aziende italiane che vogliono rendere visibile la propria identità culturale, per attrarre i talenti giusti, allineare comunicazione interna ed esterna, e costruire organizzazioni coerenti con i propri valori.
          </p>
        </div>
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
