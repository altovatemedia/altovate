import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface FunnelData {
  goal: string;
  challenge: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  privacy: boolean;
}

const ContactFunnel = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<FunnelData>({
    goal: '',
    challenge: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    privacy: false
  });

  const totalSteps = 5;

  const handleOptionSelect = (field: keyof FunnelData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
    // Auto advance after selection (except for final step)
    if (currentStep < 4) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = () => {
    if (!data.name || !data.email) {
      toast({
        title: "Pflichtfelder ausfüllen",
        description: "Bitte Name und E-Mail eingeben.",
        variant: "destructive"
      });
      return;
    }

    if (!data.privacy) {
      toast({
        title: "Datenschutz erforderlich",
        description: "Bitte stimmen Sie der Datenschutzerklärung zu.",
        variant: "destructive"
      });
      return;
    }

    // Create email content
    const subject = `Kontaktanfrage von ${data.name}`;
    const body = `
Neue Kontaktanfrage über den Funnel:

Name: ${data.name}
E-Mail: ${data.email}
Telefon: ${data.phone || 'Nicht angegeben'}

Antworten aus dem Funnel:
- Hauptziel: ${data.goal}
- Größte Herausforderung: ${data.challenge}
- Marketing-Budget: ${data.budget}
- Start-Zeitpunkt: ${data.timeline}

---
Diese Nachricht wurde über den Kontakt-Funnel auf altovate.de gesendet.
    `;

    const mailtoLink = `mailto:info@altovate.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Perfekt! 🚀",
      description: "Wir melden uns innerhalb von 24h bei dir.",
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Was ist dein Hauptziel?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Wähle aus, womit wir dir am besten helfen können
            </p>
            
            <div className="space-y-4">
              {[
                { value: 'mehr-kunden', label: 'Mehr Kunden gewinnen' },
                { value: 'mehr-bewerber', label: 'Mehr Bewerber finden' },
                { value: 'mehr-sichtbarkeit', label: 'Mehr Sichtbarkeit aufbauen' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect('goal', option.label)}
                  className="w-full p-6 text-left bg-white border border-border rounded-2xl hover:shadow-hover hover:border-primary/20 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-text group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Was ist deine größte Herausforderung aktuell?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Damit wir gezielt helfen können
            </p>
            
            <div className="space-y-4">
              {[
                { value: 'keine-bewerbungen', label: 'Keine Bewerbungen' },
                { value: 'wenig-kundenanfragen', label: 'Zu wenig Kundenanfragen' },
                { value: 'keine-zeit', label: 'Keine Zeit fürs Marketing' },
                { value: 'andere', label: 'Andere' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect('challenge', option.label)}
                  className="w-full p-6 text-left bg-white border border-border rounded-2xl hover:shadow-hover hover:border-primary/20 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-text group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>

            {data.challenge === 'Andere' && (
              <div className="mt-6">
                <Textarea
                  placeholder="Beschreibe deine Herausforderung..."
                  className="w-full"
                  rows={3}
                />
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Wie viel Budget setzt du bisher monatlich für Marketing ein?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Hilft uns, passende Lösungen vorzuschlagen
            </p>
            
            <div className="space-y-4">
              {[
                { value: 'unter-500', label: 'Unter 500 €' },
                { value: '500-2000', label: '500 – 2.000 €' },
                { value: 'ueber-2000', label: 'Über 2.000 €' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect('budget', option.label)}
                  className="w-full p-6 text-left bg-white border border-border rounded-2xl hover:shadow-hover hover:border-primary/20 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-text group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Wann willst du starten?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Je nach Zeitpunkt können wir verschiedene Optionen anbieten
            </p>
            
            <div className="space-y-4">
              {[
                { value: 'sofort', label: 'Sofort' },
                { value: '1-3-monate', label: 'In 1–3 Monaten' },
                { value: 'spaeter', label: 'Später (interessiert, aber noch nicht bereit)' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect('timeline', option.label)}
                  className="w-full p-6 text-left bg-white border border-border rounded-2xl hover:shadow-hover hover:border-primary/20 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-text group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="animate-slide-in-right">
            <div className="text-center mb-8">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Fast geschafft 🚀
              </h2>
              <p className="text-lg text-text-muted">
                Nur noch deine Kontaktdaten und wir melden uns bei dir
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text mb-2">Name *</label>
                <Input 
                  name="name"
                  value={data.name}
                  onChange={handleInputChange}
                  placeholder="Dein Name" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">E-Mail *</label>
                <Input 
                  type="email" 
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  placeholder="deine@email.de" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">Telefonnummer (optional)</label>
                <Input 
                  type="tel" 
                  name="phone"
                  value={data.phone}
                  onChange={handleInputChange}
                  placeholder="+49 123 456 789" 
                />
              </div>

              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  className="mt-1" 
                  id="privacy" 
                  name="privacy"
                  checked={data.privacy}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="privacy" className="text-sm text-text-muted">
                  Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                  <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a> zu. *
                </label>
              </div>

              <Button 
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-4 text-lg font-bold transition-all duration-200 hover:scale-[1.02] group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Kostenloses Erstgespräch buchen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    i + 1 <= currentStep 
                      ? 'bg-primary text-white' 
                      : 'bg-bg-soft text-text-muted'
                  }`}>
                    {i + 1 <= currentStep ? (
                      i + 1 < currentStep ? <CheckCircle2 className="w-5 h-5" /> : i + 1
                    ) : i + 1}
                  </div>
                  {i < totalSteps - 1 && (
                    <div className={`w-12 md:w-20 h-1 mx-2 rounded-full transition-all duration-300 ${
                      i + 1 < currentStep ? 'bg-primary' : 'bg-bg-soft'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-text-muted">
              Schritt {currentStep} von {totalSteps}
            </p>
          </div>

          {/* Card Container */}
          <div className="bg-bg-soft rounded-3xl p-8 md:p-12 shadow-elegant min-h-[500px] flex flex-col justify-center">
            {renderStep()}

            {/* Navigation Buttons */}
            {currentStep > 1 && currentStep < 5 && (
              <div className="flex justify-between mt-12">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="rounded-full px-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück
                </Button>
                
                {currentStep === 4 && data.timeline && (
                  <Button 
                    onClick={() => setCurrentStep(5)}
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
                  >
                    Weiter
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFunnel;