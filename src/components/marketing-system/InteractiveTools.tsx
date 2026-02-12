import { useState } from 'react';
import { Calculator, PieChart, Sparkles } from 'lucide-react';
import ROICalculator from './ROICalculator';
import BudgetCalculator from './BudgetCalculator';
import VisibilityCheckModal from '@/components/visibility-check/VisibilityCheckModal';

const InteractiveTools = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [visibilityOpen, setVisibilityOpen] = useState(false);

  const tools = [
    { key: 'roi', icon: Calculator, title: 'ROI-Rechner', desc: 'Berechne deinen Cost-per-Lead und ROI.' },
    { key: 'budget', icon: PieChart, title: 'Marketingbudget-Rechner', desc: 'Finde das empfohlene Budget für deine Branche.' },
    { key: 'visibility', icon: Sparkles, title: 'Sichtbarkeits-Selbsttest', desc: 'Prüfe deine aktuelle Online-Sichtbarkeit.' },
  ];

  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="finom-h2 mb-4">Interaktive Tools</h2>
          <p className="finom-lead">Keine Theorie. Rechne selbst.</p>
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {tools.map((tool) => (
            <button
              key={tool.key}
              onClick={() => {
                if (tool.key === 'visibility') {
                  setVisibilityOpen(true);
                } else {
                  setActiveTool(activeTool === tool.key ? null : tool.key);
                }
              }}
              className={`liquid-glass rounded-xl p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                activeTool === tool.key ? 'ring-2 ring-[#ff1c5c]' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-lg liquid-glass-icon flex items-center justify-center mb-4">
                <tool.icon className="w-6 h-6 text-[#ff1c5c]" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{tool.title}</h3>
              <p className="text-sm text-muted-foreground">{tool.desc}</p>
            </button>
          ))}
        </div>

        {/* Active Tool */}
        <div className="max-w-4xl mx-auto">
          {activeTool === 'roi' && <ROICalculator />}
          {activeTool === 'budget' && <BudgetCalculator />}
        </div>

        <VisibilityCheckModal open={visibilityOpen} onOpenChange={setVisibilityOpen} />
      </div>
    </section>
  );
};

export default InteractiveTools;
