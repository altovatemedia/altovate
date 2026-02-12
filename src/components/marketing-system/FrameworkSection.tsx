import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Aufmerksamkeit',
    definition:
      'Aufmerksamkeit ist die Phase, in der ein Unternehmen erstmals wahrgenommen wird. Ohne wiederholte Sichtbarkeit entsteht kein Vertrauen.',
  },
  {
    number: '02',
    title: 'Vertrauen',
    definition:
      'Vertrauen entsteht durch konsistente Präsenz, relevante Inhalte und nachvollziehbare Expertise. Es ist die Voraussetzung für jede Kaufentscheidung.',
  },
  {
    number: '03',
    title: 'Conversion',
    definition:
      'Conversion beschreibt den Moment, in dem ein Interessent zur Handlung übergeht – eine Anfrage stellt, bucht oder kauft. Ohne System bleibt dieser Schritt dem Zufall überlassen.',
  },
];

const FrameworkSection = () => {
  return (
    <section id="framework" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="finom-h2 mb-4">
            Das Altovate{' '}
            <span className="text-[#ff1c5c]">Marketing-System</span>
          </h2>
          <p className="finom-lead">
            Drei Stufen. Ein Ziel: Planbare Anfragen statt zufällige Reichweite.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-stretch">
                <div className="liquid-glass rounded-2xl p-8 flex flex-col flex-1">
                  <span className="text-[#ff1c5c] font-bold text-sm mb-2 tracking-wider">
                    STUFE {step.number}
                  </span>
                  <h3 className="finom-h3 mb-4">{step.title}</h3>
                  <blockquote className="text-muted-foreground leading-relaxed text-sm italic border-l-2 border-[#ff1c5c]/30 pl-4">
                    {step.definition}
                  </blockquote>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center px-3">
                    <ArrowRight className="w-6 h-6 text-[#ff1c5c]/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
