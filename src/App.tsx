import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import CasiStudio from "./pages/CasiStudio";
import Ricehouse from "./pages/cases/Ricehouse";
import Randstad from "./pages/cases/Randstad";
import Lely from "./pages/cases/Lely";
import ScrollToHash from "./components/ScrollToHash";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/casi-studio" element={<CasiStudio />} />
          <Route path="/casi-studio/ricehouse" element={<Ricehouse />} />
          <Route path="/casi-studio/randstad" element={<Randstad />} />
          <Route path="/casi-studio/lely" element={<Lely />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
