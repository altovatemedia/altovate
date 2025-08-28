import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#EA3B5F] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Spalte 1 - Logo & Claim */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/935277c1-a2e5-4649-9f17-01644bb65880.png" 
                alt="Altovate Logo" 
                className="h-8 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-white mb-8 text-lg font-medium leading-relaxed">
              Altovate – Marketing, das sichtbar macht.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] p-2 rounded-full"
              >
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] p-2 rounded-full"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Spalte 2 - Unternehmen */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300">
                  Preise
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 3 - Kontakt */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/80">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@altovate.de</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone size={18} className="flex-shrink-0" />
                <span>+49 (0) 1520 892 2097</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin size={18} className="flex-shrink-0" />
                <span>Saarburg, Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-right">
            <p className="text-white/60 text-sm">
              © Altovate 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;