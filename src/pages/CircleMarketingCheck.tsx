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
  options: string[];
  type?: 'input';
  placeholder?: string;
}

const steps: Step[] = [
  {
    question: 'Was beschreibt dein Unternehmen am besten?',
    options: ['Dienstleistung', 'Handwerk', 'Fitness / Gesundheit', 'lokales Unternehmen', 'anderes'],
  },
  {
    question: 'Wie gewinnst du aktuell neue Kunden?',
    options: ['Empfehlungen', 'Social Media', 'Google / Website', 'Werbung', 'nicht planbar'],
  },
  {
    question: 'Wie aktiv nutzt du Social Media aktuell?',
    options: ['gar nicht', 'gelegentlich', 'regelmäßig', 'regelmäßig mit Werbung'],
  },
  {
    question: 'Was ist aktuell deine größte Herausforderung im Marketing?',
    options: [
      'zu wenig Sichtbarkeit',
      'zu wenig Kundenanfragen',
      'Social Media kostet zu viel Zeit',
      'Werbung funktioniert nicht',
      'Marketing ist nicht strukturiert',
    ],
  },
  {
    question: 'Website oder Social Media Profil',
    type: 'input',
    placeholder: 'Website oder Instagram Profil eintragen',
    options: [],
  },
];

type Phase = 'hero' | 'check' | 'result' | 'form' | 'done';

const CircleMarketingCheck = () => {
  const [phase, setPhase] = useState<Phase>('hero');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  const progress = ((step + 1) / steps.length) * 100;

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setPhase('result');
    }
  };

  const handleInputSubmit = () => {
    if (!inputValue.trim()) {
      toast.error('Bitte trage deine Website oder dein Profil ein.');
      return;
    }
    const newAnswers = [...answers, inputValue.trim()];
    setAnswers(newAnswers);
    setPhase('result');
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
          website: answers[4] || '',
          message: [
            `Unternehmenstyp: ${answers[0] || '-'}`,
            `Kundengewinnung: ${answers[1] || '-'}`,
            `Social Media Aktivität: ${answers[2] || '-'}`,
            `Größte Herausforderung: ${answers[3] || '-'}`,
            `Website/Profil: ${answers[4] || '-'}`,
          ].join('\n'),
        },
      });
      if (error) throw error;

      // Fire conversion event
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
      {/* Minimal header */}
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
                  Du bist selbstständig oder führst ein Unternehmen und bist Mitglied bei Circle?
                  <br /><br />
                  Dann kannst du exklusiv diesen Marketing-Check nutzen.
                  <br /><br />
                  In wenigen Schritten analysieren wir deinen aktuellen Marketing-Auftritt und zeigen dir, wo Potenzial für mehr Kundenanfragen liegt.
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

                {steps[step].type === 'input' ? (
                  <div className="space-y-4">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={steps[step].placeholder}
                      className="py-6 text-base"
                      maxLength={200}
                      onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit()}
                    />
                    <Button
                      size="lg"
                      className="w-full py-6 text-lg font-semibold btn-hero"
                      onClick={handleInputSubmit}
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

            {/* RESULT */}
            {phase === 'result' && (
              <motion.div key="result" {...fadeVariants} transition={{ duration: 0.4 }} className="text-center space-y-6">
                <div className="flex justify-center">
                  <CheckCircle className="w-16 h-16 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Dein Marketing hat Potenzial.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Basierend auf deinen Antworten schauen wir uns deinen Marketing-Auftritt kurz genauer an und geben dir eine ehrliche Einschätzung.
                </p>
                <div className="text-left space-y-3 liquid-glass rounded-2xl p-6">
                  <p className="font-semibold text-foreground mb-3">Du erhältst:</p>
                  {[
                    'kurze Analyse deiner aktuellen Situation',
                    'konkrete Handlungsempfehlungen',
                    'Einschätzung der größten Wachstumshebel',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="w-full py-6 text-lg font-semibold btn-hero"
                  onClick={() => setPhase('form')}
                >
                  Analyse anfragen <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            )}

            {/* FORM */}
            {phase === 'form' && (
              <motion.div key="form" {...fadeVariants} transition={{ duration: 0.4 }} className="space-y-6">
                <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                  <p>Jede Anfrage wird persönlich von mir geprüft.</p>
                  <p>Wenn ich der Meinung bin, dass ich dir nicht helfen kann, sage ich das offen.</p>
                </div>
                <form onSubmit={handleFormSubmit} className="liquid-glass rounded-2xl p-6 space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleFormChange} placeholder="Dein Name" required maxLength={100} className="py-5" />
                  </div>
                  <div>
                    <Label htmlFor="company">Unternehmen</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleFormChange} placeholder="Firmenname" maxLength={100} className="py-5" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleFormChange} placeholder="deine@email.de" required maxLength={255} className="py-5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon (optional)</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleFormChange} placeholder="+49..." maxLength={30} className="py-5" />
                  </div>
                  <Button type="submit" size="lg" className="w-full py-6 text-lg font-semibold btn-hero" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Wird gesendet...</>
                    ) : (
                      <>Analyse anfragen <ArrowRight className="ml-2 w-5 h-5" /></>
                    )}
                  </Button>
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
                  Anfrage erhalten!
                </h2>
                <p className="text-muted-foreground text-lg">
                  Wir melden uns innerhalb von 24 Stunden bei dir.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="py-4 px-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Altovate · <a href="/datenschutz" className="underline hover:text-foreground">Datenschutz</a> · <a href="/impressum" className="underline hover:text-foreground">Impressum</a>
      </footer>
    </div>
  );
};

export default CircleMarketingCheck;
