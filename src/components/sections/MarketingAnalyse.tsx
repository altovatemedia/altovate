import { useState } from 'react';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const MarketingAnalyse = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    social: '',
    industry: '',
    challenge: ''
  });

  const benefits = [
    "Analyse deiner Website oder Social Media Profile",
    "Konkrete Verbesserungsvorschläge",
    "Klare Handlungsempfehlungen"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.company.trim()) {
      toast.error('Bitte fülle mindestens Name und Unternehmen aus.');
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'marketing-analyse',
          firstName: formData.name,
          lastName: '',
          email: '',
          company: formData.company,
          website: formData.website,
          instagram: formData.social,
          message: `Branche: ${formData.industry}\n\nGrößte Herausforderung: ${formData.challenge}`
        }
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast.success('Anfrage gesendet! Wir melden uns innerhalb von 24h.');
    } catch {
      toast.error('Etwas ist schiefgelaufen. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="marketing-analyse" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div>
              <Reveal blur>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Kostenlose Marketing Analyse
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Wir schauen uns dein aktuelles Marketing an und prüfen, wo das größte Potenzial für mehr Kundenanfragen liegt.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Jede Anfrage wird persönlich von mir geprüft.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  Wenn ich der Meinung bin, dass ich dir nicht helfen kann, sage ich das offen.
                </p>
              </Reveal>
              <StaggerContainer className="space-y-3" staggerDelay={0.1}>
                {benefits.map((benefit, index) => (
                  <StaggerItem key={index} direction="left">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right: Form */}
            <Reveal delay={0.25} scale>
              <div className="liquid-glass rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Anfrage erhalten!</h3>
                    <p className="text-muted-foreground">Wir melden uns innerhalb von 24 Stunden bei dir.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Dein Name" required maxLength={100} />
                    </div>
                    <div>
                      <Label htmlFor="company">Unternehmen *</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Firmenname" required maxLength={100} />
                    </div>
                    <div>
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" name="website" value={formData.website} onChange={handleChange} placeholder="https://..." maxLength={200} />
                    </div>
                    <div>
                      <Label htmlFor="social">Instagram oder LinkedIn</Label>
                      <Input id="social" name="social" value={formData.social} onChange={handleChange} placeholder="@profil oder URL" maxLength={200} />
                    </div>
                    <div>
                      <Label htmlFor="industry">Branche</Label>
                      <Input id="industry" name="industry" value={formData.industry} onChange={handleChange} placeholder="z.B. Handwerk, Fitness, Beratung" maxLength={100} />
                    </div>
                    <div>
                      <Label htmlFor="challenge">Größte Herausforderung im Marketing</Label>
                      <Textarea id="challenge" name="challenge" value={formData.challenge} onChange={handleChange} placeholder="Was ist aktuell dein größtes Problem?" rows={3} maxLength={500} />
                    </div>
                    <Button type="submit" size="lg" className="w-full btn-hero py-6" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Wird gesendet...</>
                      ) : (
                        <>Analyse anfordern <ArrowRight className="ml-2 w-5 h-5" /></>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">Unverbindlich. Analyse in 24h.</p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAnalyse;
