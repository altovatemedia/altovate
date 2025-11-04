import { useState } from 'react';
import { Wrench, DollarSign, Clock } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface Preference {
  id: string;
  icon: typeof Wrench;
  emoji: string;
  title: string;
  description: string;
}

const preferences: Preference[] = [
  {
    id: 'professional',
    icon: Wrench,
    emoji: '🔧',
    title: 'Professionell',
    description: 'Hochwertige Inhalte, starke Strategie, sichtbarer Erfolg.'
  },
  {
    id: 'affordable',
    icon: DollarSign,
    emoji: '💸',
    title: 'Günstig',
    description: 'Kleines Budget, minimaler Invest – möglichst viel rausholen.'
  },
  {
    id: 'timesaving',
    icon: Clock,
    emoji: '⏱️',
    title: 'Zeitsparend für dich',
    description: 'Du hast den Kopf frei – wir übernehmen Planung & Umsetzung.'
  }
];

const SocialMediaPreferences = () => {
  const [activePreferences, setActivePreferences] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setActivePreferences((prev) => {
      if (prev.includes(id)) {
        // Deactivate if already active
        return prev.filter((prefId) => prefId !== id);
      } else {
        // Activate and enforce max 2 active
        if (prev.length >= 2) {
          // Remove the first activated one (FIFO)
          return [...prev.slice(1), id];
        }
        return [...prev, id];
      }
    });
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="finom-h2 mb-4">Wie soll dein Social Media sein?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {preferences.map((pref) => {
            const isActive = activePreferences.includes(pref.id);
            const Icon = pref.icon;

            return (
              <div
                key={pref.id}
                className={`finom-card transition-all duration-300 ${
                  isActive 
                    ? 'border-2 border-primary shadow-elegant bg-primary/5' 
                    : 'border border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'bg-primary/20' : 'bg-muted'
                    }`}>
                      <span className="text-2xl">{pref.emoji}</span>
                    </div>
                    <h3 className="finom-h3 text-lg">{pref.title}</h3>
                  </div>
                  <Switch
                    checked={isActive}
                    onCheckedChange={() => handleToggle(pref.id)}
                    className="ml-2"
                  />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pref.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground font-medium">
            Egal, worauf du Wert legst – wir holen für dich das Maximum raus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPreferences;
