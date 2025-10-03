import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { questions } from './questions';
import { Answer, VisibilityCheckResult } from './types';
import { calculateScore } from './scoring';
import { CheckCircle2 } from 'lucide-react';

interface VisibilityCheckModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VisibilityCheckModal = ({ open, onOpenChange }: VisibilityCheckModalProps) => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [result, setResult] = useState<VisibilityCheckResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  console.log('Modal render - open:', open, 'step:', step);

  const totalSteps = questions.length + 2; // questions + email + result
  const progress = (step / totalSteps) * 100;

  const handleEmailSubmit = () => {
    if (!email || !email.includes('@')) {
      toast({
        title: 'Ungültige E-Mail',
        description: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        variant: 'destructive',
      });
      return;
    }
    setStep(1);
  };

  const handleAnswerSubmit = () => {
    if (!currentAnswer) {
      toast({
        title: 'Bitte auswählen',
        description: 'Bitte wählen Sie eine Antwort aus.',
        variant: 'destructive',
      });
      return;
    }

    const newAnswers = [
      ...answers,
      {
        questionId: questions[step - 1].id,
        value: parseInt(currentAnswer),
      },
    ];
    setAnswers(newAnswers);
    setCurrentAnswer('');

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      submitResults(newAnswers);
    }
  };

  const submitResults = async (finalAnswers: Answer[]) => {
    setIsSubmitting(true);
    const scoreResult = calculateScore(finalAnswers);
    setResult(scoreResult);

    try {
      const { error } = await supabase.from('visibility_check_leads').insert([{
        email,
        answers: finalAnswers as any,
        score_pct: scoreResult.percentage,
        consent_status: 'confirmed',
      }]);

      if (error) throw error;

      setStep(step + 1);
    } catch (error) {
      console.error('Error saving lead:', error);
      toast({
        title: 'Fehler',
        description: 'Es gab ein Problem beim Speichern. Bitte versuchen Sie es erneut.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep(0);
    setEmail('');
    setAnswers([]);
    setCurrentAnswer('');
    setResult(null);
    onOpenChange(false);
  };

  const renderEmailStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Wie sichtbar sind Sie als Arbeitgeber?
        </h3>
        <p className="text-muted-foreground">
          Finden Sie in nur 2 Minuten heraus, wie gut Ihr Unternehmen als Arbeitgeber wahrgenommen wird.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Ihre E-Mail-Adresse</Label>
        <Input
          id="email"
          type="email"
          placeholder="ihre@email.de"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleEmailSubmit()}
        />
      </div>
      <Button onClick={handleEmailSubmit} className="w-full">
        Check starten
      </Button>
    </div>
  );

  const renderQuestionStep = () => {
    const question = questions[step - 1];
    if (!question) return null;

    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">
            Frage {step} von {questions.length}
          </p>
          <h3 className="text-lg font-semibold">{question.text}</h3>
        </div>
        <RadioGroup value={currentAnswer} onValueChange={setCurrentAnswer}>
          <div className="space-y-3">
            {question.options.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-accent cursor-pointer"
                onClick={() => setCurrentAnswer(option.value.toString())}
              >
                <RadioGroupItem value={option.value.toString()} id={`option-${option.value}`} />
                <Label htmlFor={`option-${option.value}`} className="cursor-pointer flex-1">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        <Button onClick={handleAnswerSubmit} disabled={isSubmitting} className="w-full">
          {step < questions.length ? 'Weiter' : 'Auswertung anzeigen'}
        </Button>
      </div>
    );
  };

  const renderResultStep = () => {
    if (!result) return null;

    const getColorClass = () => {
      switch (result.level) {
        case 'high':
          return 'text-green-600';
        case 'medium':
          return 'text-yellow-600';
        case 'low':
          return 'text-red-600';
      }
    };

    return (
      <div className="space-y-6 text-center">
        <div className="flex justify-center">
          <CheckCircle2 className={`w-16 h-16 ${getColorClass()}`} />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Ihr Ergebnis</h3>
          <div className={`text-5xl font-bold mb-2 ${getColorClass()}`}>
            {result.percentage}%
          </div>
          <p className="text-muted-foreground">{result.message}</p>
        </div>
        <div className="bg-accent p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Was bedeutet das?</h4>
          <p className="text-sm text-muted-foreground">
            Wir haben Ihr Ergebnis gespeichert und werden uns in Kürze bei Ihnen melden,
            um konkrete Verbesserungsvorschläge zu besprechen.
          </p>
        </div>
        <Button onClick={handleClose} className="w-full">
          Fertig
        </Button>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Arbeitgeber-Sichtbarkeits-Check</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <Progress value={progress} className="w-full" />
          {step === 0 && renderEmailStep()}
          {step > 0 && step <= questions.length && renderQuestionStep()}
          {step > questions.length && renderResultStep()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VisibilityCheckModal;
