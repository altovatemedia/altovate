import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Calendar, Clock, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const funnelSchema = z.object({
  goal: z.string().min(1, "Bitte wähle ein Hauptziel aus"),
  challenge: z.string().min(1, "Bitte wähle eine Herausforderung aus"),
  budget: z.string().min(1, "Bitte wähle ein Budget aus"),
  timeline: z.string().min(1, "Bitte wähle einen Zeitpunkt aus"),
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name darf maximal 100 Zeichen lang sein"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail darf maximal 255 Zeichen lang sein"),
  phone: z.string().trim().max(30, "Telefonnummer darf maximal 30 Zeichen lang sein").optional(),
  privacy: z.boolean().refine(val => val === true, "Datenschutzerklärung muss akzeptiert werden")
});

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
    // Validate form data with zod schema
    const result = funnelSchema.safeParse(data);
    
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Validierungsfehler",
        description: firstError.message,
        variant: "destructive"
      });
      return;
    }

    // Use validated data
    const validatedData = result.data;

    // Create email content with validated and sanitized data
    const subject = `Kontaktanfrage von ${validatedData.name}`;
    const body = `
Neue Kontaktanfrage über den Funnel:

Name: ${validatedData.name}
E-Mail: ${validatedData.email}
Telefon: ${validatedData.phone || 'Nicht angegeben'}

Antworten aus dem Funnel:
- Hauptziel: ${validatedData.goal}
- Größte Herausforderung: ${validatedData.challenge}
- Marketing-Budget: ${validatedData.budget}
- Start-Zeitpunkt: ${validatedData.timeline}

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
                  maxLength={100}
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
                  maxLength={255}
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
                  maxLength={30}
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
    <section id="contact" className="py-24 bg-bg-soft">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Left: Intro Block */}
          <div className="animate-fade-in-up lg:animate-slide-in-left">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-elegant h-fit">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Bereit für den nächsten Schritt?
              </h2>
              
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Beantworte 4 kurze Fragen und erhalte sofort dein individuelles Ergebnis + Einladung zum kostenlosen Erstgespräch.
              </p>
              
              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Clock, text: 'In <3 Minuten fertig' },
                  { icon: BarChart3, text: 'Sofortiges Ergebnis' },
                  { icon: Users, text: 'Persönliche Empfehlung' }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-text font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Visual Element */}
               <div className="bg-bg-soft rounded-xl p-6 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-text">100 % transparente Kosten – keine versteckten Gebühren</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-text">30 Tage bis zu sichtbaren Ergebnissen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Funnel */}
          <div className="animate-fade-in-up lg:animate-slide-in-right">
            <div className="max-w-[520px] mx-auto">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 max-w-full">
                  {Array.from({ length: totalSteps }, (_, i) => (
                    <div key={i} className="flex items-center flex-shrink-0">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 ${
                        i + 1 <= currentStep 
                          ? 'bg-primary text-white' 
                          : 'bg-white text-text-muted border border-border'
                      }`}>
                        {i + 1 <= currentStep ? (
                          i + 1 < currentStep ? <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> : i + 1
                        ) : i + 1}
                      </div>
                      {i < totalSteps - 1 && (
                        <div className={`w-4 md:w-8 lg:w-12 h-1 mx-1 md:mx-2 rounded-full transition-all duration-300 ${
                          i + 1 < currentStep ? 'bg-primary' : 'bg-border'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-text-muted">
                  Schritt {currentStep} von {totalSteps}
                </p>
              </div>

              {/* Funnel Card */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-elegant min-h-[500px] flex flex-col justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default ContactFunnel;