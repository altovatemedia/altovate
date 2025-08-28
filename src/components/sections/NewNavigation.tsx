import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NewNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Lösungen', href: '#signature-offer' },
    { name: 'Case Studies', href: '#proof' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Über uns', href: '#about' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleBookCall = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 border-b border-border transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-card' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-foreground">
              Altovate
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-text hover:text-primary font-medium transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              className={`bg-primary text-white rounded-full px-6 py-3 font-bold transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-[#C81F41] ${
                isScrolled 
                  ? 'shadow-[0_6px_20px_rgba(234,59,95,0.4)]' 
                  : 'shadow-[0_4px_14px_rgba(234,59,95,0.25)]'
              } hover:shadow-[0_8px_25px_rgba(234,59,95,0.4)] hover:scale-[1.05]`}
              onClick={handleBookCall}
            >
              Jetzt Gespräch buchen
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-3 text-text hover:text-primary font-medium transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  className="bg-primary text-white rounded-full px-6 py-3 font-bold transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-[#C81F41] shadow-[0_4px_14px_rgba(234,59,95,0.25)] hover:shadow-[0_8px_25px_rgba(234,59,95,0.4)] hover:scale-[1.05] w-full"
                  onClick={handleBookCall}
                >
                  Jetzt Gespräch buchen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewNavigation;