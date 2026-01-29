import { ArrowRight, Layers, Target, CheckCircle } from 'lucide-react';

const Positioning = () => {
  const focusPoints = [
    { text: "Struktur vor Content", icon: Layers },
    { text: "System vor Aktionismus", icon: Target },
    { text: "Abschluss vor Reichweite", icon: CheckCircle },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Statement */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Marketing, das als <span className="text-primary">System</span> funktioniert.
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16 max-w-3xl mx-auto">
            Altovate arbeitet mit Unternehmern, die planbare Anfragen,
            klare Prozesse und messbare Ergebnisse wollen – ohne Influencer-Zirkus.
          </p>

          {/* Focus Points */}
          <div className="grid md:grid-cols-3 gap-8">
            {focusPoints.map((point, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
