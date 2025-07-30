import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/2d6dd797-8727-415d-b55c-97819b9ba308.png" 
                alt="Altovate Logo" 
                className="h-8"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Boutique Marketing Agentur für ganzheitliches, 
              sichtbarkeitsorientiertes Marketing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Performance Marketing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Medienproduktion</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Arbeitgebermarke</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partner</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>kontakt@altovate.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>München, Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Altovate. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Impressum</a>
            <a href="#" className="hover:text-accent transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-accent transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;