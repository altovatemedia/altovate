import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight, TrendingUp, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const questions = [
  { id: 'hasBio', question: 'Ist deine Bio aussagekräftig und optimiert?' },
  { id: 'hasHighlights', question: 'Sind deine Story-Highlights gepflegt?' },
  { id: 'hasUniformLook', question: 'Hast du ein einheitliches Design?' },
  { id: 'hasServices', question: 'Sind deine Leistungen/Team klar erkennbar?' },
  { id: 'hasTeam', question: 'Hast du dein Team vorgestellt?' },
  { id: 'hasActivePosts', question: 'Postest du regelmäßig aktive Beiträge?' },
  { id: 'hasLocation', question: 'Ist dein Standort/Kontakt integriert?' },
  { id: 'hasLinktree', question: 'Sind Feedback/Rezensionen sichtbar?' },
  { id: 'hasSeoName', question: 'Ist dein Kanal-Name SEO-optimiert?' }
];

const VisibilityAnalysis = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    company: '',
    socialLink: ''
  });
  const [result, setResult] = useState<number | null>(null);
  const { toast } = useToast();

  const handleAnswer = (answer: boolean) => {
    const currentQuestion = questions[step];
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }));
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Move to contact form
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactData.name || !contactData.email || !contactData.company) {
      toast({
        title: "Bitte fülle alle Felder aus",
        description: "Name, E-Mail und Firma sind erforderlich.",
        variant: "destructive"
      });
      return;
    }

    // Calculate score
    const yesCount = Object.values(answers).filter(Boolean).length;
    const score = Math.round((yesCount / questions.length) * 100);
    setResult(score);

    toast({
      title: "Analyse abgeschlossen!",
      description: `Dein Sichtbarkeits-Score: ${score}%`,
    });
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

  // Show questions one by one
  if (step < questions.length) {
    const currentQuestion = questions[step];
    const progress = ((step) / questions.length) * 100;

    return (
      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Frage {step + 1} von {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-1.5">
            <div 
              className="bg-primary h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="space-y-4">
          <h4 className="font-bold text-base">{currentQuestion.question}</h4>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => handleAnswer(true)}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-success/10 hover:border-success"
            >
              <Check className="w-6 h-6 text-success" />
              <span>Ja</span>
            </Button>
            <Button
              onClick={() => handleAnswer(false)}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-destructive/10 hover:border-destructive"
            >
              <X className="w-6 h-6 text-destructive" />
              <span>Nein</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Show contact form
  if (step === questions.length && result === null) {
    return (
      <form onSubmit={handleContactSubmit} className="space-y-4">
        <div className="space-y-2 mb-4">
          <h4 className="font-bold text-base">Fast geschafft! Jetzt Kontaktdaten eingeben</h4>
          <p className="text-sm text-muted-foreground">
            Um dein Ergebnis zu erhalten, fülle bitte die folgenden Felder aus.
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <Label htmlFor="name" className="text-sm">Name*</Label>
            <Input
              id="name"
              value={contactData.name}
              onChange={(e) => setContactData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Dein Name"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm">E-Mail*</Label>
            <Input
              id="email"
              type="email"
              value={contactData.email}
              onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="deine@email.de"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-sm">Firma*</Label>
            <Input
              id="company"
              value={contactData.company}
              onChange={(e) => setContactData(prev => ({ ...prev, company: e.target.value }))}
              placeholder="Deine Firma"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="socialLink" className="text-sm">Social Media Link</Label>
            <Input
              id="socialLink"
              value={contactData.socialLink}
              onChange={(e) => setContactData(prev => ({ ...prev, socialLink: e.target.value }))}
              placeholder="instagram.com/deinprofil"
              className="mt-1"
            />
          </div>
        </div>

        <Button 
          type="submit"
          className="w-full btn-hero"
        >
          Ergebnis anzeigen
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
    );
  }

  return null;
};

export default VisibilityAnalysis;
