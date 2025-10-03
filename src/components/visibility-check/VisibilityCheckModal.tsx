import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { questions } from './questions';
import { Answer, VisibilityCheckResult } from './types';
import { calculateScore } from './scoring';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface VisibilityCheckModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VisibilityCheckModal = ({ open, onOpenChange }: VisibilityCheckModalProps) => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [currentSubAnswers, setCurrentSubAnswers] = useState<string[]>([]);
  const [showSubQuestions, setShowSubQuestions] = useState(false);
  const [result, setResult] = useState<VisibilityCheckResult | null>(null);
  const [showFinish, setShowFinish] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = showIntro ? 0 : ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleStartCheck = () => {
    setShowIntro(false);
  };

  const handleAnswerSelect = (value: string) => {
    setCurrentAnswer(value);
    const shouldShowSub = currentQuestion.showSubQuestionsIf === value;
    setShowSubQuestions(shouldShowSub);
    if (!shouldShowSub) {
      setCurrentSubAnswers([]);
    }
  };

  const handleSubAnswerToggle = (subId: string) => {
    setCurrentSubAnswers(prev => 
      prev.includes(subId) 
        ? prev.filter(id => id !== subId)
        : [...prev, subId]
    );
  };

  const handleCheckboxToggle = (value: string) => {
    setCurrentSubAnswers(prev => 
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    if (currentQuestion.type === 'radio' && !currentAnswer) {
      toast({
        title: 'Bitte auswählen',
        description: 'Bitte wähle eine Antwort aus.',
        variant: 'destructive',
      });
      return;
    }

    if (currentQuestion.type === 'checkbox' && currentSubAnswers.length === 0) {
      toast({
        title: 'Bitte auswählen',
        description: 'Bitte wähle mindestens eine Option aus.',
        variant: 'destructive',
      });
      return;
    }

    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      value: currentQuestion.type === 'radio' ? currentAnswer : 'multiple',
      subAnswers: currentSubAnswers.length > 0 ? currentSubAnswers : undefined,
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer('');
      setCurrentSubAnswers([]);
      setShowSubQuestions(false);
    } else {
      const scoreResult = calculateScore(newAnswers);
      setResult(scoreResult);
      setShowFinish(true);
    }
  };

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: 'Ungültige E-Mail',
        description: 'Bitte gib eine gültige E-Mail-Adresse ein.',
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

      setShowFinish(false);
    } catch (error) {
      console.error('Error saving lead:', error);
      toast({
        title: 'Fehler',
        description: 'Es gab ein Problem beim Speichern. Bitte versuche es erneut.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowIntro(true);
    setCurrentQuestionIndex(0);
    setEmail('');
    setAnswers([]);
    setCurrentAnswer('');
    setCurrentSubAnswers([]);
    setShowSubQuestions(false);
    setResult(null);
    setShowFinish(false);
    onOpenChange(false);
  };

  const renderIntro = () => (
    <div className="space-y-6 text-center py-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full bg-[#ff1c5c]/10 flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-[#ff1c5c]" />
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
          0 € Sichtbarkeits-Check
        </h3>
        <p className="text-muted-foreground text-lg">
          Beantworte in 2–4 Minuten ein paar Fragen – wir zeigen dir deinen Score und die 3 wichtigsten To-Dos.
        </p>
      </div>
      <Button 
        onClick={handleStartCheck} 
        className="w-full py-6 text-lg font-semibold"
        style={{ backgroundColor: '#ff1c5c' }}
      >
        Check starten
      </Button>
    </div>
  );

  const renderQuestion = () => (
    <div className="space-y-6 py-4">
      <div>
        <p className="text-sm text-muted-foreground mb-2">
          Frage {currentQuestionIndex + 1} von {totalQuestions}
        </p>
        <h3 className="text-xl font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
          {currentQuestion.text}
        </h3>
      </div>

      {currentQuestion.type === 'radio' ? (
        <RadioGroup value={currentAnswer} onValueChange={handleAnswerSelect}>
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-accent cursor-pointer transition-colors"
                onClick={() => handleAnswerSelect(option.value)}
              >
                <RadioGroupItem value={option.value} id={`option-${option.value}`} />
                <Label htmlFor={`option-${option.value}`} className="cursor-pointer flex-1">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      ) : (
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <div
              key={option.value}
              className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-accent cursor-pointer transition-colors"
              onClick={() => handleCheckboxToggle(option.value)}
            >
              <Checkbox 
                checked={currentSubAnswers.includes(option.value)}
                onCheckedChange={() => handleCheckboxToggle(option.value)}
                id={`checkbox-${option.value}`}
              />
              <Label htmlFor={`checkbox-${option.value}`} className="cursor-pointer flex-1">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      )}

      {showSubQuestions && currentQuestion.subQuestions && (
        <div className="mt-6 p-4 bg-accent/50 rounded-lg space-y-3">
          <p className="text-sm font-medium mb-3">Was davon trifft zu?</p>
          {currentQuestion.subQuestions.map((subQ) => (
            <div
              key={subQ.id}
              className="flex items-center space-x-3 p-3 hover:bg-background rounded cursor-pointer transition-colors"
              onClick={() => handleSubAnswerToggle(subQ.id)}
            >
              <Checkbox 
                checked={currentSubAnswers.includes(subQ.id)}
                onCheckedChange={() => handleSubAnswerToggle(subQ.id)}
                id={subQ.id}
              />
              <Label htmlFor={subQ.id} className="cursor-pointer flex-1 text-sm">
                {subQ.text}
              </Label>
            </div>
          ))}
        </div>
      )}

      <Button 
        onClick={handleNext} 
        disabled={isSubmitting} 
        className="w-full py-6 text-lg font-semibold"
        style={{ backgroundColor: '#ff1c5c' }}
      >
        {currentQuestionIndex < totalQuestions - 1 ? 'Weiter' : 'Fertig'}
      </Button>
    </div>
  );

  const renderFinish = () => (
    <div className="space-y-6 text-center py-6">
      <div className="flex justify-center">
        <CheckCircle2 className="w-16 h-16 animate-bounce" style={{ color: '#ff1c5c' }} />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          Dein Ergebnis ist fertig! 🎉
        </h3>
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
          className="py-6"
        />
      </div>
      <Button 
        onClick={handleEmailSubmit} 
        disabled={isSubmitting} 
        className="w-full py-6 text-lg font-semibold"
        style={{ backgroundColor: '#ff1c5c' }}
      >
        {isSubmitting ? 'Wird gespeichert...' : 'Ergebnis anzeigen'}
      </Button>
    </div>
  );

  const renderResult = () => {
    if (!result) return null;

    const getColorClass = () => {
      switch (result.level) {
        case 'high':
          return 'text-green-600';
        case 'medium':
          return 'text-yellow-600';
        case 'low':
          return 'text-[#ff1c5c]';
      }
    };

    return (
      <div className="space-y-6 text-center py-6">
        <div className="flex justify-center">
          <CheckCircle2 className={`w-16 h-16 ${getColorClass()}`} />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Dein Ergebnis
          </h3>
          <div className={`text-5xl font-bold mb-4 ${getColorClass()}`}>
            {result.percentage}%
          </div>
          <p className="text-muted-foreground text-lg">{result.message}</p>
        </div>
        <div className="p-6 rounded-lg" style={{ backgroundColor: '#ff1c5c10' }}>
          <h4 className="font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Was bedeutet das?
          </h4>
          <p className="text-sm text-muted-foreground">
            Wir haben dein Ergebnis gespeichert und werden uns in Kürze bei dir melden,
            um konkrete Verbesserungsvorschläge zu besprechen.
          </p>
        </div>
        <Button 
          onClick={handleClose} 
          className="w-full py-6 text-lg font-semibold"
          style={{ backgroundColor: '#ff1c5c' }}
        >
          Fertig
        </Button>
      </div>
    );
  };

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: 'Inter, sans-serif' }}>
            {showIntro ? '0 € Sichtbarkeits-Check' : 'Unternehmens-Sichtbarkeits-Check'}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {!showIntro && !showFinish && !result && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Fortschritt</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full h-2" style={{ 
                backgroundColor: '#ff1c5c20'
              }} />
            </div>
          )}
          {showIntro && renderIntro()}
          {!showIntro && !showFinish && !result && renderQuestion()}
          {showFinish && renderFinish()}
          {result && !showFinish && renderResult()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VisibilityCheckModal;
