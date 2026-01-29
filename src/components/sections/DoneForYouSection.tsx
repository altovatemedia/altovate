import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Crown, ArrowRight, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const DoneForYouSection = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Strategische Gesamtarchitektur (Lead, Sales, Delivery)",
    "Angebots- & Funnel-Logik",
    "Content- & Kampagnenkonzeption",
    "Koordination von Design, Video, Copy & Ads",
    "Technischer Aufbau (Tracking, Automationen, Tools)",
    "Ausspielung & laufende Optimierung",
    "Analyse, Reporting & Entscheidungsgrundlagen"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !consent) return;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'waitlist',
          email: email.trim(),
          message: 'Warteliste für Done for You Modell',
        },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success('Du bist auf der Warteliste!');
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      toast.error('Fehler beim Eintragen. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Crown className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Done for You
            </h2>
            <p className="text-xl text-primary font-medium mb-6">
              Marketing als vollständiges System
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Die komplette Verantwortung liegt bei uns.
            </p>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Dieses Modell richtet sich an Unternehmen, die Marketing nicht intern steuern
              oder auf mehrere Schultern verteilen wollen.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Wir übernehmen den gesamten Prozess:
              von der strategischen Idee über die Umsetzung bis zur laufenden Auswertung.
            </p>
          </div>

          {/* Services Grid */}
          <div className="bg-background rounded-2xl border border-border p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status & Waitlist */}
          <div className="text-center">
            <div className="inline-block bg-primary/10 rounded-full px-6 py-3 mb-6">
              <span className="text-foreground font-medium">Limitiert auf wenige Spots</span>
            </div>
            <p className="text-muted-foreground text-sm mb-8">
              Trag dich ein und erfahre vorab, wenn wieder ein Platz frei wird.
            </p>

            {/* Email Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-2 mb-4">
                  <Input
                    type="email"
                    placeholder="Deine E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    disabled={isSubmitting}
                    maxLength={255}
                  />
                  <Button 
                    type="submit" 
                    disabled={!email.trim() || !consent || isSubmitting}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <div className="flex items-start gap-2 justify-center">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked === true)}
                    disabled={isSubmitting}
                  />
                  <label 
                    htmlFor="consent" 
                    className="text-xs text-muted-foreground text-left cursor-pointer"
                  >
                    Ich bin damit einverstanden, per E-Mail kontaktiert zu werden. 
                    Mehr dazu in der{' '}
                    <Link to="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </Link>.
                  </label>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto bg-primary/10 rounded-xl p-6">
                <Check className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-foreground font-medium">Du bist auf der Liste!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Ich melde mich, sobald ein Platz frei wird.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoneForYouSection;
