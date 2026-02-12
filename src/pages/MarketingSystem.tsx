import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SEOSchema from '@/components/SEOSchema';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import HeroSection from '@/components/marketing-system/HeroSection';
import CoreTopics from '@/components/marketing-system/CoreTopics';
import CTASection from '@/components/marketing-system/CTASection';

const MarketingSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Strategisches Marketingwissen | altovate</title>
        <meta
          name="description"
          content="Klare Modelle, echte Zahlen und strukturierte Analysen zu ROI, Social Media, Funnel, Recruiting und KI-Sichtbarkeit. Für Unternehmen, die Marketing wirtschaftlich denken."
        />
        <link rel="canonical" href="https://altovate.de/marketing-wissen" />
        <meta property="og:title" content="Strategisches Marketingwissen für Unternehmen | altovate" />
        <meta
          property="og:description"
          content="Klare Modelle, echte Zahlen und strukturierte Analysen zu ROI, Social Media, Funnel, Recruiting und KI-Sichtbarkeit."
        />
        <meta property="og:url" content="https://altovate.de/marketing-wissen" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SEOSchema
        page="service"
        breadcrumbs={[
          { name: 'Startseite', url: 'https://altovate.de/' },
          { name: 'Strategisches Marketingwissen', url: 'https://altovate.de/marketing-wissen' },
        ]}
      />

      <NewNavigation />
      <HeroSection />
      <CoreTopics />
      <CTASection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default MarketingSystem;
