import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const FreebieBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    console.log('Button clicked, opening modal, current state:', modalOpen);
    setModalOpen(true);
  };

  console.log('FreebieBar render, modalOpen:', modalOpen);

  return (
    <>
      <div className="bg-white relative z-50 transition-all duration-500">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center py-4">
            <button
              onClick={handleClick}
              className="group flex items-center gap-3 text-sm font-medium bg-bg-soft hover:scale-[1.01] transition-all duration-200 px-6 py-3 rounded-full shadow-[0_2px_12px_rgba(9,0,44,0.06)]"
            >
              <span className="text-lg">🚀</span>
              <span className="text-text">
                Gratis-Check: Wie sichtbar bist du als Arbeitgeber?
              </span>
              <span className="text-primary font-semibold group-hover:text-primary/80 transition-colors">
                Jetzt prüfen →
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Modal</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <p>Wenn du das hier siehst, funktioniert das Modal!</p>
            <Button onClick={() => setModalOpen(false)} className="mt-4">
              Schließen
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FreebieBar;