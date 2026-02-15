import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import SocialMedia from "./pages/SocialMedia";
import Werbeanzeigen from "./pages/Werbeanzeigen";
import EmployerBranding from "./pages/EmployerBranding";
import MarketingAutomation from "./pages/MarketingAutomation";
import SoftwareKI from "./pages/SoftwareKI";
import Erstkontakt from "./pages/Erstkontakt";
import Kontakt from "./pages/Kontakt";
import InstagramProfilCheck from "./pages/InstagramProfilCheck";
import Foerderung from "./pages/Foerderung";
import MarketingSystem from "./pages/MarketingSystem";
import ClusterPage from "./pages/ClusterPage";
import BlogArticle from "./pages/BlogArticle";
import Tools from "./pages/Tools";
import GlossaryOverview from "./pages/GlossaryOverview";
import GlossaryTerm from "./pages/GlossaryTerm";

const ChatBot = lazy(() => import("./components/ChatBot"));
const StickyMobileCTA = lazy(() => import("./components/StickyMobileCTA"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/werbeanzeigen-saarburg" element={<Werbeanzeigen />} />
          <Route path="/employer-branding-saarburg" element={<EmployerBranding />} />
          <Route path="/marketing-automation-saarburg" element={<MarketingAutomation />} />
          <Route path="/software-ki-loesungen-saarburg" element={<SoftwareKI />} />
          <Route path="/erstkontakt" element={<Erstkontakt />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/instagram-profil-check" element={<InstagramProfilCheck />} />
          <Route path="/foerderung" element={<Foerderung />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/marketing-wissen" element={<MarketingSystem />} />
          <Route path="/marketing-wissen/glossar" element={<GlossaryOverview />} />
          <Route path="/marketing-wissen/glossar/:slug" element={<GlossaryTerm />} />
          <Route path="/marketing-wissen/:clusterSlug" element={<ClusterPage />} />
          <Route path="/marketing-wissen/:clusterSlug/:slug" element={<BlogArticle />} />
          <Route path="/marketing-wissen/:clusterSlug/:slug" element={<BlogArticle />} />
          {/* Redirects from old URLs */}
          <Route path="/marketing-system" element={<Navigate to="/marketing-wissen" replace />} />
          <Route path="/marketing-system/:slug" element={<RedirectArticle from="marketing-system" />} />
          <Route path="/marketingwissen" element={<Navigate to="/marketing-wissen" replace />} />
          <Route path="/marketingwissen/:slug" element={<RedirectArticle from="marketingwissen" />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Suspense fallback={null}>
          <ChatBot />
          <StickyMobileCTA />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Helper component for slug redirect
const RedirectArticle = ({ from }: { from: string }) => {
  const slug = window.location.pathname.split('/').pop();
  return <Navigate to={`/marketing-wissen/${slug}`} replace />;
};

export default App;
