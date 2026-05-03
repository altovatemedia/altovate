import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import alexanderPortrait from '@/assets/alexander-portrait-circle.png';
import BookingModal from '@/components/BookingModal';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqs = [
    { question: "Muss ich als Unternehmer selbst Content erstellen?", answer: "Wenn du Gesicht der Marke bist: ja, aber gezielt. Wir minimieren den Aufwand auf 1–2 Stunden pro Monat — und produzieren in dieser Zeit Content für 4 Wochen. Wenn du im Hintergrund bleiben willst: auch das geht, mit Mitarbeiter-Content, Kunden-Cases und Brand-Storytelling." },
    { question: "Arbeitet Altovate mit bezahlter Werbung?", answer: "Ja. Performance-Ads sind ein Pflichtbaustein, weil organische Reichweite allein nicht planbar ist. Budget ab 500 € / Monat aufwärts, je nach Markt und Ziel." },
    { question: "Gibt es langfristige Vertragsbindungen?", answer: "Nein. Strategische Begleitung läuft in 12- oder 24-Wochen-Blöcken. Done-for-You monatlich kündbar nach Mindestlaufzeit von 3 Monaten. Du behältst die Kontrolle." },
    { question: "Für wen ist Altovate nicht geeignet?", answer: "Für Unternehmer, die schnelle Tricks suchen, viral gehen wollen, oder erwarten dass Marketing in 4 Wochen Anfragen liefert. Systeme brauchen 90 Tage, bis sie greifen. Wenn du das nicht aushältst — nicht Altovate." },
    { question: "Warum gibt es keine kostenlosen Erstgespräche?", answer: "Eine Strategie-Session ist eine Beratungsleistung, kein Verkaufsgespräch. In 60 oder 90 Minuten bekommst du eine echte Analyse mit konkreten Empfehlungen. Bezahlt heißt: beide Seiten kommen vorbereitet, beide Seiten holen etwas raus." }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <Reveal direction="left" blur>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">FRAGEN UND</h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">ANTWORTEN</h2>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <StaggerItem key={index}>
                    <AccordionItem value={`item-${index}`} className="liquid-glass rounded-lg overflow-hidden mb-4 transition-shadow hover:border-primary/20">
                      <AccordionTrigger className="text-left text-base md:text-lg font-bold text-foreground hover:text-foreground transition-colors px-6 py-5 hover:no-underline group [&>svg]:hidden">
                        <div className="flex items-center justify-between w-full pr-4">
                          <span className="flex-1">{faq.question}</span>
                          <Plus className="w-6 h-6 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed px-6 pb-5 pt-0">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </StaggerItem>
                ))}
              </Accordion>
            </StaggerContainer>

            <Reveal direction="right" delay={0.2}>
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
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold" onClick={() => setIsModalOpen(true)}>
                    STRATEGIE-SESSION BUCHEN
                  </Button>
                  <div className="w-12 h-12 rounded-full border-2 border-border overflow-hidden">
                    <img src={alexanderPortrait} alt="Alexander - Gründer" className="w-full h-full object-cover object-[center_20%]" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} offerType="Strategie-Session" />
    </section>
  );
};

export default FAQ;
