import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronRight, RotateCcw } from 'lucide-react';

const PackageFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    hasSocialMedia: '',
    selfPost: '',
    videoImportant: '',
    budget: ''
  });
  const [recommendation, setRecommendation] = useState('');

  const questions = [
    {
      id: 'hasSocialMedia',
      question: 'Bist du bereits auf Social Media aktiv?',
      options: [
        { value: 'yes', label: 'Ja, regelmäßig' },
        { value: 'sometimes', label: 'Ja, aber unregelmäßig' },
        { value: 'no', label: 'Nein, noch nicht' }
      ]
    },
    {
      id: 'selfPost',
      question: 'Möchtest du selbst posten oder abgeben?',
      options: [
        { value: 'self', label: 'Selbst posten' },
        { value: 'delegate', label: 'Komplett abgeben' },
        { value: 'mix', label: 'Gemischt' }
      ]
    },
    {
      id: 'videoImportant',
      question: 'Ist Video-Content wichtig für dich?',
      options: [
        { value: 'yes', label: 'Ja, sehr wichtig' },
        { value: 'maybe', label: 'Vielleicht, bin unsicher' },
        { value: 'no', label: 'Nein, Bilder reichen' }
      ]
    },
    {
      id: 'budget',
      question: 'Was ist dein monatliches Budget?',
      options: [
        { value: 'low', label: 'Unter 1.000 €' },
        { value: 'medium', label: '1.000 - 2.000 €' },
        { value: 'high', label: 'Über 2.000 €' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateRecommendation();
    }
  };

  const calculateRecommendation = () => {
    // Einfache Logik für Empfehlung
    let result = '';

    if (answers.budget === 'high' && answers.videoImportant === 'yes') {
      result = '🎯 **Scale Plan (1.250 €/Monat)**\n\nPerfekt für dich! Du erhältst eine komplette Rundum-Betreuung mit Website-Refresh, Kampagnen-Setup, Content-Produktion und laufender Optimierung. Ideal für nachhaltiges Wachstum.';
    } else if (answers.selfPost === 'delegate' || answers.budget === 'medium') {
      result = '📱 **Ads & Automation (890 €/Monat)**\n\nDie richtige Wahl! Konzentriere dich auf dein Geschäft, während wir deine Kampagnen managen und optimieren. Inkl. Performance-Tracking und Creative-Refresh.';
    } else if (answers.videoImportant === 'yes') {
      result = '🎬 **Content Kickstart Day (1.800 € einmalig)**\n\nStarte mit professionellem Video-Content! Ein Drehtag vor Ort liefert dir 20+ Assets und 3 Werbevideos. Perfekt für einen starken Content-Start.';
    } else {
      result = '✨ **Content Lite (690 €/Monat)**\n\nDer perfekte Einstieg! Erhalte monatlich 4 Social-Assets mit Themenplanung, Upload und Performance-Tracking. Ideal für den Start in die Social-Media-Welt.';
    }

    setRecommendation(result);
  };

  const reset = () => {
    setStep(0);
    setAnswers({
      hasSocialMedia: '',
      selfPost: '',
      videoImportant: '',
      budget: ''
    });
    setRecommendation('');
  };

  if (recommendation) {
    return (
      <div className="space-y-4">
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <h4 className="font-bold text-sm mb-3">Unsere Empfehlung für dich:</h4>
          <div className="text-sm whitespace-pre-line leading-relaxed">
            {recommendation}
          </div>
        </div>
        <Button onClick={reset} variant="outline" className="w-full">
          <RotateCcw className="w-4 h-4 mr-2" />
          Neu starten
        </Button>
        <Button 
          className="w-full btn-hero"
          onClick={() => {
            const contact = document.getElementById('contact');
            contact?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Jetzt beraten lassen
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[step];
  const currentAnswer = answers[currentQuestion.id as keyof typeof answers];

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Frage {step + 1} von {questions.length}</span>
          <span>{Math.round(((step) / questions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-1.5">
          <div 
            className="bg-primary h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((step) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-sm">{currentQuestion.question}</h4>
        
        <RadioGroup value={currentAnswer} onValueChange={(value) => handleAnswer(currentQuestion.id, value)}>
          <div className="space-y-2">
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label 
                  htmlFor={option.value} 
                  className="cursor-pointer text-sm font-normal flex-1"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      <Button 
        onClick={handleNext}
        disabled={!currentAnswer}
        className="w-full btn-hero"
      >
        {step < questions.length - 1 ? 'Weiter' : 'Empfehlung zeigen'}
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default PackageFinder;
