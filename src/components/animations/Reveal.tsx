import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  blur?: boolean;
  scale?: boolean;
  className?: string;
  once?: boolean;
}

const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return !window.matchMedia('(min-width: 768px)').matches;
};

const getVariants = (
  direction: string,
  blur: boolean,
  scale: boolean
): Variants => {
  const offset = 40;
  const transforms: Record<string, { x: number; y: number }> = {
    up: { x: 0, y: offset },
    down: { x: 0, y: -offset },
    left: { x: offset, y: 0 },
    right: { x: -offset, y: 0 },
  };

  const { x, y } = transforms[direction] || transforms.up;
  const useBlur = blur && !isMobileDevice();

  return {
    hidden: {
      opacity: 0,
      x,
      y,
      filter: useBlur ? 'blur(12px)' : 'blur(0px)',
      scale: scale ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
    },
  };
};

const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  blur = false,
  scale = false,
  className = '',
  once = true,
}: RevealProps) => {
  return (
    <motion.div
      variants={getVariants(direction, blur, scale)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  direction = 'up',
  blur = false,
  scale = false,
  className = '',
  duration = 0.6,
}: {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  blur?: boolean;
  scale?: boolean;
  className?: string;
  duration?: number;
}) => {
  return (
    <motion.div
      variants={getVariants(direction, blur, scale)}
      transition={{ duration, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
