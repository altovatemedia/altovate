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

  const totalSteps = questions.length + 2; // questions + finish page + result
  const progress = (step / totalSteps) * 100;

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: 'Ungültige E-Mail',
        description: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('visibility_check_leads').insert([{
        email,
        answers: answers as any,
        score_pct: result!.percentage,
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
        questionId: questions[step].id,
        value: parseInt(currentAnswer),
      },
    ];
    setAnswers(newAnswers);
    setCurrentAnswer('');

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Nach letzter Frage: Ergebnis berechnen und zur Finish Page
      const scoreResult = calculateScore(newAnswers);
      setResult(scoreResult);
      setStep(step + 1);
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

  const renderFinishStep = () => (
    <div className="space-y-6 text-center">
      <div className="flex justify-center">
        <CheckCircle2 className="w-16 h-16 text-primary animate-bounce" />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">Dein Ergebnis ist fertig! 🎉</h3>
        <p className="text-muted-foreground mb-6">
          Gib jetzt deine E-Mail-Adresse ein, um dein persönliches Sichtbarkeits-Ergebnis zu sehen.
        </p>
      </div>
      <div className="space-y-2 text-left">
        <Label htmlFor="email">Deine E-Mail-Adresse</Label>
        <Input
          id="email"
          type="email"
          placeholder="deine@email.de"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleEmailSubmit()}
        />
      </div>
      <Button onClick={handleEmailSubmit} disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Wird gespeichert...' : 'Ergebnis anzeigen'}
      </Button>
    </div>
  );

  const renderQuestionStep = () => {
    const question = questions[step];
    if (!question) return null;

    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">
            Frage {step + 1} von {questions.length}
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
          {step < questions.length - 1 ? 'Weiter' : 'Fertig'}
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
            Wir haben dein Ergebnis gespeichert und werden uns in Kürze bei dir melden,
            um konkrete Verbesserungsvorschläge zu besprechen.
          </p>
        </div>
        <Button onClick={handleClose} className="w-full">
          Fertig
        </Button>
      </div>
    );
  };

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Unternehmens-Sichtbarkeits-Check</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <Progress value={progress} className="w-full" />
          {step < questions.length && renderQuestionStep()}
          {step === questions.length && renderFinishStep()}
          {step > questions.length && renderResultStep()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VisibilityCheckModal;
