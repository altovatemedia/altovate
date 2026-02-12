import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import NewNavigation from '@/components/sections/NewNavigation';
import VisualBreadcrumb from '@/components/VisualBreadcrumb';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { CookieBannerWrapper } from '@/components/CookieBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle2, Clock, Target, TrendingUp } from 'lucide-react';

const Erstkontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    instagram: '',
    website: '',
    problem: '',
    description: '',
    privacy: false
  });

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / scrollTotal) * 100;
      const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
      if (progressBar) {
        progressBar.style.width = `${scrollProgress}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('erstkontakt-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.company || !formData.email || !formData.problem || !formData.description || !formData.privacy) {
      toast({
        title: "Fehlende Angaben",
        description: "Bitte fülle alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'erstkontakt',
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone || 'Nicht angegeben',
          instagram: formData.instagram || 'Nicht angegeben',
          website: formData.website || 'Nicht angegeben',
          problem: formData.problem,
          description: formData.description
        }
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Anfrage gesendet!",
        description: "Danke! Wir melden uns in Kürze mit passenden Terminvorschlägen.",
      });

      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        instagram: '',
        website: '',
        problem: '',
        description: '',
        privacy: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Fehler",
        description: "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background"
      >
        <Helmet>
          <title>Erstgespräch anfragen | altovate</title>
          <meta name="description" content="Bereit für systematische Kundengewinnung? Fordere jetzt dein persönliches Erstgespräch mit Alex an und erhalte individuelle Terminvorschläge." />
          <link rel="canonical" href="https://altovate.de/erstkontakt" />
          <meta property="og:title" content="Erstgespräch anfragen | altovate" />
          <meta property="og:description" content="Fordere jetzt dein persönliches Erstgespräch mit Alex an." />
          <meta property="og:url" content="https://altovate.de/erstkontakt" />
          <meta property="og:type" content="website" />
        </Helmet>

        <div className="scroll-progress" style={{ width: '0%' }}></div>
        
        <NewNavigation />
        <VisualBreadcrumb items={[{ label: "Erstkontakt" }]} />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
          <div className="container max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Erstgespräch anfragen
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Wenn du bereit bist, an deinem System zu arbeiten, kannst du hier dein Erstgespräch mit mir anfragen. Nach deiner Anfrage prüfe ich dein Unternehmen und melde mich persönlich mit passenden Terminvorschlägen.
              </p>
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="text-lg px-8 py-6"
              >
                Erstgespräch anfragen
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Warum kein Kalender Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Warum ohne Kalender?
              </h2>
              <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Kein 08/15-Termin</h3>
                      <p className="text-muted-foreground">
                        Das Erstgespräch ist keine automatische Kalenderbuchung. Jedes Gespräch wird individuell vorbereitet, um maximalen Mehrwert zu bieten.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Persönliche Vorbereitung</h3>
                      <p className="text-muted-foreground">
                        Alex prüft vorab deine Website, Social Media Präsenz und identifiziert mögliche Engpässe. So können wir direkt in die Tiefe gehen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Maximaler Nutzen</h3>
                      <p className="text-muted-foreground">
                        Erst eine Anfrage, dann eine persönliche Rückmeldung mit 2–3 individuellen Terminvorschlägen. Kein Zeitverlust für beide Seiten, dafür maximaler Nutzen im Gespräch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* REP Method Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Worüber sprechen wir im Erstgespräch?
              </h2>
              <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
                <div className="space-y-4 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Das Gespräch basiert auf der <strong>REP™-Methode</strong> – unserer eigenen Methode zur systematischen Kundengewinnung. Sie sorgt für <strong>Relevanz, Effizienz und Planbarkeit</strong> in deinem Marketing.
                  </p>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Im Erstgespräch finden wir gemeinsam heraus, ob dein Unternehmen für dieses System geeignet ist und wie wir dir konkret helfen können. Keine langwierigen Präsentationen – sondern direkter Austausch auf Augenhöhe.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section id="erstkontakt-form" className="py-16 md:py-24 px-4">
          <div className="container max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Jetzt Erstgespräch anfragen
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                Fülle das Formular aus und erhalte individuelle Terminvorschläge von Alex persönlich.
              </p>

              {isSuccess ? (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Vielen Dank für deine Anfrage!</h3>
                  <p className="text-muted-foreground">
                    Ich werde deine Angaben prüfen und melde mich in Kürze persönlich mit passenden Terminvorschlägen bei dir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Vorname *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nachname *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Unternehmen / Projektname *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail-Adresse *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefonnummer (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="instagram">Instagram Account (optional)</Label>
                      <Input
                        id="instagram"
                        value={formData.instagram}
                        onChange={(e) => handleChange('instagram', e.target.value)}
                        placeholder="@deinaccount"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website (optional)</Label>
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleChange('website', e.target.value)}
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="problem">Aktuell größtes Problem *</Label>
                    <Select onValueChange={(value) => handleChange('problem', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kunden">Kunden</SelectItem>
                        <SelectItem value="recruiting">Recruiting</SelectItem>
                        <SelectItem value="umsatz">Umsatz</SelectItem>
                        <SelectItem value="sichtbarkeit">Sichtbarkeit</SelectItem>
                        <SelectItem value="sonstiges">Sonstiges</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Kurze Beschreibung deiner Situation *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      rows={5}
                      placeholder="Beschreibe kurz deine aktuelle Herausforderung und was du erreichen möchtest..."
                      required
                    />
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                    <p>
                      Nach dem Absenden prüfe ich deine Angaben und melde mich persönlich mit passenden Terminvorschlägen. Keine automatischen Kalenderbuchungen.
                    </p>
                  </div>

                  {/* Datenschutz-Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="mt-1"
                      id="privacy"
                      checked={formData.privacy}
                      onChange={(e) => handleChange('privacy', e.target.checked)}
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                      <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> zu. *
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
                  </Button>

                  {/* Trust Element */}
                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24"><defs><linearGradient id={`ek-star-${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFEB3B"/><stop offset="50%" stopColor="#FFC107"/><stop offset="100%" stopColor="#F57C00"/></linearGradient></defs><path fill={`url(#ek-star-${i})`} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">5.0 bei Google · 9 Bewertungen</span>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Bereit für dein Erstgespräch?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fordere jetzt dein persönliches Gespräch an und erhalte individuelle Terminvorschläge.
              </p>
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="text-lg px-8 py-6"
              >
                Erstgespräch anfragen
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
        <ChatBot />
        <CookieBannerWrapper />
      </motion.div>
    </AnimatePresence>
  );
};

export default Erstkontakt;
