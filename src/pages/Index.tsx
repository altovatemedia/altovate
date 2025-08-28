import FreebieBar from '@/components/sections/FreebieBar';
import NewNavigation from '@/components/sections/NewNavigation';
import NewHero from '@/components/sections/NewHero';
import PainPoints from '@/components/sections/PainPoints';
import SignatureOffer from '@/components/sections/SignatureOffer';
import PricingToggle from '@/components/sections/PricingToggle';
import Solution from '@/components/Solution';
import Services from '@/components/Services';
import Timeline from '@/components/Timeline';
import NotFor from '@/components/NotFor';
import FAQ from '@/components/FAQ';
import ContactFunnel from '@/components/sections/ContactFunnel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: '0%' }}></div>
      
      <FreebieBar />
      <NewNavigation />
      <NewHero />
      <PainPoints />
      <SignatureOffer />
      <PricingToggle />
      <Solution />
      <Services />
      <Timeline />
      <NotFor />
      <FAQ />
      <ContactFunnel />
      <Footer />
    </div>
  );
};

export default Index;
