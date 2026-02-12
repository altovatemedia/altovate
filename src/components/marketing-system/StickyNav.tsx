import { useNavigate } from 'react-router-dom';

const StickyNav = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="sticky top-16 z-30 py-3 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => scrollTo('framework')}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#ff1c5c] transition-colors"
          >
            System verstehen
          </button>
          <button
            onClick={() => scrollTo('tools')}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#ff1c5c] transition-colors"
          >
            ROI berechnen
          </button>
          <button
            onClick={handleContact}
            className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
            style={{ background: '#ff1c5c', color: '#fff' }}
          >
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
