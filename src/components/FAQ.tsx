import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Was kostet das wirklich?",
      answer: "Die Preise siehst du oben. Keine versteckten Kosten, keine Überraschungen. Du zahlst für Ergebnisse, nicht für Experimente."
    },
    {
      question: "Muss ich was liefern?",
      answer: "Nur deine Zeit für ein Gespräch und Zugang zu deinen bestehenden Accounts. Den Rest machen wir."
    },
    {
      question: "Was, wenn ich schon eine Website habe?",
      answer: "Gut! Dann schauen wir, ob sie noch zu retten ist oder ob ein Neustart schneller geht. Manchmal ist weniger mehr."
    },
    {
      question: "Wie lange dauert es?",
      answer: "30 Tage für das Sichtbarkeitspaket. Einzelne Services je nach Umfang 7-14 Tage. Wir arbeiten in Sprints, nicht in Jahren."
    },
    {
      question: "Was unterscheidet euch von klassischen Agenturen?",
      answer: "Wir labern nicht rum. Keine 50-seitigen Konzepte. Keine Meetings über Meetings. Wir machen einfach und zeigen dir die Ergebnisse."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
            Noch <span className="text-primary">Fragen?</span>
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bold-card px-6"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;