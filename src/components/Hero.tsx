import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Bold geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary rounded-2xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-4 border-primary rounded-full opacity-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/30 rotate-45" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 animate-fade-in-up">
            Du fragst dich, warum sich 
            <span className="text-primary block">niemand bei dir bewirbt?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Vielleicht liegt's nicht an deinem Angebot –<br />
            <span className="text-foreground font-bold">sondern an deinem Online-Auftritt.</span>
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