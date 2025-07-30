import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-2xl opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-4 border-primary/30 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/40 rotate-45 animate-bounce" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
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
            <Button className="btn-hero group text-xl">
              Jetzt sichtbar werden
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;