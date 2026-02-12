import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
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
import Marketingwissen from "./pages/Marketingwissen";
import BlogArticle from "./pages/BlogArticle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
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
            <Route path="/marketingwissen" element={<Marketingwissen />} />
            <Route path="/marketingwissen/:slug" element={<BlogArticle />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
