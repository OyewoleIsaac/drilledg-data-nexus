
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import OurVision from "./pages/OurVision";
import SolutionsOverview from "./pages/SolutionsOverview";
import DataAcquisition from "./pages/DataAcquisition";
import ProductionData from "./pages/ProductionData";
import ReservoirData from "./pages/ReservoirData";
import DrillingData from "./pages/DrillingData";
import AssetIntegrity from "./pages/AssetIntegrity";
import AIAnalytics from "./pages/AIAnalytics";
import Regulatory from "./pages/Regulatory";
import Advisory from "./pages/Advisory";
import TechnologyStack from "./pages/TechnologyStack";
import CaseStudiesOverview from "./pages/CaseStudiesOverview";
import CaseStudyProduction from "./pages/CaseStudyProduction";
import CaseStudyESG from "./pages/CaseStudyESG";
import OurTeam from "./pages/OurTeam";
import Insights from "./pages/Insights";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-vision" element={<OurVision />} />
            <Route path="/solutions" element={<SolutionsOverview />} />
            <Route path="/data-acquisition" element={<DataAcquisition />} />
            <Route path="/production-data" element={<ProductionData />} />
            <Route path="/reservoir-data" element={<ReservoirData />} />
            <Route path="/drilling-data" element={<DrillingData />} />
            <Route path="/asset-integrity" element={<AssetIntegrity />} />
            <Route path="/ai-analytics" element={<AIAnalytics />} />
            <Route path="/regulatory" element={<Regulatory />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/technology" element={<TechnologyStack />} />
            <Route path="/case-studies" element={<CaseStudiesOverview />} />
            <Route path="/case-study-production" element={<CaseStudyProduction />} />
            <Route path="/case-study-esg" element={<CaseStudyESG />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
