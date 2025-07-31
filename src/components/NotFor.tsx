import { X } from 'lucide-react';

const NotFor = () => {
  const notForItems = [
    {
      headline: "❌ Wenn du dein Budget lieber ins Amtsblatt steckst",
      subline: "…damit es direkt ungelesen im Papiermüll landet –neben der Traueranzeige von Oma Gerda."
    },
    {
      headline: "❌ Wenn du denkst, ein Azubi kriegt das schon irgendwie hin",
      subline: "Dann ist dein Ernst mit Sichtbarkeit genau so gering wie dein Output."
    },
    {
      headline: "❌ Wenn du lieber wartest, bis die Guten bei der Konkurrenz unterschrieben haben",
      subline: "Veränderung ist unbequem – aber Stillstand ist teuer."
    }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12">
            Für wen <span className="text-primary">NICHT</span>
          </h2>

          <div className="space-y-6">
            {notForItems.map((item, index) => (
              <div 
                key={index}
                className="p-6 bold-card text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <X className="w-6 h-6 text-primary flex-shrink-0" />
                  <h3 className="text-xl font-bold text-foreground">{item.headline}</h3>
                </div>
                <p className="text-muted-foreground ml-9">{item.subline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFor;