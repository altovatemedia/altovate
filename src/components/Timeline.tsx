import { Search, Wrench, Rocket } from 'lucide-react';

const Timeline = () => {
  const steps = [
    {
      icon: Search,
      title: "Analyse",
      description: "Wir schauen uns dein Business an und finden die Hebel für mehr Sichtbarkeit."
    },
    {
      icon: Wrench,
      title: "Umsetzung", 
      description: "Website, Content, Ads, Automatisierung – wir machen alles fertig."
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Du gehst live und wir optimieren kontinuierlich für beste Ergebnisse."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Der <span className="text-primary">Ablauf</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="text-center relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-primary/20 z-0"></div>
                )}
                
                {/* Step number */}
                <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center relative z-10">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
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

export default Timeline;