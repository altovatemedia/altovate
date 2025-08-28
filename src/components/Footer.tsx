import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#EA3B5F]">
      {/* Main Footer */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Spalte 1 - Logo & Claim */}
            <div>
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/935277c1-a2e5-4649-9f17-01644bb65880.png" 
                  alt="Altovate Logo" 
                  className="h-7 w-auto object-contain brightness-0 invert" 
                />
              </div>
              <p className="text-white mb-6 text-base font-medium leading-relaxed">
                Altovate – Marketing, das sichtbar macht.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/company/altovatemedia/?viewAsMember=true" 
                  className="text-white/80 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] p-1.5 rounded-full"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
                <a 
                  href="https://www.instagram.com/altovatemedia/" 
                  className="text-white/80 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] p-1.5 rounded-full"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Spalte 2 - Unternehmen */}
            <div>
              <h3 className="font-bold mb-4 text-base text-white">Unternehmen</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300 text-sm">
                    Preise
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300 text-sm">
                    Karriere
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300 text-sm">
                    Partner
                  </a>
                </li>
              </ul>
            </div>

            {/* Spalte 3 - Kontakt */}
            <div>
              <h3 className="font-bold mb-4 text-base text-white">Kontakt</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5 text-white/80 text-sm">
                  <Mail size={16} className="flex-shrink-0" />
                  <span>info@altovate.de</span>
                </div>
                <div className="flex items-center space-x-2.5 text-white/80 text-sm">
                  <Phone size={16} className="flex-shrink-0" />
                  <a href="tel:+4915208922097" className="hover:text-white transition-colors duration-300">+49 (0) 1520 892 2097</a>
                </div>
                <div className="flex items-center space-x-2.5 text-white/80 text-sm">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span>Saarburg, Deutschland</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="bg-[#D92F51] py-3">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-2 md:mb-0">
              <a href="#" className="text-white/70 hover:text-white hover:underline transition-all duration-300 text-xs">
                Impressum
              </a>
              <a href="#" className="text-white/70 hover:text-white hover:underline transition-all duration-300 text-xs">
                Datenschutz
              </a>
            </div>
            <p className="text-white/60 text-xs">
              © Altovate 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;