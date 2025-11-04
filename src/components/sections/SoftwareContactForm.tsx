import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name darf maximal 100 Zeichen lang sein"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail darf maximal 255 Zeichen lang sein"),
  phone: z.string().trim().max(30, "Telefonnummer darf maximal 30 Zeichen lang sein").optional(),
  company: z.string().trim().max(100, "Firmenname darf maximal 100 Zeichen lang sein").optional(),
  projectType: z.string().min(1, "Bitte wähle eine Projektkategorie"),
  message: z.string().trim().min(10, "Bitte beschreibe dein Projekt (mind. 10 Zeichen)").max(2000, "Nachricht darf maximal 2000 Zeichen lang sein"),
  privacy: z.boolean().refine(val => val === true, "Datenschutzerklärung muss akzeptiert werden")
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
  privacy: boolean;
}

const SoftwareContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
    privacy: false
  });

  const projectTypes = [
    "Individueller Rechner / Kalkulator",
    "Web-App / Dashboard",
    "KI-Integration / Automatisierung",
    "Zeiterfassung / Projekt-Tool",
    "Kundenportal / Plattform",
    "Sonstiges / Noch unklar"
  ];

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      setIsSubmitting(true);

      // Send via Supabase Edge Function
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'software-project',
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || '',
          company: validatedData.company || '',
          projectType: validatedData.projectType,
          message: validatedData.message
        }
      });

      if (error) {
        console.error('Error sending email:', error);
        throw error;
      }

      toast({
        title: "Anfrage gesendet! 🚀",
        description: "Wir melden uns innerhalb von 24 Stunden bei dir."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
        privacy: false
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Validierungsfehler",
          description: firstError.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Fehler beim Senden",
          description: "Bitte versuche es erneut oder kontaktiere uns direkt per E-Mail.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name *</label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Dein Name"
            required
            maxLength={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">E-Mail *</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="deine@email.de"
            required
            maxLength={255}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Telefon</label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="Optional"
            maxLength={30}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Firma / Unternehmen</label>
          <Input
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Optional"
            maxLength={100}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Projektkategorie *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleChange('projectType', type)}
              className={`p-3 text-sm rounded-lg border-2 transition-all ${
                formData.projectType === type
                  ? 'border-[#ff1c5c] bg-[#ff1c5c]/10 text-[#ff1c5c] font-medium'
                  : 'border-border hover:border-[#ff1c5c]/50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Projektbeschreibung *</label>
        <Textarea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Beschreibe kurz dein Projekt: Was möchtest du umsetzen? Welches Problem soll gelöst werden?"
          rows={6}
          required
          maxLength={2000}
          className="resize-none"
        />
        <p className="text-xs text-muted-foreground mt-1">
          {formData.message.length} / 2000 Zeichen
        </p>
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="privacy"
          checked={formData.privacy}
          onChange={(e) => handleChange('privacy', e.target.checked)}
          className="mt-1"
          required
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          Ich habe die{' '}
          <a href="/datenschutz" target="_blank" className="text-[#ff1c5c] hover:underline">
            Datenschutzerklärung
          </a>{' '}
          zur Kenntnis genommen. *
        </label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#ff1c5c] hover:bg-[#ff3d75] text-white"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          'Anfrage senden'
        )}
      </Button>
    </form>
  );
};

export default SoftwareContactForm;
