import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Services from '@/components/Services';
import Timeline from '@/components/Timeline';
import NotFor from '@/components/NotFor';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: '0%' }}></div>
      
      <Navigation />
      <Hero />
      <Problem />
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
