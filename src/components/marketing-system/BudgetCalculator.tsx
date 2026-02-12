import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BRANCHES: Record<string, { min: number; max: number; label: string }> = {
  dienstleistung: { min: 5, max: 10, label: 'Dienstleistung' },
  handwerk: { min: 3, max: 7, label: 'Handwerk' },
  ecommerce: { min: 8, max: 15, label: 'E-Commerce' },
  gastronomie: { min: 3, max: 8, label: 'Gastronomie' },
  beratung: { min: 6, max: 12, label: 'Beratung / Coaching' },
};

const BudgetCalculator = () => {
  const [revenue, setRevenue] = useState(500000);
  const [branch, setBranch] = useState('dienstleistung');

  const b = BRANCHES[branch];
  const minBudget = Math.round((revenue * b.min) / 100);
  const maxBudget = Math.round((revenue * b.max) / 100);

  return (
    <div className="liquid-glass rounded-2xl p-8">
      <h3 className="finom-h3 mb-2">Marketingbudget-Rechner</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Erfahre, wie viel Marketingbudget für deine Branche und Unternehmensgröße empfohlen wird.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <Label className="text-xs text-muted-foreground">Jahresumsatz (€)</Label>
          <Input type="number" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} min={0} step={10000} className="mt-1" />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Branche</Label>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {Object.entries(BRANCHES).map(([key, val]) => (
              <option key={key} value={key}>{val.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="liquid-glass rounded-xl p-6 text-center">
        <p className="text-muted-foreground text-sm mb-2">Empfohlenes jährliches Marketingbudget</p>
        <p className="text-3xl font-bold text-primary">
          {minBudget.toLocaleString('de-DE')} € – {maxBudget.toLocaleString('de-DE')} €
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          ({b.min}–{b.max} % vom Jahresumsatz, Branche: {b.label})
        </p>
      </div>
    </div>
  );
};

export default BudgetCalculator;
