import { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

interface Step {
  question: string;
  options?: string[];
  type?: 'input' | 'dual-input';
  placeholders?: string[];
  labels?: string[];
}

const steps: Step[] = [
  {
    question: 'Wie gewinnt ihr aktuell die meisten Kunden?',
    options: ['Empfehlungen', 'Social Media', 'Google / Website', 'Anzeigen (Meta oder Google Ads)', 'nicht planbar'],
  },
  {
    question: 'Wie planbar sind eure Anfragen aktuell?',
    options: ['sehr planbar', 'schwankt stark', 'abhängig von Empfehlungen', 'kaum planbar'],
  },
  {
    question: 'Wie groß ist euer Unternehmen aktuell?',
    options: ['Solo oder Freelancer', '2 bis 5 Mitarbeiter', '6 bis 20 Mitarbeiter', 'über 20 Mitarbeiter'],
  },
  {
    question: 'Was ist aktuell eure größte Herausforderung im Marketing?',
    options: ['mehr Kundenanfragen', 'bessere Sichtbarkeit', 'Social Media funktioniert nicht', 'Marketing kostet zu viel Zeit', 'keine klare Strategie'],
  },
  {
    question: 'Wo können wir euren aktuellen Auftritt sehen?',
    type: 'dual-input',
    labels: ['Website (optional)', 'Social Media Profil (optional)'],
    placeholders: ['www.unternehmen.de', 'instagram.com/deinunternehmen'],
  },
];

type Phase = 'hero' | 'check' | 'form' | 'done';

const CircleMarketingCheck = () => {
  const [phase, setPhase] = useState<Phase>('hero');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [dualInput, setDualInput] = useState({ website: '', social: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const progress = ((step + 1) / steps.length) * 100;

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setPhase('form');
    }
  };

  const handleDualInputSubmit = () => {
    const combined = [dualInput.website, dualInput.social].filter(Boolean).join(' | ') || '-';
    const newAnswers = [...answers, combined];
    setAnswers(newAnswers);
    setPhase('form');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error('Bitte fülle mindestens Name und E-Mail aus.');
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'circle-marketing-check',
          firstName: formData.name,
          lastName: '',
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          website: dualInput.website || '',
          instagram: dualInput.social || '',
          message: [
            `Kundengewinnung: ${answers[0] || '-'}`,
            `Planbarkeit: ${answers[1] || '-'}`,
            `Unternehmensgröße: ${answers[2] || '-'}`,
            `Größte Herausforderung: ${answers[3] || '-'}`,
            `Website: ${dualInput.website || '-'}`,
            `Social Media: ${dualInput.social || '-'}`,
          ].join('\n'),
        },
      });
      if (error) throw error;

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'marketing_check_request', {
          event_category: 'conversion',
          event_label: 'circle_marketing_check',
        });
      }

      setPhase('done');
      toast.success('Anfrage gesendet!');
    } catch {
      toast.error('Etwas ist schiefgelaufen. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="py-4 px-6">
        <img src="/altovate-logo.png" alt="Altovate" className="h-8 brightness-0 invert" />
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait">
            {/* HERO */}
            {phase === 'hero' && (
              <motion.div key="hero" {...fadeVariants} transition={{ duration: 0.4 }} className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Kostenloser Marketing-Check für Unternehmer bei Circle Fitness
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Viele Unternehmen gewinnen ihre Kunden hauptsächlich über Empfehlungen und haben deshalb kaum planbare Anfragen.
                  <br /><br />
                  Mit diesem kurzen Check finden wir heraus, wo aktuell der größte Marketing-Hebel für dein Unternehmen liegt.
                </p>
                <Button
                  size="lg"
                  className="w-full py-6 text-lg font-semibold btn-hero"
                  onClick={() => setPhase('check')}
                >
                  Marketing-Check starten <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-xs text-muted-foreground">Exklusiv für Mitglieder von Circle Fitness.</p>
              </motion.div>
            )}

            {/* CHECK */}
            {phase === 'check' && (
              <motion.div key={`check-${step}`} {...fadeVariants} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Schritt {step + 1} von {steps.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <h2 className="text-xl md:text-2xl font-semibold">
                  {steps[step].question}
                </h2>

                {steps[step].type === 'dual-input' ? (
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">{steps[step].labels?.[0]}</Label>
                      <Input
                        value={dualInput.website}
                        onChange={(e) => setDualInput(prev => ({ ...prev, website: e.target.value }))}
                        placeholder={steps[step].placeholders?.[0]}
                        className="py-6 text-base mt-1"
                        maxLength={200}
                      />
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">{steps[step].labels?.[1]}</Label>
                      <Input
                        value={dualInput.social}
                        onChange={(e) => setDualInput(prev => ({ ...prev, social: e.target.value }))}
                        placeholder={steps[step].placeholders?.[1]}
                        className="py-6 text-base mt-1"
                        maxLength={200}
                      />
                    </div>
                    <Button
                      size="lg"
                      className="w-full py-6 text-lg font-semibold btn-hero"
                      onClick={handleDualInputSubmit}
                    >
                      Weiter <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {steps[step].options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(option)}
                        className="w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all text-foreground font-medium"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* FORM */}
            {phase === 'form' && (
              <motion.div key="form" {...fadeVariants} transition={{ duration: 0.4 }} className="space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Wohin sollen wir deine Einschätzung senden?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ich schaue mir deinen Auftritt kurz an und gebe dir eine ehrliche Einschätzung.
                </p>
                <form onSubmit={handleFormSubmit} className="liquid-glass rounded-2xl p-6 space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleFormChange} placeholder="Dein Name" required maxLength={100} className="py-5" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleFormChange} placeholder="deine@email.de" required maxLength={255} className="py-5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon (optional)</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleFormChange} placeholder="+49..." maxLength={30} className="py-5" />
                  </div>
                  <div>
                    <Label htmlFor="company">Unternehmen oder Branche</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleFormChange} placeholder="Firmenname oder Branche" maxLength={100} className="py-5" />
                  </div>
                  <Button type="submit" size="lg" className="w-full py-6 text-lg font-semibold btn-hero" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Wird gesendet...</>
                    ) : (
                      <>Analyse anfordern <ArrowRight className="ml-2 w-5 h-5" /></>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Jede Anfrage wird persönlich geprüft.<br />
                    Wenn ich der Meinung bin, dass ich nicht helfen kann, sage ich das offen.
                  </p>
                </form>
              </motion.div>
            )}

            {/* DONE */}
            {phase === 'done' && (
              <motion.div key="done" {...fadeVariants} transition={{ duration: 0.4 }} className="text-center space-y-6">
                <div className="flex justify-center">
                  <CheckCircle className="w-16 h-16 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Danke – ich schaue mir deinen Auftritt kurz an.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ich werfe einen kurzen Blick auf deine Website oder dein Social-Media-Profil und melde mich mit einer ehrlichen Einschätzung.
                  <br /><br />
                  Das dauert in der Regel 24 bis 48 Stunden.
                  <br /><br />
                  Wenn wir Potenzial sehen, können wir anschließend kurz besprechen, welche nächsten Schritte sinnvoll sind.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="py-4 px-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Altovate · <a href="/datenschutz" className="underline hover:text-foreground">Datenschutz</a> · <a href="/impressum" className="underline hover:text-foreground">Impressum</a>
      </footer>
    </div>
  );
};

export default CircleMarketingCheck;
