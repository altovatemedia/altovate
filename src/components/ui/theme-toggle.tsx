import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage first, then system preference
    const storedTheme = localStorage.getItem('altovate-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.dataset.theme = shouldBeDark ? 'dark' : 'light';
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('altovate-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-pressed={isDark}
      aria-label="Theme wechseln"
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;