import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import alexanderPortrait from '@/assets/alexander-portrait-circle.png';
import BookingModal from '@/components/BookingModal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqs = [
    {
      question: "Muss ich als Unternehmer selbst Content erstellen?",
      answer: "Nein. Altovate entwickelt Content-Strategien und übernimmt auf Wunsch die komplette Erstellung – von der Themenplanung über den Dreh bis zur Veröffentlichung. Voraussetzung ist lediglich, dass du deine Zielgruppe und dein Angebot kennst. Alternativ kann Altovate dir ein System aufbauen, mit dem du selbst effizient Content produzierst."
    },
    {
      question: "Arbeitet Altovate mit bezahlter Werbung (Ads)?",
      answer: "Ja, wenn bezahlte Werbung das effizienteste Mittel ist, um dein Ziel zu erreichen. Werbeanzeigen auf Meta (Facebook & Instagram) und Google werden eingesetzt, wenn sie schneller und günstiger Ergebnisse liefern als rein organische Maßnahmen. Die Entscheidung basiert auf Daten, nicht auf Bauchgefühl."
    },
    {
      question: "Gibt es langfristige Vertragsbindungen?",
      answer: "Nein. Altovate arbeitet projektbasiert mit klar definierten Leistungen und Ergebnissen. Es gibt keine Knebelverträge und keine versteckten Laufzeiten. Jede Zusammenarbeit beginnt mit einer Strategie-Session, die einzeln buchbar ist."
    },
    {
      question: "Für wen ist Altovate nicht geeignet?",
      answer: "Altovate ist nicht geeignet für Unternehmer, die schnelle Likes und Follower-Zahlen als Ziel definieren. Der Fokus liegt auf messbaren Geschäftsergebnissen wie qualifizierten Anfragen, Terminbuchungen und Umsatz. Wenn Reichweite ohne Vertriebsziel im Vordergrund steht, ist Altovate der falsche Ansprechpartner."
    }
  ];

  const handleBooking = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              FRAGEN UND
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              ANTWORTEN
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: FAQ Accordion */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="liquid-glass rounded-lg overflow-hidden mb-4 transition-shadow hover:border-primary/20"
                  >
                    <AccordionTrigger 
                      className="text-left text-base md:text-lg font-bold text-foreground hover:text-foreground
                                 transition-colors px-6 py-5 hover:no-underline group [&>svg]:hidden"
                    >
                      <div className="flex items-center justify-between w-full pr-4">
                        <span className="flex-1">{faq.question}</span>
                        <Plus className="w-6 h-6 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed px-6 pb-5 pt-0">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Column: Invitation & CTA */}
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Noch Fragen? Lass uns reden.
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  In einer Strategie-Session klären wir alle offenen Punkte – konkret und auf dein Unternehmen bezogen.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
                  onClick={handleBooking}
                >
                  STRATEGIE-SESSION BUCHEN
                </Button>

                {/* Profile Picture */}
                <div className="w-12 h-12 rounded-full border-2 border-border overflow-hidden">
                  <img 
                    src={alexanderPortrait}
                    alt="Alexander - Gründer" 
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerType="Strategie-Session"
      />
    </section>
  );
};

export default FAQ;
