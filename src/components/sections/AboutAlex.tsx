import alexanderPortrait from '@/assets/alexander-portrait.png';

const AboutAlex = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
           <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Über <span className="text-primary">Alexander Buchmann</span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Alexander Buchmann ist Gründer und Geschäftsführer der altovate GmbH mit Sitz in Saarburg. Er entwickelt Marketing-Systeme für mittelständische Unternehmen in der Region Saar-Mosel, Trier und Luxemburg.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sein Schwerpunkt liegt an der Schnittstelle von Content-Strategie, Marketing-Automatisierung und Vertriebssystem-Aufbau. Der Ansatz ist klar: dokumentierte Prozesse, messbare Ergebnisse und Unabhängigkeit von einzelnen Dienstleistern.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  Altovate ist bewusst keine große Agentur. Unternehmer arbeiten direkt mit Alexander Buchmann – ohne Umwege über Projektmanager oder Junior-Teams.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={alexanderPortrait}
                    alt="Alexander - Gründer von Altovate" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAlex;
