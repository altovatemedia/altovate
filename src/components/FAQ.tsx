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
      answer: "Wir arbeiten transparent mit Fixpreisen – keine versteckten Kosten, keine bösen Überraschungen. Unser Signature Offer startet bei 5.000 € und umfasst alle Bausteine, die du für sichtbares Wachstum brauchst."
    },
    {
      question: "Muss ich was liefern?",
      answer: "Nein – wir übernehmen Content, Texte, Design und Umsetzung. Alles was wir brauchen, sind ein paar Basisinfos zu deinem Unternehmen. Den Rest erledigen wir – damit du dich auf dein Business konzentrieren kannst."
    },
    {
      question: "Was, wenn ich schon eine Website habe?",
      answer: "Perfekt! Wir prüfen, ob ein kompletter Refresh sinnvoll ist oder ob wir deine bestehende Website gezielt optimieren. Ziel ist immer: maximale Performance und Sichtbarkeit – ohne unnötige Doppelarbeit."
    },
    {
      question: "Wie lange dauert es?",
      answer: "In der Regel siehst du erste Ergebnisse nach 30 Tagen. Je nach Projektumfang planen wir für den kompletten Setup etwa 4–6 Wochen ein. Danach läuft das System so, dass es dir kontinuierlich Anfragen bringt."
    },
    {
      question: "Was unterscheidet euch von klassischen Agenturen?",
      answer: "Wir arbeiten ganzheitlich, lean und KI-gestützt – kein Stundensatz-Geschacher, keine langen Abstimmungen. Stattdessen bekommst du ein fertiges System, das Leads, Bewerber und Sichtbarkeit liefert. Schnell, messbar und nachhaltig."
    }
  ];

  return (
    <section className="py-24 bg-[#F9F9FB]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-[#09002C]">
            Noch <span className="text-[#EA3B5F]">Fragen?</span>
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(9,0,44,0.08)] 
                         hover:shadow-[0_16px_40px_rgba(234,59,95,0.15)] transition-all duration-300 
                         border-0 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-[#09002C] 
                                           hover:text-[#EA3B5F] transition-colors px-8 py-6 
                                           hover:no-underline [&[data-state=open]]:text-[#EA3B5F]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#09002C]/80 text-base leading-relaxed 
                                          px-8 pb-6 pt-0">
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