import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ROICalculator = () => {
  const [budget, setBudget] = useState(1000);
  const [cpc, setCpc] = useState(1.5);
  const [convRate, setConvRate] = useState(3);

  const clicks = cpc > 0 ? Math.round(budget / cpc) : 0;
  const leads = Math.round(clicks * (convRate / 100));
  const costPerLead = leads > 0 ? (budget / leads).toFixed(2) : '–';

  return (
    <div className="liquid-glass rounded-2xl p-8">
      <h3 className="finom-h3 mb-2">ROI-Rechner</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Berechne deinen Cost-per-Lead und die erwarteten Ergebnisse.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div>
          <Label className="text-xs text-muted-foreground">Werbebudget (€)</Label>
          <Input type="number" value={budget} onChange={(e) => setBudget(Number(e.target.value))} min={0} className="mt-1" />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Klickpreis (€)</Label>
          <Input type="number" value={cpc} onChange={(e) => setCpc(Number(e.target.value))} min={0} step={0.1} className="mt-1" />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Conversionrate (%)</Label>
          <Input type="number" value={convRate} onChange={(e) => setConvRate(Number(e.target.value))} min={0} max={100} step={0.5} className="mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="liquid-glass rounded-xl p-4">
          <p className="text-2xl font-bold text-primary">{clicks}</p>
          <p className="text-xs text-muted-foreground">Klicks</p>
        </div>
        <div className="liquid-glass rounded-xl p-4">
          <p className="text-2xl font-bold text-primary">{leads}</p>
          <p className="text-xs text-muted-foreground">Leads</p>
        </div>
        <div className="liquid-glass rounded-xl p-4">
          <p className="text-2xl font-bold text-primary">{costPerLead} €</p>
          <p className="text-xs text-muted-foreground">Cost per Lead</p>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
