import { ArrowRight, FileText, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';

const Foerderung = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/altovate/60min', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <NewNavigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fördermöglichkeiten für <span className="text-primary">Marketing & Beratung</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Je nach Ausgangslage sind Zuschüsse bis zu 50 % oder 80 % möglich.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* BAFA Beratung */}
              <div className="bg-background rounded-2xl border border-border p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Beratung (BAFA)</h2>
                <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-6">
                  bis zu 80 % Förderung
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Reine Beratung, keine Umsetzung
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Strategie-Sessions & 1:1 Zusammenarbeit geeignet
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Altovate unterstützt bei Ablauf & Unterlagen
                  </li>
                </ul>
              </div>

              {/* Marketing-Maßnahmen */}
              <div className="bg-background rounded-2xl border border-border p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Marketing-Maßnahmen</h2>
                <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-6">
                  bis zu 50 % Förderung
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Je nach Programm und Bundesland
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Projektabhängig
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Nur sinnvoll bei klarer Struktur
                  </li>
                </ul>
              </div>
            </div>

            {/* Notice */}
            <div className="bg-muted/50 rounded-2xl p-8 mb-12">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium mb-2">Wichtiger Hinweis</p>
                  <p className="text-muted-foreground">
                    Nicht jedes Unternehmen ist förderfähig.
                    Das klären wir vorab – ehrlich und ohne Verkaufsdruck.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
                onClick={handleBooking}
              >
                Strategie-Session buchen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                In der Session klären wir, ob und welche Förderung für dich infrage kommt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Foerderung;
