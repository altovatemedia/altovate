import { Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
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
              Lassen Sie uns bei einem kostenlosen Erstgespräch über Ihre 
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
                  <h3 className="font-semibold">kontakt@altovate.de</h3>
                  <p className="text-muted-foreground">Antwort innerhalb von 24h garantiert</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">+49 (0) 123 456 789</h3>
                  <p className="text-muted-foreground">Mo-Fr 9:00-18:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">München, Deutschland</h3>
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
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Vorname</label>
                  <Input placeholder="Ihr Vorname" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nachname</label>
                  <Input placeholder="Ihr Nachname" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-Mail</label>
                <Input type="email" placeholder="ihre@email.de" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Unternehmen</label>
                <Input placeholder="Ihr Unternehmen" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telefon (optional)</label>
                <Input type="tel" placeholder="+49 123 456 789" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nachricht</label>
                <Textarea 
                  placeholder="Erzählen Sie uns von Ihrem Projekt oder Ihren Herausforderungen..."
                  rows={5}
                />
              </div>

              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" id="privacy" />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                  <a href="#" className="text-accent hover:underline">Datenschutzerklärung</a> zu.
                </label>
              </div>

              <Button className="btn-hero w-full group">
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