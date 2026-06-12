import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";
import { ScrollReveal } from "@/components/ScrollReveal";

import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SocAiTool from "./pages/SocAiTool";
import TrialSignup from "./pages/TrialSignup";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import CareersPage from "./pages/CareersPage";
import OpenRolesPage from "./pages/OpenRolesPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* 👇 MUST be inside BrowserRouter */}
      <BrowserRouter>
        {/* 👇 ADD THIS LINE */}
        <ScrollToTop />
        <ScrollReveal />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/open-roles" element={<OpenRolesPage />} />
          <Route path="/soc-ai-tool" element={<SocAiTool />} />
          <Route path="/trial-signup" element={<TrialSignup />} />
          <Route path="/success" element={<Success />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
