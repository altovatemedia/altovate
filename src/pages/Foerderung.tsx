import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, FileText, TrendingUp, AlertCircle, CheckCircle, MessageSquare, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import SEOSchema from '@/components/SEOSchema';

const Foerderung = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const strategieberatungPunkte = [
    "Bis zu 80 % Förderung möglich",
    "Gilt für reine Beratung, keine Umsetzung",
    "Strategie-Sessions förderfähig",
    "1:1 Zusammenarbeit förderfähig",
    "Auch für Gründer & junge Unternehmen",
    "Altovate übernimmt Dokumentation",
    "Schnelle Antragsprüfung möglich",
    "Keine Vorleistung nötig"
  ];

  const marketingPunkte = [
    "Bis zu 50 % Förderung möglich",
    "Je nach Bundesland unterschiedlich",
    "Für Website, Content, Ads, Automationen",
    "Projektbasierte Abrechnung",
    "Kombinierbar mit anderen Programmen",
    "Voraussetzung: klare Projektstruktur",
    "Altovate prüft Optionen vorab",
    "Transparente Kostendarstellung"
  ];

  const prozessSchritte = [
    {
      icon: MessageSquare,
      title: "Gespräch",
      description: "In der Strategie-Session klären wir, ob und welche Förderung für dich infrage kommt."
    },
    {
      icon: ClipboardCheck,
      title: "Prüfung & Antrag",
      description: "Altovate übernimmt die Dokumentation und begleitet dich durch den Antragsprozess."
    },
    {
      icon: CheckCircle,
      title: "Umsetzung",
      description: "Nach Bewilligung starten wir mit der geförderten Beratung oder Maßnahme."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Förderung für Marketing & Beratung | Bis zu 80 % Zuschuss – altovate</title>
        <meta name="description" content="Staatliche Förderung für Marketing-Beratung: Bis zu 80 % Zuschuss für Strategie-Sessions und 1:1 Zusammenarbeit. Altovate begleitet den Antragsprozess." />
        <link rel="canonical" href="https://altovate.de/foerderung" />
        <meta property="og:title" content="Förderung für Marketing & Beratung | altovate" />
        <meta property="og:description" content="Bis zu 80 % staatliche Förderung für Marketing-Beratung. Altovate begleitet den Antragsprozess." />
        <meta property="og:url" content="https://altovate.de/foerderung" />
      </Helmet>
      <SEOSchema
        page="service"
        breadcrumbs={[
          { name: "Startseite", url: "https://altovate.de/" },
          { name: "Förderung", url: "https://altovate.de/foerderung" }
        ]}
      />
      <NewNavigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fördermöglichkeiten für <span className="text-primary">Marketing & Beratung</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Je nach Ausgangslage sind Zuschüsse bis zu 50 % oder 80 % möglich.
            </p>
            <p className="text-lg text-muted-foreground">
              Viele Unternehmer wissen nicht, dass strategische Beratung und Marketing-Maßnahmen 
              staatlich gefördert werden können. Altovate hilft dir, die passenden Programme zu finden 
              und den Antragsprozess unkompliziert zu durchlaufen.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Strategieberatung */}
              <div className="bg-background rounded-2xl border border-border p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Strategieberatung</h2>
                <p className="text-sm text-muted-foreground mb-4">Förderprogramm: BAFA</p>
                <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-6">
                  bis zu 80 % Förderung
                </div>
                <ul className="space-y-3">
                  {strategieberatungPunkte.map((punkt, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {punkt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Marketing-Maßnahmen */}
              <div className="bg-background rounded-2xl border border-border p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Marketing-Maßnahmen</h2>
                <p className="text-sm text-muted-foreground mb-4">Länderspezifische Programme</p>
                <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-6">
                  bis zu 50 % Förderung
                </div>
                <ul className="space-y-3">
                  {marketingPunkte.map((punkt, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {punkt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Prozess */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">So läuft es ab</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {prozessSchritte.map((schritt, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <schritt.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-primary mb-2">Schritt {index + 1}</div>
                    <h3 className="text-xl font-bold mb-2">{schritt.title}</h3>
                    <p className="text-muted-foreground">{schritt.description}</p>
                  </div>
                ))}
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
                    Die Förderfähigkeit hängt von verschiedenen Faktoren ab, wie Unternehmensgröße, 
                    Standort und Art der geplanten Maßnahme.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
                onClick={() => setIsBookingOpen(true)}
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
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        offerType="Förderung prüfen"
      />
    </div>
  );
};

export default Foerderung;
