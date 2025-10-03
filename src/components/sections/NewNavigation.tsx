import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';

const NewNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

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
      className="fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 bg-white border-gray-200 dark:bg-[#1a1a1a] dark:border-white/10 backdrop-blur-sm"
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
                className="text-[#09002C] dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle & Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Switch Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative flex items-center gap-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-full p-1 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-[#333333]"
            >
              <span className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                theme !== 'dark' ? 'bg-white text-[#09002C] shadow-sm' : 'text-gray-400'
              }`}>
                <Sun className="w-3.5 h-3.5" />
                Light
              </span>
              <span className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                theme === 'dark' ? 'bg-[#1a1a1a] text-white shadow-sm' : 'text-gray-500'
              }`}>
                <Moon className="w-3.5 h-3.5" />
                Dark
              </span>
            </button>
            <Button 
              className="btn-hero text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              onClick={handleBookCall}
            >
              Jetzt Gespräch buchen
            </Button>
          </div>

          {/* Mobile menu button & Dark Mode Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Switch */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative flex items-center gap-1 bg-gray-100 dark:bg-[#2a2a2a] rounded-full p-0.5 transition-all duration-300"
            >
              <span className={`text-[10px] font-medium px-2 py-1 rounded-full transition-all duration-300 flex items-center gap-1 ${
                theme !== 'dark' ? 'bg-white text-[#09002C] shadow-sm' : 'text-gray-400'
              }`}>
                <Sun className="w-3 h-3" />
              </span>
              <span className={`text-[10px] font-medium px-2 py-1 rounded-full transition-all duration-300 flex items-center gap-1 ${
                theme === 'dark' ? 'bg-[#1a1a1a] text-white shadow-sm' : 'text-gray-500'
              }`}>
                <Moon className="w-3 h-3" />
              </span>
            </button>
            <button
              className="p-2 text-[#09002C] dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white dark:bg-[#1a1a1a]">
            <div className="px-2 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-3 text-[#09002C] dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors duration-300"
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