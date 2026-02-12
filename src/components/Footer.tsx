import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import bniBadge from '@/assets/bni-badge.png';
import BookingModal from '@/components/BookingModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState('');

  const handleBooking = (offerType: string) => {
    setSelectedOffer(offerType);
    setIsModalOpen(true);
  };

  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-0"></div>
      
      {/* Main Footer */}
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
            
            {/* Spalte 1 - Logo & Claim */}
            <div>
              <div className="mb-6">
                <img 
                  src="/altovate-logo.png" 
                  alt="Altovate Logo" 
                  className="h-8 w-auto object-contain brightness-0 invert" 
                />
              </div>
              <p className="text-white/70 mb-8 text-sm font-light leading-relaxed">
                Lead- & Content-Systeme für Unternehmer, die keine Zeit für Marketing haben. Weniger Blabla. Mehr Ergebnisse.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/altovatemedia/?viewAsMember=true" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={22} strokeWidth={1.5} />
                </a>
                <a 
                  href="https://www.instagram.com/altovatemedia/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={22} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Spalte 2 - Angebote */}
            <div>
              <h3 className="font-semibold mb-6 text-sm text-white uppercase tracking-wider">Angebote</h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => handleBooking('Strategie-Session 60 Minuten')} className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light">
                    Strategie-Session 60 Min
                  </button>
                </li>
                <li>
                  <button onClick={() => handleBooking('Strategie-Session 90 Minuten')} className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light">
                    Strategie-Session 90 Min
                  </button>
                </li>
                <li>
                  <a href="#angebote" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light">
                    Social Media Setup
                  </a>
                </li>
                <li>
                  <a href="/marketingwissen" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light">
                    Marketingwissen
                  </a>
                </li>
                <li>
                  <a href="/tools" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light">
                    Meine Lieblingstools
                  </a>
                </li>
              </ul>
              
              {/* Förderung */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/70 text-sm font-light mb-2">
                  Fördermöglichkeiten für Marketing & Beratung
                </p>
                <p className="text-white/50 text-xs mb-3">
                  Je nach Ausgangslage bis zu 50 % oder 80 % Zuschuss möglich.
                </p>
                <a 
                  href="/foerderung" 
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium footer-link"
                >
                  Förderung prüfen →
                </a>
              </div>
            </div>

            {/* Spalte 3 - Kontakt */}
            <div>
              <h3 className="font-semibold mb-6 text-sm text-white uppercase tracking-wider">Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-white/70 text-sm">
                  <Mail size={18} className="flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <a href="mailto:info@altovate.de" className="hover:text-white transition-colors duration-300 font-light">
                    info@altovate.de
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-white/70 text-sm">
                  <Phone size={18} className="flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <a href="tel:+4915208922097" className="hover:text-white transition-colors duration-300 font-light">
                    +49 (0) 1520 892 2097
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-white/70 text-sm">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="font-light">Saarburg, Deutschland</span>
                </div>
              </div>
              
              {/* BNI Mitgliedschaft */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <a 
                  href="https://bni.de" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  <img 
                    src={bniBadge} 
                    alt="BNI Mitglied" 
                    className="w-24 h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="border-t border-white/10 py-6 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex space-x-8">
              <a href="/impressum" className="text-white/60 hover:text-white transition-all duration-300 text-xs font-light">
                Impressum
              </a>
              <a href="/datenschutz" className="text-white/60 hover:text-white transition-all duration-300 text-xs font-light">
                Datenschutz
              </a>
              <button
                onClick={() => {
                  const event = new CustomEvent('open-cookie-settings');
                  window.dispatchEvent(event);
                }}
                className="text-white/60 hover:text-white transition-all duration-300 text-xs font-light"
              >
                Cookie-Einstellungen
              </button>
            </div>
            <p className="text-white/50 text-xs font-light">
              © {new Date().getFullYear()} Altovate. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerType={selectedOffer}
      />
    </footer>
  );
};

export default Footer;