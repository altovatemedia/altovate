import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronRight, RotateCcw } from 'lucide-react';

const PackageFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    hasSocialMedia: '',
    postFrequency: '',
    selfPost: '',
    hasContent: '',
    videoImportant: ''
  });
  const [recommendation, setRecommendation] = useState('');

  const questions = [
    {
      id: 'hasSocialMedia',
      question: 'Hast du bereits einen Social-Media-Kanal?',
      options: [
        { value: 'yes', label: 'Ja, aber noch nicht optimiert' },
        { value: 'sometimes', label: 'Ja, aber unregelmäßig aktiv' },
        { value: 'no', label: 'Nein, möchte starten' }
      ]
    },
    {
      id: 'postFrequency',
      question: 'Wie viel möchtest du posten?',
      options: [
        { value: 'low', label: '1-2x pro Woche reicht mir' },
        { value: 'medium', label: '3-5x pro Woche wäre ideal' },
        { value: 'high', label: 'Täglich oder mehrmals täglich' }
      ]
    },
    {
      id: 'selfPost',
      question: 'Möchtest du selbst posten oder alles abgeben?',
      options: [
        { value: 'self', label: 'Selbst posten mit Vorlagen' },
        { value: 'delegate', label: 'Komplett abgeben' },
        { value: 'mix', label: 'Teils selbst, teils abgeben' }
      ]
    },
    {
      id: 'hasContent',
      question: 'Hast du bereits bestehende Inhalte?',
      options: [
        { value: 'yes', label: 'Ja, Fotos/Videos vorhanden' },
        { value: 'some', label: 'Teilweise, brauche mehr' },
        { value: 'no', label: 'Nein, brauche neue Drehs' }
      ]
    },
    {
      id: 'videoImportant',
      question: 'Wie wichtig ist Video-Content für dich?',
      options: [
        { value: 'yes', label: 'Sehr wichtig, will Reels nutzen' },
        { value: 'maybe', label: 'Bin offen dafür' },
        { value: 'no', label: 'Erstmal nur Bilder & Text' }
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
    let result = '';
    let additionalInfo = '';

    // Komplexere Logik basierend auf allen Antworten
    if (answers.selfPost === 'delegate' && answers.postFrequency === 'high') {
      result = '🎯 **Scale Plan (1.250 €/Monat)**\n\nPerfekt für dich! Du erhältst eine komplette Rundum-Betreuung mit Kampagnen-Setup, Content-Produktion und laufender Optimierung.';
    } else if (answers.hasContent === 'no' && answers.videoImportant === 'yes') {
      result = '🎬 **Content Kickstart Day (1.800 € einmalig)**\n\nDu bist am Anfang und brauchst professionellen Content. Ein Drehtag liefert dir 20+ Assets und 3 Werbevideos.';
      additionalInfo = '\n\n💡 **Tipp:** Kombiniere mit Content Lite (690 €/Monat) für laufende Betreuung!';
    } else if (answers.selfPost === 'delegate' || answers.postFrequency === 'medium') {
      result = '📱 **Ads & Automation (890 €/Monat)**\n\nDie richtige Wahl! Konzentriere dich auf dein Geschäft, während wir deine Kampagnen managen.';
    } else if (answers.hasSocialMedia === 'no' || answers.selfPost === 'self') {
      result = '✨ **Content Lite (690 €/Monat)**\n\nDer perfekte Einstieg! Erhalte monatlich 4 Social-Assets mit Themenplanung und Upload.';
      if (answers.hasContent === 'no') {
        additionalInfo = '\n\n💡 **Optional:** Content Kickstart Day für sofort verwertbare Assets!';
      }
    } else {
      result = '📱 **Social Media Starter (2.400 € einmalig)**\n\nProfil-Optimierung, Content-Strategie und 10 fertige Templates für deinen perfekten Start!';
    }

    setRecommendation(result + additionalInfo);
  };

  const reset = () => {
    setStep(0);
    setAnswers({
      hasSocialMedia: '',
      postFrequency: '',
      selfPost: '',
      hasContent: '',
      videoImportant: ''
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
