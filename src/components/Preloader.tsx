import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'logo' | 'exit'>('logo');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 1600);
    const t2 = setTimeout(() => onComplete(), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? null : null}
      <motion.div
        key="preloader"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        animate={phase === 'exit' ? { opacity: 0 } : { opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ pointerEvents: phase === 'exit' ? 'none' : 'auto' }}
      >
        <motion.img
          src="/altovate-logo.png"
          alt="altovate"
          className="h-10 md:h-12"
          style={{ filter: 'brightness(0) invert(1)' }}
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
