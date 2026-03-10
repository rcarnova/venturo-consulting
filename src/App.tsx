import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToHash from "./components/ScrollToHash";

// Only the homepage is loaded eagerly
import Index from "./pages/Index";

// All other pages are lazy-loaded
const IndexEN = lazy(() => import("./pages/en/Index"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CasiStudio = lazy(() => import("./pages/CasiStudio"));
const Ricehouse = lazy(() => import("./pages/cases/Ricehouse"));
const Randstad = lazy(() => import("./pages/cases/Randstad"));
const Lely = lazy(() => import("./pages/cases/Lely"));
const UfficioPio = lazy(() => import("./pages/cases/UfficioPio"));
const Lumen = lazy(() => import("./pages/Lumen"));
const LumenEN = lazy(() => import("./pages/en/Lumen"));
const Principi = lazy(() => import("./pages/Principi"));
const PrinciplesEN = lazy(() => import("./pages/en/Principles"));
const CVE = lazy(() => import("./pages/cases/CVE"));
const UfficioPioEN = lazy(() => import("./pages/en/cases/UfficioPio"));
const CVEEN = lazy(() => import("./pages/en/cases/CVE"));
const Findomestic = lazy(() => import("./pages/cases/Findomestic"));
const FindomesticEN = lazy(() => import("./pages/en/cases/Findomestic"));
const Magazine = lazy(() => import("./pages/Magazine"));
const ResponsabilitaNonSiDelega = lazy(() => import("./pages/magazine/ResponsabilitaNonSiDelega"));
const ValoriNonSonoPoster = lazy(() => import("./pages/magazine/ValoriNonSonoPoster"));
const LaCulturaNonEMaiSbagliata = lazy(() => import("./pages/magazine/LaCulturaNonEMaiSbagliata"));
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const AboutEN = lazy(() => import("./pages/en/About"));
const LeSfide = lazy(() => import("./pages/LeSfide"));
const ChallengesEN = lazy(() => import("./pages/en/Challenges"));
const CaseStudies = lazy(() => import("./pages/en/CaseStudies"));
const RicehouseEN = lazy(() => import("./pages/en/cases/Ricehouse"));
const RandstadEN = lazy(() => import("./pages/en/cases/Randstad"));
const LelyEN = lazy(() => import("./pages/en/cases/Lely"));
const RandstadProfessionals = lazy(() => import("./pages/cases/RandstadProfessionals"));
const RandstadProfessionalsEN = lazy(() => import("./pages/en/cases/RandstadProfessionals"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHash />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/en" element={<IndexEN />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/le-sfide" element={<LeSfide />} />
              <Route path="/en/about" element={<AboutEN />} />
              <Route path="/en/challenges" element={<ChallengesEN />} />
              <Route path="/lumen" element={<Lumen />} />
              <Route path="/en/lumen" element={<LumenEN />} />
              <Route path="/principi" element={<Principi />} />
              <Route path="/en/principles" element={<PrinciplesEN />} />
              <Route path="/en/case-studies" element={<CaseStudies />} />
              <Route path="/en/case-studies/ricehouse" element={<RicehouseEN />} />
              <Route path="/en/case-studies/randstad" element={<RandstadEN />} />
              <Route path="/en/case-studies/lely" element={<LelyEN />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/casi-studio" element={<CasiStudio />} />
              <Route path="/casi-studio/ricehouse" element={<Ricehouse />} />
              <Route path="/casi-studio/randstad" element={<Randstad />} />
              <Route path="/casi-studio/lely" element={<Lely />} />
              <Route path="/casi-studio/ufficio-pio" element={<UfficioPio />} />
              <Route path="/casi-studio/cve" element={<CVE />} />
              <Route path="/en/case-studies/ufficio-pio" element={<UfficioPioEN />} />
              <Route path="/en/case-studies/cve" element={<CVEEN />} />
              <Route path="/casi-studio/findomestic" element={<Findomestic />} />
              <Route path="/casi-studio/randstad-professionals" element={<RandstadProfessionals />} />
              <Route path="/en/case-studies/findomestic" element={<FindomesticEN />} />
              <Route path="/en/case-studies/randstad-professionals" element={<RandstadProfessionalsEN />} />
              <Route path="/magazine" element={<Magazine />} />
              <Route path="/magazine/la-responsabilita-non-si-delega" element={<ResponsabilitaNonSiDelega />} />
              <Route path="/magazine/i-valori-non-sono-poster" element={<ValoriNonSonoPoster />} />
              <Route path="/magazine/la-cultura-non-e-mai-sbagliata" element={<LaCulturaNonEMaiSbagliata />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
