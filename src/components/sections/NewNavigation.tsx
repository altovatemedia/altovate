import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useGlassmorphism } from '@/hooks/useScrollAnimation';
import { useNavigate, useLocation } from 'react-router-dom';

const NewNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useGlassmorphism();
  const navigate = useNavigate();
  const location = useLocation();

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
    { name: 'Preis', href: '#pricing' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookCall = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className="glass-nav fixed top-[52px] left-0 right-0 z-40 border-b border-white/20 transition-all duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex-shrink-0 cursor-pointer">
            <img 
              src="/lovable-uploads/935277c1-a2e5-4649-9f17-01644bb65880.png" 
              alt="Altovate"
              className="h-8 w-auto object-contain"
            />
          </button>

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
              className="btn-hero text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
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
                  className="btn-hero text-lg px-8 py-4 w-full hover:scale-105 transition-all duration-300"
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