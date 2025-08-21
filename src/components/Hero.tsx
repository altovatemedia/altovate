import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate star position based on scroll (0-100%)
  const starPosition = Math.min(100, (scrollY / window.innerHeight) * 100);
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 opacity-80">
        {/* Large floating particles with movement */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full opacity-60 animate-float-slow" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-primary/60 rounded-full opacity-80 animate-float-drift" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-primary/80 rounded-full opacity-70 animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-primary/30 rounded-full opacity-90 animate-float-drift" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-60 left-1/2 w-2 h-2 bg-primary/50 rounded-full opacity-60 animate-float-slow" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-primary/70 rounded-full opacity-100 animate-float-drift" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary/40 rounded-full opacity-70 animate-float-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-40 left-1/2 w-1 h-1 bg-primary rounded-full opacity-80 animate-float-drift" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Additional particles for more density with movement */}
        <div className="absolute top-80 right-40 w-2 h-2 bg-primary/70 rounded-full opacity-50 animate-float-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-16 left-1/3 w-1 h-1 bg-primary/60 rounded-full opacity-90 animate-float-drift" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-80 right-16 w-1.5 h-1.5 bg-primary/80 rounded-full opacity-60 animate-float-slow" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-36 right-60 w-1 h-1 bg-primary rounded-full opacity-70 animate-float-drift" style={{ animationDelay: '3.2s' }}></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-primary/50 rounded-full opacity-80 animate-float-slow" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-72 left-16 w-1 h-1 bg-primary/90 rounded-full opacity-60 animate-float-drift" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-48 right-80 w-2 h-2 bg-primary/40 rounded-full opacity-90 animate-float-slow" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute top-28 left-80 w-1.5 h-1.5 bg-primary/75 rounded-full opacity-50 animate-float-drift" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Dynamic magenta glow areas */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-primary/40 to-transparent rounded-full blur-3xl animate-glow-breathe" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-primary/35 to-transparent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-primary/25 to-transparent rounded-full blur-3xl animate-glow-breathe" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-52 h-52 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-glow-breathe" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Glowing Line with Moving Star */}
          <div className="relative w-80 h-1 mx-auto mb-8 animate-fade-in-up overflow-hidden">
            {/* Base line with strong taper to sides */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm"></div>
            
            {/* Moving glowing star with enhanced flow effect */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full transition-all duration-300 ease-out"
              style={{
                left: `${50 + (starPosition * 0.4)}%`, // Start at 50% (center), move right with scroll
                transform: `translateX(-50%) translateY(-50%)`,
                boxShadow: `
                  0 0 15px hsl(var(--primary)),
                  0 0 30px hsl(var(--primary) / 0.6),
                  0 0 45px hsl(var(--primary) / 0.3),
                  0 0 60px hsl(var(--primary) / 0.1)
                `,
                background: `radial-gradient(circle, hsl(var(--primary)), hsl(var(--primary) / 0.8))`
              }}
            >
              {/* Inner bright core */}
              <div className="absolute inset-0 bg-white rounded-full scale-50 opacity-80"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 animate-fade-in-up">
            Niemand bewirbt sich? 
            <span className="text-primary block">Kein Wunder.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Deine Website ist outdated. Deine Anzeige klingt nach Amtsblatt.<br />
            <span className="text-foreground font-bold">Auf Social Media herrscht Totenstille? Dann wird auch keiner anklopfen.</span>
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="btn-hero group text-xl"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Jetzt sichtbar werden
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Customer Logos */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground/60 mb-8 font-medium">
              Marken, die auf uns setzen
            </p>
            
            <div className="overflow-hidden">
              <div className="flex items-center justify-center space-x-12 animate-[slide-in-right_20s_linear_infinite]">
                {/* Customer logos with reduced transparency for better recognition */}
                <img src="/lovable-uploads/20b3354d-89ca-417b-a3ff-c092e830ff91.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                <img src="/lovable-uploads/7a54adf2-89a7-418f-97d9-092a8af2d01a.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                <img src="/lovable-uploads/10e41798-04a2-4f15-9807-b65a1508c684.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                <img src="/lovable-uploads/e1cd4aee-4421-4876-a62d-93058e50eac7.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                <img src="/lovable-uploads/4b1973ca-1098-49ac-a715-ba35c759aeff.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                <img src="/lovable-uploads/35e2f5d7-67ec-4cea-8a37-7c2b2b24caaf.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                <img src="/lovable-uploads/6955d880-2be3-4c02-9a31-2158bd04c916.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                <img src="/lovable-uploads/2b229eaa-8f25-4e88-99f0-8ae6f9dadbd1.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                <img src="/lovable-uploads/872d9752-d5dc-43be-8703-9c7466665d3f.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                <img src="/lovable-uploads/87959f29-60ce-4484-aa87-209980902007.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                {/* Duplicate for seamless loop */}
                <img src="/lovable-uploads/20b3354d-89ca-417b-a3ff-c092e830ff91.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
                <img src="/lovable-uploads/7a54adf2-89a7-418f-97d9-092a8af2d01a.png" alt="Customer Logo" className="h-8 opacity-60 filter brightness-0 invert" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;