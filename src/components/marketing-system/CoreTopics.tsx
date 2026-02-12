import { TrendingUp, Eye, Brain } from 'lucide-react';

const topics = [
  {
    icon: TrendingUp,
    title: 'Wirtschaftlichkeit & ROI',
    text: 'Wie viel darf Marketing kosten? Ab wann lohnt sich Social Media? Und warum Reichweite keine Kennzahl ist.',
    cta: 'ROI-Modelle ansehen',
    anchor: 'tools',
  },
  {
    icon: Eye,
    title: 'Sichtbarkeit & Funnel',
    text: 'Warum Social Media ohne System Zeitverschwendung ist. Und wie aus Aufmerksamkeit echte Anfragen werden.',
    cta: 'System verstehen',
    anchor: 'framework',
  },
  {
    icon: Brain,
    title: 'GEO & KI-Sichtbarkeit',
    text: 'Warum Ranking nicht mehr reicht. Und wie Unternehmen in KI-Systemen sichtbar werden.',
    cta: 'GEO lernen',
    anchor: 'artikel',
  },
];

const CoreTopics = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="kernthemen" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="liquid-glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-xl liquid-glass-icon flex items-center justify-center mb-6">
                <topic.icon className="w-7 h-7 text-[#ff1c5c]" />
              </div>
              <h2 className="finom-h3 mb-4">{topic.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{topic.text}</p>
              <button
                onClick={() => scrollTo(topic.anchor)}
                className="text-[#ff1c5c] font-semibold text-sm hover:underline transition-colors"
              >
                {topic.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTopics;
