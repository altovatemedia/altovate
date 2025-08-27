import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        {/* Floating magenta orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-radial from-magenta/30 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-radial from-magenta-light/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-radial from-magenta/40 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-60 right-1/4 w-16 h-16 border border-magenta/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-60 right-10 w-12 h-12 bg-magenta/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255, 28, 92, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 28, 92, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8 text-white">
            Mehr Kunden. 
            <span className="block text-magenta animate-pulse">Mehr Bewerbungen.</span>
            <span className="block bg-gradient-to-r from-white via-magenta-light to-white bg-clip-text text-transparent">
              Mehr Umsatz
            </span>
            <span className="text-4xl md:text-6xl text-white/80 font-semibold">– in 30 Tagen.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-white/90 font-medium mb-16 leading-relaxed">
            <span className="text-magenta font-bold">Der Markenmagnet:</span> Dein komplettes Marketing-System für 5.000 € –<br />
            Website, Content, Ads & Automatisierung.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
            <Button 
              className="btn-hero group text-xl px-16 py-6"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Jetzt Erstgespräch sichern
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              className="btn-secondary group text-xl px-16 py-6"
              onClick={() => {
                // TODO: Open Marken-Check modal
                console.log('Open Marken-Check');
              }}
            >
              <Play className="mr-3 w-6 h-6" />
              Kostenlosen Marken-Check starten
            </Button>
          </div>

          {/* Dynamic mockups preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-magenta/20 to-transparent blur-3xl"></div>
            <div className="relative bg-card/20 backdrop-blur-sm border border-magenta/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Website mockup */}
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20 hover:border-magenta/50 transition-all duration-300 hover:scale-105">
                  <div className="w-full h-32 bg-gradient-to-br from-magenta/30 to-magenta-dark/30 rounded mb-3"></div>
                  <div className="text-white/80 text-sm font-medium">Premium Website</div>
                </div>
                
                {/* Content mockup */}
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20 hover:border-magenta/50 transition-all duration-300 hover:scale-105">
                  <div className="w-full h-32 bg-gradient-to-br from-magenta-light/30 to-magenta/30 rounded mb-3"></div>
                  <div className="text-white/80 text-sm font-medium">Content Engine</div>
                </div>
                
                {/* Automation mockup */}
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20 hover:border-magenta/50 transition-all duration-300 hover:scale-105">
                  <div className="w-full h-32 bg-gradient-to-br from-white/20 to-magenta/30 rounded mb-3"></div>
                  <div className="text-white/80 text-sm font-medium">Smart Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;