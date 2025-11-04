import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VisibilityAnalysis = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    socialLink: '',
    hasBio: false,
    hasHighlights: false,
    hasUniformLook: false,
    hasServices: false,
    hasTeam: false,
    hasActivePosts: false,
    hasLocation: false,
    hasLinktree: false,
    hasSeoName: false,
    acceptPrivacy: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Bitte fülle alle Felder aus",
        description: "Name, E-Mail und Firma sind erforderlich.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.acceptPrivacy) {
      toast({
        title: "Datenschutz akzeptieren",
        description: "Bitte akzeptiere die Datenschutzbestimmungen.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Berechne Score basierend auf allen Checkboxen
    setTimeout(() => {
      const checkboxes = [
        formData.hasBio,
        formData.hasHighlights,
        formData.hasUniformLook,
        formData.hasServices,
        formData.hasTeam,
        formData.hasActivePosts,
        formData.hasLocation,
        formData.hasLinktree,
        formData.hasSeoName
      ];
      
      const score = (checkboxes.filter(Boolean).length / checkboxes.length) * 100;
      setResult(Math.round(score));
      setIsLoading(false);
      
      toast({
        title: "Analyse abgeschlossen!",
        description: `Dein Sichtbarkeits-Score: ${Math.round(score)}%`,
      });
    }, 2000);
  };

  if (result !== null) {
    const getScoreColor = (score: number) => {
      if (score >= 70) return 'text-success';
      if (score >= 40) return 'text-warning';
      return 'text-destructive';
    };

    const getScoreText = (score: number) => {
      if (score >= 70) return 'Sehr gut! Du bist auf einem guten Weg.';
      if (score >= 40) return 'Gut! Es gibt noch Optimierungspotenzial.';
      return 'Hier ist noch viel Luft nach oben!';
    };

    return (
      <div className="space-y-4">
        <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
          <div className={`text-5xl font-bold mb-2 ${getScoreColor(result)}`}>
            {result}%
          </div>
          <p className="text-sm text-muted-foreground">
            {getScoreText(result)}
          </p>
        </div>

        <div className="p-4 bg-muted/50 rounded-lg text-sm space-y-2">
          <p className="font-medium">Nächste Schritte:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Vervollständige fehlende Profilinformationen</li>
            <li>• Erstelle aussagekräftige Highlights</li>
            <li>• Verlinke deine Website oder Kontaktmöglichkeit</li>
            <li>• Optimiere deine Bio mit Keywords</li>
          </ul>
        </div>

        <Button 
          className="w-full btn-hero"
          onClick={() => {
            const contact = document.getElementById('contact');
            contact?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Jetzt Beratung buchen
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-3">
        <div>
          <Label htmlFor="name" className="text-sm">Name*</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Dein Name"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm">E-Mail*</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="deine@email.de"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="company" className="text-sm">Firma*</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            placeholder="Deine Firma"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="socialLink" className="text-sm">Social Media Link</Label>
          <Input
            id="socialLink"
            value={formData.socialLink}
            onChange={(e) => setFormData(prev => ({ ...prev, socialLink: e.target.value }))}
            placeholder="instagram.com/deinprofil"
            className="mt-1"
          />
        </div>
      </div>

      <div className="border-t border-border pt-4 space-y-3">
        <p className="text-sm font-medium">Was hast du bereits? (Mehrfachauswahl möglich)</p>
        
        <div className="space-y-2">
          {[
            { id: 'hasBio', label: 'Bio optimiert' },
            { id: 'hasHighlights', label: 'Highlights vorhanden' },
            { id: 'hasUniformLook', label: 'Einheitlicher Look' },
            { id: 'hasServices', label: 'Leistungen kommuniziert' },
            { id: 'hasTeam', label: 'Team vorgestellt' },
            { id: 'hasActivePosts', label: 'Aktive Posts' },
            { id: 'hasLocation', label: 'Standort integriert' },
            { id: 'hasLinktree', label: 'Linktree vorhanden' },
            { id: 'hasSeoName', label: 'SEO-Name gewählt' }
          ].map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox
                id={item.id}
                checked={formData[item.id as keyof typeof formData] as boolean}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, [item.id]: checked }))
                }
              />
              <Label htmlFor={item.id} className="text-sm font-normal cursor-pointer">
                {item.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="privacy"
          checked={formData.acceptPrivacy}
          onCheckedChange={(checked) => 
            setFormData(prev => ({ ...prev, acceptPrivacy: checked as boolean }))
          }
        />
        <Label htmlFor="privacy" className="text-xs font-normal cursor-pointer leading-tight">
          Ich akzeptiere die{' '}
          <a href="/datenschutz" className="text-primary hover:underline">
            Datenschutzbestimmungen
          </a>
          {' '}und stimme der Kontaktaufnahme zu.
        </Label>
      </div>

      <Button 
        type="submit"
        disabled={isLoading}
        className="w-full btn-hero"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Analysiere...
          </>
        ) : (
          'Jetzt Potenzial prüfen'
        )}
      </Button>
    </form>
  );
};

export default VisibilityAnalysis;
