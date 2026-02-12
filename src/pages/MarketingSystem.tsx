import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SEOSchema from '@/components/SEOSchema';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import HeroSection from '@/components/marketing-system/HeroSection';
import StickyNav from '@/components/marketing-system/StickyNav';
import CoreTopics from '@/components/marketing-system/CoreTopics';
import FrameworkSection from '@/components/marketing-system/FrameworkSection';
import ArticleCluster from '@/components/marketing-system/ArticleCluster';
import InteractiveTools from '@/components/marketing-system/InteractiveTools';

const MarketingSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Marketing System für Unternehmen | altovate</title>
        <meta
          name="description"
          content="Fundiertes Marketingwissen für Unternehmen ohne internes Marketingteam. ROI-Modelle, Budgetrechner, GEO-Optimierung und ehrliche Analysen."
        />
        <link rel="canonical" href="https://altovate.de/marketing-system" />
        <meta property="og:title" content="Marketing System für Unternehmen | altovate" />
        <meta
          property="og:description"
          content="Fundiertes Marketingwissen für Unternehmen ohne internes Marketingteam. ROI-Modelle, Budgetrechner, GEO-Optimierung und ehrliche Analysen."
        />
        <meta property="og:url" content="https://altovate.de/marketing-system" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SEOSchema
        page="service"
        breadcrumbs={[
          { name: 'Startseite', url: 'https://altovate.de/' },
          { name: 'Marketing System', url: 'https://altovate.de/marketing-system' },
        ]}
      />

      <NewNavigation />
      <HeroSection />
      <StickyNav />
      <CoreTopics />
      <FrameworkSection />
      <ArticleCluster />
      <InteractiveTools />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default MarketingSystem;
