import { X, UserX, TrendingDown } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: UserX,
      title: "Keine Bewerber",
      description: "Deine Stellenanzeige sieht aus wie vom Amt"
    },
    {
      icon: TrendingDown,
      title: "Kaum Kundenanfragen", 
      description: "Auf Google findet man dich nicht mal beim Scrollen"
    },
    {
      icon: X,
      title: "Keine Zeit",
      description: "Du hast keine Zeit, dich auch noch darum zu kümmern"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground">
            Das tut <span className="text-primary">weh</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Gutes Team. Gute Produkte. Guter Ruf. Nur keiner weiß es.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Deine Website sieht aus wie 2008, deine Stellenanzeige wie vom Amt – 
              und auf Google findet man dein Unternehmen nicht mal beim Scrollen.
            </p>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="text-center p-8 bold-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground flex items-center justify-center">
                <X className="w-5 h-5 text-primary mr-2" />
                {problem.title}
              </h3>
              <p className="text-muted-foreground font-medium">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-black text-primary mb-6">
            Ergebnis?
          </p>
          <p className="text-xl md:text-2xl text-foreground font-bold mb-4">
            Du verlierst täglich Umsatz, Bewerber und Chancen – ohne es zu merken.
          </p>
          <p className="text-lg md:text-xl text-primary font-semibold">
            Zeit, das zu ändern.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;