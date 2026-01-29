import { useState } from 'react';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  offerType?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  website: string;
  instagram: string;
  problem: string;
  goals: string;
}

const BookingModal = ({ isOpen, onClose, offerType = "Strategie-Session" }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    instagram: '',
    problem: '',
    goals: '',
  });

  const totalSteps = 3;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.firstName.trim() && formData.lastName.trim() && formData.email.trim();
      case 2:
        return true; // Optional fields
      case 3:
        return formData.problem.trim();
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'booking',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          website: formData.website,
          instagram: formData.instagram,
          problem: formData.problem,
          message: `Angefragtes Angebot: ${offerType}\n\nZiele: ${formData.goals}\n\nGrößte Herausforderung: ${formData.problem}`,
        },
      });

      if (error) throw error;

      toast.success('Anfrage erfolgreich gesendet! Ich melde mich zeitnah bei dir.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        website: '',
        instagram: '',
        problem: '',
        goals: '',
      });
      setStep(1);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Fehler beim Senden. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {offerType}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Schritt {step} von {totalSteps}
          </p>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-1.5 mb-6">
          <div 
            className="bg-primary h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Step 1: Contact Details */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-muted-foreground mb-4">
              Damit ich mich vorbereiten kann, brauche ich ein paar Infos von dir.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Vorname *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Max"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nachname *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Mustermann"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-Mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="max@unternehmen.de"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+49 123 456789"
              />
            </div>
          </div>
        )}

        {/* Step 2: Business Details */}
        {step === 2 && (
          <div className="space-y-4">
            <p className="text-muted-foreground mb-4">
              Erzähl mir etwas über dein Unternehmen.
            </p>

            <div className="space-y-2">
              <Label htmlFor="company">Unternehmen</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Firmenname GmbH"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://deine-website.de"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input
                id="instagram"
                value={formData.instagram}
                onChange={(e) => handleInputChange('instagram', e.target.value)}
                placeholder="@deinprofil"
              />
            </div>
          </div>
        )}

        {/* Step 3: Goals & Problems */}
        {step === 3 && (
          <div className="space-y-4">
            <p className="text-muted-foreground mb-4">
              Was ist aktuell deine größte Herausforderung im Marketing?
            </p>

            <div className="space-y-2">
              <Label htmlFor="problem">Größte Herausforderung *</Label>
              <Textarea
                id="problem"
                value={formData.problem}
                onChange={(e) => handleInputChange('problem', e.target.value)}
                placeholder="Beschreibe kurz, was aktuell nicht funktioniert oder wo du nicht weiterkommst..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">Was möchtest du erreichen?</Label>
              <Textarea
                id="goals"
                value={formData.goals}
                onChange={(e) => handleInputChange('goals', e.target.value)}
                placeholder="Was wäre für dich ein gutes Ergebnis aus unserer Zusammenarbeit?"
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 pt-4 border-t">
          {step > 1 ? (
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={isSubmitting}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="bg-primary hover:bg-primary/90"
            >
              Weiter
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  Anfrage senden
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
