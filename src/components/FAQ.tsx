import { Plus, Minus } from 'lucide-react';
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
      question: "Was, wenn ich schon eine Website habe?",
      answer: "Perfekt! Wir prüfen, ob ein kompletter Refresh sinnvoll ist oder ob wir deine bestehende Website gezielt optimieren. Ziel ist immer: maximale Performance und Sichtbarkeit – ohne unnötige Doppelarbeit."
    },
    {
      question: "Wie läuft die Zusammenarbeit ab?",
      answer: "Wir starten immer mit einem kostenlosen Erstgespräch. Dort lernen wir uns kennen, sprechen über deine Ziele und Vorstellungen und prüfen, wo du aktuell stehst. Auf dieser Basis entwickeln wir ein maßgeschneidertes Konzept, das zu deinem Unternehmen, deiner Branche und deinem Budget passt. Danach entscheidest du in Ruhe, ob wir den Weg gemeinsam gehen."
    },
    {
      question: "Was, wenn kein Paket passt?",
      answer: "Unsere Pakete sind klare Orientierungspunkte – aber sie sind nicht in Stein gemeißelt. Marketing ist ein Prozess, und nicht jedes Unternehmen braucht direkt das volle Programm. Deshalb schauen wir gemeinsam, welche Maßnahmen in deiner Situation am meisten Sinn machen und bauen bei Bedarf Schritt für Schritt auf. So kannst du genau da einsteigen, wo du gerade stehst."
    },
    {
      question: "Gibt es Ratenzahlungsmöglichkeiten?",
      answer: "Grundsätzlich musst du den Projektbetrag nicht zu 100 % im Voraus leisten. Wir arbeiten mit fairen, transparenten Zahlungsplänen, die wir individuell vereinbaren können. Das kann zum Beispiel eine Aufteilung in mehrere Teilzahlungen sein – je nach Projektgröße. Wichtig: Wir bieten Ratenzahlung nicht an, um Preise künstlich kleinzurechnen, sondern um Unternehmen Planungssicherheit zu geben und Investitionen kalkulierbar zu machen."
    },
    {
      question: "Was unterscheidet euch von anderen Agenturen?",
      answer: "Viele Agenturen verkaufen möglichst große Pakete oder versuchen, Kunden langfristig zu binden – auch wenn der Nutzen nicht immer gegeben ist. Wir gehen einen anderen Weg: Wir wollen verstehen, was dein Produkt oder deine Dienstleistung wirklich ausmacht, und uns in deine Lage versetzen. Daraus entsteht ein Konzept, das dir in deiner Situation wirklich weiterhilft, ohne unnötige Ausgaben."
    }
  ];

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
                  Bei offenen Fragen, sind wir gerne persönlich für dich da.
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Wir machen keine halben Sachen. Auch nicht beim ersten Gespräch. 
                  Lass uns alle Fragen klären.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  KONTAKT AUFNEHMEN
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