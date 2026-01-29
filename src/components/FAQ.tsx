import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import alexanderPortrait from '@/assets/alexander-portrait-circle.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Muss ich selbst Content machen?",
      answer: "Nein. Aber du musst verstanden werden. Ich helfe dir, Inhalte zu entwickeln, die deine Zielgruppe erreichen – unabhängig davon, ob du sie selbst erstellst oder wir das gemeinsam lösen."
    },
    {
      question: "Arbeitest du mit Ads?",
      answer: "Ja, wenn sie Sinn machen. Werbeanzeigen sind ein Werkzeug, kein Selbstzweck. Wir setzen sie ein, wenn sie dein Ziel schneller erreichen als organische Maßnahmen."
    },
    {
      question: "Langfristige Verträge?",
      answer: "Nein. Projekte und klare Vereinbarungen. Du buchst konkrete Leistungen mit definierten Ergebnissen. Keine Knebelverträge, keine versteckten Laufzeiten."
    },
    {
      question: "Für wen ist das nichts?",
      answer: "Für alle, die schnelle Likes wollen. Wenn es dir um Reichweite ohne Substanz geht, bin ich der falsche Ansprechpartner. Ich arbeite mit Unternehmern, die echte Ergebnisse suchen."
    }
  ];

  const handleBooking = () => {
    window.open('https://calendly.com/altovate/60min', '_blank');
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
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
                    className="bg-white dark:bg-card rounded-lg shadow-sm border border-border overflow-hidden mb-4 transition-shadow hover:shadow-md"
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
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold"
                  onClick={handleBooking}
                >
                  STRATEGIE-SESSION BUCHEN
                </Button>

                {/* Profile Picture */}
                <div className="w-12 h-12 rounded-full border-2 border-background overflow-hidden">
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
    </section>
  );
};

export default FAQ;
