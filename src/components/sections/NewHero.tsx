import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden pt-20">
      {/* Subtle background shapes */}
      <div className="absolute inset-0">
        {/* Floating subtle shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-glow-breathe"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary/8 rounded-full blur-lg animate-float-slow"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 text-gray-900">
            Mehr Kunden. 
            <span className="block text-primary mt-4">Mehr Bewerbungen.</span>
            <span className="block text-gray-900">
              Mehr Umsatz
            </span>
            <span className="text-4xl md:text-6xl text-gray-600 font-medium">– in 30 Tagen.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-600 font-medium mb-16 leading-relaxed max-w-5xl mx-auto">
            <span className="text-primary font-semibold">Der Markenmagnet:</span> Dein komplettes Marketing-System für 5.000 € –<br />
            Website, Content, Ads & Automatisierung.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
            <Button 
              className="btn-hero text-xl px-16 py-6"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Jetzt Erstgespräch sichern
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <Button 
              className="btn-secondary text-xl px-16 py-6"
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
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-card">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Website mockup */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-3"></div>
                  <div className="text-gray-700 font-medium">Premium Website</div>
                </div>
                
                {/* Content mockup */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-3"></div>
                  <div className="text-gray-700 font-medium">Content Engine</div>
                </div>
                
                {/* Automation mockup */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-3"></div>
                  <div className="text-gray-700 font-medium">Smart Automation</div>
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