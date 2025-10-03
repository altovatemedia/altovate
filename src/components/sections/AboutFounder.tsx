import { Quote } from 'lucide-react';

const AboutFounder = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Grid Layout: Text + Image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-sm text-primary mb-4">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Über Altovate
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Warum <span className="text-primary">Altovate</span>?
              </h2>
              
              <div className="relative pl-6 border-l-4 border-primary/20">
                <Quote className="absolute -left-3 top-0 w-6 h-6 text-primary" />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light italic">
                  „Ich habe Altovate gegründet, weil ich gesehen habe, wie viele großartige Unternehmen 
                  im digitalen Rauschen untergehen. Nicht weil sie nicht gut sind – sondern weil sie nicht 
                  sichtbar sind. Das wollte ich ändern."
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-base text-foreground leading-relaxed">
                  Als Gründer von Altovate bringe ich über 8 Jahre Erfahrung in digitalem Marketing, 
                  Webdesign und Unternehmensberatung mit. Mein Fokus: echte Ergebnisse statt schöner Versprechen.
                </p>
                
                <p className="text-base text-foreground leading-relaxed">
                  Wir arbeiten nicht mit Standard-Paketen. Jedes Projekt wird individuell auf dein 
                  Unternehmen, deine Ziele und deine Zielgruppe zugeschnitten. Dabei setzen wir auf 
                  modernste Technologien, kreative Konzepte und messbare Performance.
                </p>

                <p className="text-base text-foreground leading-relaxed">
                  Das Ziel ist klar: Du sollst nicht nur gesehen werden – sondern die erste Wahl sein.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-6">
                <div className="text-2xl font-signature text-primary mb-2">
                  Alexander
                </div>
                <p className="text-sm text-muted-foreground">
                  Gründer & Geschäftsführer, Altovate
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main image with subtle border */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/7a54adf2-89a7-418f-97d9-092a8af2d01a.png"
                    alt="Alexander - Gründer von Altovate" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8+</div>
              <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Erfolgreiche Projekte</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Kundenzufriedenheit</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200%</div>
              <p className="text-sm text-muted-foreground">Ø ROI-Steigerung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
