import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Vorname ist erforderlich").max(100, "Vorname darf maximal 100 Zeichen lang sein"),
  lastName: z.string().trim().min(1, "Nachname ist erforderlich").max(100, "Nachname darf maximal 100 Zeichen lang sein"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail darf maximal 255 Zeichen lang sein"),
  company: z.string().trim().max(200, "Unternehmensname darf maximal 200 Zeichen lang sein").optional(),
  phone: z.string().trim().max(30, "Telefonnummer darf maximal 30 Zeichen lang sein").optional(),
  message: z.string().trim().min(1, "Nachricht ist erforderlich").max(2000, "Nachricht darf maximal 2000 Zeichen lang sein"),
  privacy: z.boolean().refine(val => val === true, "Datenschutzerklärung muss akzeptiert werden")
});
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    privacy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with zod schema
    const result = contactSchema.safeParse(formData);
    
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

    try {
      // Send email via edge function
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          email: validatedData.email,
          company: validatedData.company,
          phone: validatedData.phone,
          message: validatedData.message
        }
      });

      if (error) throw error;

      toast({
        title: "Nachricht gesendet! ✓",
        description: "Wir melden uns innerhalb von 24h bei dir.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Fehler",
        description: "Die Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Kontakt
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Bereit für den <span className="neon-text">nächsten Schritt</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Lass uns bei einem kostenlosen Erstgespräch über deine 
              Herausforderungen sprechen und gemeinsam Lösungen entwickeln.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Erstgespräch buchen</h3>
                  <p className="text-muted-foreground">Kostenlose 30-minütige Strategieberatung</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">info@altovate.de</h3>
                  <p className="text-muted-foreground">Antwort innerhalb von 24h garantiert</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">+49 (0) 1520 892 2097</h3>
                  <p className="text-muted-foreground">Mo-Fr 9:00-18:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Saarburg, Deutschland</h3>
                  <p className="text-muted-foreground">Deutschlandweit tätig</p>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-2">Schnellcheck gewünscht?</h3>
              <p className="text-muted-foreground mb-4">
                Kostenlosen Marken-Check in unter 3 Minuten starten.
              </p>
              <Button className="btn-hero group w-full">
                Marken-Check starten
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Nachricht senden</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Vorname</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Dein Vorname" 
                    maxLength={100}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nachname</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Dein Nachname" 
                    maxLength={100}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-Mail</label>
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="deine@email.de" 
                  maxLength={255}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Unternehmen</label>
                <Input 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Dein Unternehmen" 
                  maxLength={200}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telefon (optional)</label>
                <Input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+49 123 456 789" 
                  maxLength={30}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nachricht</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Erzähl uns von deinem Projekt oder deinen Herausforderungen..." 
                  rows={5} 
                  maxLength={2000}
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  className="mt-1" 
                  id="privacy" 
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                  <a href="#" className="text-accent hover:underline">Datenschutzerklärung</a> zu.
                </label>
              </div>

              <Button type="submit" className="btn-hero w-full group">
                Nachricht senden
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;