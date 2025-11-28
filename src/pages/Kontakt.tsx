import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NewNavigation from "@/components/sections/NewNavigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { CookieBanner } from "@/components/CookieBanner";
import { Phone, Mail, Globe, MapPin, Download, Instagram, Linkedin } from "lucide-react";
import alexanderPortrait from "@/assets/alexander-portrait-circle.png";
import { QRCodeSVG } from "qrcode.react";

const Kontakt = () => {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Buchmann;Alex;;;
FN:Alex Buchmann
ORG:altovate GmbH
TEL;CELL:+49 1520 8922097
EMAIL:alex@altovate.de
URL:https://www.altovate.de
URL;type=linkedin:https://www.linkedin.com/in/alexander-buchmann
URL;type=instagram:https://www.instagram.com/altovate.de
URL;type=instagram:https://www.instagram.com/iamalexbuchmann
ADR;WORK:;;Max-Planck-Straße 6;Saarburg;;54439;Germany
END:VCARD`;

  const handleDownloadVCard = async () => {
    try {
      // Lade das Bild und konvertiere es zu Base64
      const response = await fetch(alexanderPortrait);
      const blob = await response.blob();
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const base64data = reader.result as string;
        const base64Image = base64data.split(',')[1]; // Entferne Data-URL-Prefix
        
        const vCardContent = `BEGIN:VCARD
VERSION:3.0
N:Buchmann;Alex;;;
FN:Alex Buchmann
ORG:altovate GmbH
TEL;CELL:+49 1520 8922097
EMAIL:alex@altovate.de
URL:https://www.altovate.de
URL;type=linkedin:https://www.linkedin.com/in/alexander-buchmann
URL;type=instagram:https://www.instagram.com/altovate.de
URL;type=instagram:https://www.instagram.com/iamalexbuchmann
ADR;WORK:;;Max-Planck-Straße 6;Saarburg;;54439;Germany
PHOTO;ENCODING=b;TYPE=PNG:${base64Image}
END:VCARD`;

        const vCardBlob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8' });
        const url = window.URL.createObjectURL(vCardBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Alex-Buchmann-Kontakt.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      };
      
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error('Fehler beim Erstellen der vCard:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NewNavigation />
      <CookieBanner />
      <ChatBot />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Kontakt
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Lass uns über dein Projekt sprechen. Ich freue mich auf deine Nachricht.
          </p>
        </div>
      </section>

      {/* Contact Card */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Name & Company */}
                <div className="text-center pb-6 border-b border-border/50">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4 overflow-hidden">
                    <img 
                      src={alexanderPortrait} 
                      alt="Alex Buchmann" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Alex Buchmann
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    altovate GmbH
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <a 
                    href="tel:+4915208922097"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefon</p>
                      <p className="text-lg font-medium text-foreground">+49 1520 8922097</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:alex@altovate.de"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-Mail</p>
                      <p className="text-lg font-medium text-foreground">alex@altovate.de</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.altovate.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      <p className="text-lg font-medium text-foreground">www.altovate.de</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/alexander-buchmann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="text-lg font-medium text-foreground">Alexander Buchmann</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/altovate.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Instagram (Unternehmen)</p>
                      <p className="text-lg font-medium text-foreground">@altovate.de</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/iamalexbuchmann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Instagram (Persönlich)</p>
                      <p className="text-lg font-medium text-foreground">@iamalexbuchmann</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Adresse</p>
                      <p className="text-lg font-medium text-foreground">Max-Planck-Straße 6</p>
                      <p className="text-lg font-medium text-foreground">54439 Saarburg, Germany</p>
                    </div>
                  </div>
                </div>

                {/* QR Code Section */}
                <div className="pt-6 border-t border-border/50">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      QR-Code scannen
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Scanne den QR-Code mit deinem Smartphone
                    </p>
                    <div className="inline-flex items-center justify-center p-4 bg-white rounded-lg">
                      <QRCodeSVG 
                        value={vCardData}
                        size={200}
                        level="H"
                        includeMargin={true}
                      />
                    </div>
                  </div>
                  
                  {/* Download vCard Button */}
                  <Button 
                    onClick={handleDownloadVCard}
                    className="w-full"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Kontakt als vCard speichern
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Oder speichere den Kontakt direkt in deinem Adressbuch
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
