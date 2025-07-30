import { Star, Zap, TrendingUp, Users, Heart, Bot } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      icon: Star,
      title: "Sichtbarkeitspaket",
      price: "9.900 €",
      description: "Website + Content + Ads + Funnel + Chatbot + Social Media",
      isPopular: true
    },
    {
      icon: Zap,
      title: "Website Refresh",
      price: "ab 3.000 €",
      description: "Moderne Website, die konvertiert"
    },
    {
      icon: TrendingUp,
      title: "Ad-Booster",
      price: "ab 2.500 €", 
      description: "Meta Ads, die performen"
    },
    {
      icon: Users,
      title: "Content Kickstart",
      price: "ab 1.800 €",
      description: "Content-Strategie & Umsetzung"
    },
    {
      icon: Bot,
      title: "Automatisierung & Chatbot",
      price: "ab 1.200 €",
      description: "Prozesse automatisieren"
    },
    {
      icon: Heart,
      title: "Mitarbeitervorteile Setup",
      price: "990 €",
      description: "Circle & BAV Workflow"
    }
  ];

  return (
    <section id="packages" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Unsere <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nicht billig. Aber günstiger als ein leerer Kalender.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.title}
              className={`bold-card p-8 transition-all duration-300 hover:scale-105 hover:shadow-elegant relative ${
                pkg.isPopular ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    BELIEBT
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                  <pkg.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {pkg.title}
                </h3>
                
                <div className="text-3xl font-black text-primary mb-4">
                  {pkg.price}
                </div>
                
                <p className="text-muted-foreground font-medium">
                  {pkg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;