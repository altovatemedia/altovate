import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const NewNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    { name: 'Lösungen', href: '#signature-offer', hasDropdown: true },
    { name: 'Case Studies', href: '#proof', hasDropdown: false },
    { name: 'Preis', href: '#angebote', hasDropdown: false },
  ];

  const dropdownItems = [
    { name: 'Social Media Marketing', href: '/socialmedia' },
    { name: 'Werbeanzeigen & Performance', href: '/werbeanzeigen-saarburg' },
    { name: 'Employer Branding 2025', href: '/employer-branding-saarburg' },
    { name: 'Marketing-Automation & Funnels', href: '/marketing-automation-saarburg' },
    { name: 'Software & KI-Lösungen', href: '/software-ki-loesungen-saarburg' },
    { name: 'Strategisches Marketingwissen', href: '/marketing-wissen' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else if (location.pathname !== '/') {
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
    setIsDropdownOpen(false);
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
      aria-label="Hauptnavigation"
      className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 backdrop-blur-xl ${
        isScrolled 
          ? 'bg-background/90 border-border' 
          : 'bg-background/70 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex-shrink-0 cursor-pointer">
            <img 
              src="/lovable-uploads/935277c1-a2e5-4649-9f17-01644bb65880.png" 
              alt="Altovate – zur Startseite"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && isDropdownOpen && (
                  <div className="absolute left-0 top-full w-72 pt-2 z-50">
                    <div className="bg-card rounded-lg shadow-lg border border-border py-2">
                      {dropdownItems.map((dropItem) => (
                        <button
                          key={dropItem.name}
                          onClick={() => handleNavClick(dropItem.href)}
                          className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted transition-colors duration-200 text-sm font-medium"
                        >
                          {dropItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              className="btn-hero text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              onClick={handleBookCall}
            >
              Jetzt Gespräch buchen
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (item.hasDropdown) {
                        setIsDropdownOpen(!isDropdownOpen);
                      } else {
                        handleNavClick(item.href);
                      }
                    }}
                    className="flex items-center justify-between w-full text-left px-3 py-3 text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />}
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && isDropdownOpen && (
                    <div className="pl-4 space-y-1">
                      {dropdownItems.map((dropItem) => (
                        <button
                          key={dropItem.name}
                          onClick={() => handleNavClick(dropItem.href)}
                          className="block w-full text-left px-3 py-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                        >
                          {dropItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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
