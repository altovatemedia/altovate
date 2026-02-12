import { Crosshair, FileText, Link2, Handshake } from 'lucide-react';

const SystemProcess = () => {
  const steps = [
    {
      icon: Crosshair,
      number: "1",
      title: "Klarer Fokus",
      description: "Zielgruppe, Angebot, Botschaft"
    },
    {
      icon: FileText,
      number: "2",
      title: "Content mit Funktion",
      description: "Nicht für Likes – sondern für Entscheidungen"
    },
    {
      icon: Link2,
      number: "3",
      title: "Lead-System",
      description: "DM, Landingpage oder Terminbuchung"
    },
    {
      icon: Handshake,
      number: "4",
      title: "Übergabe an Abschluss",
      description: "Kein Chaos, kein Nachfassen ins Leere"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
           <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              So entsteht <span className="text-primary">planbarer Vertrieb</span><br />
              über Content
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              So funktioniert Content-basierter Vertrieb: Zuerst wird die Zielgruppe definiert, dann entsteht Content mit klarer Funktion. Über ein Lead-System werden Interessenten erfasst und an den Vertrieb übergeben. Jeder Schritt ist messbar und dokumentiert.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative text-center group"
              >
                {/* Step Number with Icon */}
                <div className="relative z-10 mx-auto w-24 h-24 rounded-2xl liquid-glass-icon group-hover:border-primary/50 transition-colors flex items-center justify-center mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-primary-foreground rounded-full text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemProcess;
