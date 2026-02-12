import alexanderPortrait from '@/assets/alexander-portrait.png';
import Reveal from '@/components/animations/Reveal';

const AboutAlex = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <Reveal direction="left" className="order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Über <span className="text-primary">Alex Buchmann</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ich bin Gründer der altovate GmbH in Saarburg und entwickle Marketing-Systeme für mittelständische Unternehmen in der Region Saar-Mosel, Trier und Luxemburg.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Mein Schwerpunkt liegt an der Schnittstelle von Content-Strategie, Marketing-Automatisierung und Vertriebssystem-Aufbau. Der Ansatz ist klar: dokumentierte Prozesse, messbare Ergebnisse und Unabhängigkeit von einzelnen Dienstleistern.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    Altovate ist bewusst keine große Agentur. Ich arbeite mit einem Netzwerk aus Experten, die ich koordiniere – und mit KI-Tools, Agents und automatisierten Workflows, die mich arbeiten lassen wie 10 A-Player. Du bekommst also nicht weniger, sondern mehr: direkte Zusammenarbeit mit mir, ohne Umwege über Projektmanager oder Junior-Teams.
                  </p>
                  <p className="text-lg text-primary leading-relaxed font-medium">
                    Wenn du wissen willst, wie wir gemeinsam mehr Zeit aus deinem Alltag holen – lass uns sprechen.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Image */}
            <Reveal direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative">
                  <img 
                    src={alexanderPortrait}
                    alt="Alexander Buchmann – Gründer der altovate GmbH, Marketing-Stratege für mittelständische Unternehmen in Saarburg" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-[-20%] z-10 pointer-events-none" style={{
                    background: `radial-gradient(ellipse 80% 90% at center, transparent 30%, hsl(var(--background)) 65%)`
                  }}></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/8 rounded-full blur-3xl -z-10"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAlex;
