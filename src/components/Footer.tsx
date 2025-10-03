import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-0"></div>
      
      {/* Main Footer */}
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
            
            {/* Spalte 1 - Logo & Claim */}
            <div>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/935277c1-a2e5-4649-9f17-01644bb65880.png" 
                  alt="Altovate Logo" 
                  className="h-8 w-auto object-contain brightness-0 invert" 
                />
              </div>
              <p className="text-white/90 mb-8 text-sm font-light leading-relaxed">
                Marketing, das sichtbar macht.
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

            {/* Spalte 2 - Navigation */}
            <div>
              <h3 className="font-semibold mb-6 text-sm text-white uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light">
                    Leistungen
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light">
                    Preise
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light">
                    Kontakt
                  </a>
                </li>
              </ul>
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
            </div>
            <p className="text-white/50 text-xs font-light">
              © 2025 Altovate. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;