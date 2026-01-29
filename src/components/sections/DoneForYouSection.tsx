import { Check, Crown } from 'lucide-react';

const DoneForYouSection = () => {
  const services = [
    "Strategische Gesamtarchitektur (Lead, Sales, Delivery)",
    "Angebots- & Funnel-Logik",
    "Content- & Kampagnenkonzeption",
    "Koordination von Design, Video, Copy & Ads",
    "Technischer Aufbau (Tracking, Automationen, Tools)",
    "Ausspielung & laufende Optimierung",
    "Analyse, Reporting & Entscheidungsgrundlagen"
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Crown className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Done for You
            </h2>
            <p className="text-xl text-primary font-medium mb-6">
              Marketing als vollständiges System
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Die komplette Verantwortung liegt bei uns.
            </p>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Dieses Modell richtet sich an Unternehmen, die Marketing nicht intern steuern
              oder auf mehrere Schultern verteilen wollen.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Wir übernehmen den gesamten Prozess:
              von der strategischen Idee über die Umsetzung bis zur laufenden Auswertung.
            </p>
          </div>

          {/* Services Grid */}
          <div className="bg-background rounded-2xl border border-border p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="text-center">
            <div className="inline-block bg-primary/10 rounded-full px-6 py-3 mb-6">
              <span className="text-foreground font-medium">Aktuell ausgebucht</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Dieses Modell ist bewusst limitiert.
            </p>
            <p className="text-muted-foreground text-sm">
              Neue Projekte ausschließlich nach bestehender Zusammenarbeit
              oder auf persönliche Empfehlung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoneForYouSection;
