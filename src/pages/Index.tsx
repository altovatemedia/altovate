import FreebieBar from '@/components/sections/FreebieBar';
import NewNavigation from '@/components/sections/NewNavigation';
import NewHero from '@/components/sections/NewHero';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/Solution';
import Services from '@/components/Services';
import Timeline from '@/components/Timeline';
import NotFor from '@/components/NotFor';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: '0%' }}></div>
      
      <FreebieBar />
      <NewNavigation />
      <NewHero />
      <PainPoints />
      <Solution />
      <Services />
      <Timeline />
      <NotFor />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
