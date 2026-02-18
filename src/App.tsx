import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import IndexEN from "./pages/en/Index";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import CasiStudio from "./pages/CasiStudio";
import Ricehouse from "./pages/cases/Ricehouse";
import Randstad from "./pages/cases/Randstad";
import Lely from "./pages/cases/Lely";
import UfficioPio from "./pages/cases/UfficioPio";
import Lumen from "./pages/Lumen";
import LumenEN from "./pages/en/Lumen";
import CVE from "./pages/cases/CVE";
import UfficioPioEN from "./pages/en/cases/UfficioPio";
import CVEEN from "./pages/en/cases/CVE";
import Findomestic from "./pages/cases/Findomestic";
import FindomesticEN from "./pages/en/cases/Findomestic";
import Magazine from "./pages/Magazine";
import RuoliVaghi from "./pages/magazine/RuoliVaghi";
import CulturaImplicita from "./pages/magazine/CulturaImplicita";
import ScrollToHash from "./components/ScrollToHash";
import ChiSiamo from "./pages/ChiSiamo";
import AboutEN from "./pages/en/About";
// English case studies
import CaseStudies from "./pages/en/CaseStudies";
import RicehouseEN from "./pages/en/cases/Ricehouse";
import RandstadEN from "./pages/en/cases/Randstad";
import LelyEN from "./pages/en/cases/Lely";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/en" element={<IndexEN />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/en/about" element={<AboutEN />} />
            <Route path="/lumen" element={<Lumen />} />
            <Route path="/en/lumen" element={<LumenEN />} />
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
            <Route path="/en/case-studies/findomestic" element={<FindomesticEN />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/magazine/ruoli-vaghi-tutto-rallenta" element={<RuoliVaghi />} />
            <Route path="/magazine/cultura-implicita-cultura-inesistente" element={<CulturaImplicita />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
