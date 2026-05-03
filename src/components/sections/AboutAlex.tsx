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
                  Wer hier <span className="text-primary">antwortet</span>.
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ich bin Alex Buchmann, Gründer der Altovate GmbH in Saarburg. Ich baue Marketing-Systeme für mittelständische Unternehmen in Saar-Mosel, Trier und Luxemburg.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Mein Ansatz ist klar: dokumentierte Prozesse, messbare Ergebnisse, Unabhängigkeit von einzelnen Dienstleistern.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    Altovate ist bewusst keine große Agentur. Ich arbeite mit einem Netzwerk aus Spezialisten und einem KI-gestützten Workflow-Stack — das gibt dir direkte Zusammenarbeit mit mir, ohne Umweg über Projektmanager oder Junior-Teams.
                  </p>
                  <p className="text-lg text-primary leading-relaxed font-medium">
                    Wenn du wissen willst, wie wir das auf dein Unternehmen anwenden — buch eine Diagnose.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Image */}
            <Reveal direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="relative flex justify-center">
                <img 
                  src={alexanderPortrait}
                  alt="Alexander Buchmann – Gründer der altovate GmbH, Marketing-Stratege für mittelständische Unternehmen in Saarburg" 
                  className="w-full max-w-md h-auto object-cover"
                  loading="lazy"
                  width={448}
                  height={560}
                  style={{
                    maskImage: 'radial-gradient(ellipse 80% 85% at 50% 45%, black 35%, transparent 65%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 85% at 50% 45%, black 35%, transparent 65%)',
                  }}
                />
                
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAlex;
