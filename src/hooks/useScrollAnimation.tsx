import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  staggerDelay?: number;
}

export const useScrollAnimation = (
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    staggerDelay = 150
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Handle single element animation
            if (target.classList.contains('fade-in-up') || 
                target.classList.contains('slide-in-bottom') ||
                target.classList.contains('module-box')) {
              target.classList.add('animate');
            }
            
            // Handle staggered animations for children
            const animatedChildren = target.querySelectorAll('.fade-in-up, .slide-in-bottom, .module-box');
            animatedChildren.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('animate');
              }, index * staggerDelay);
            });

            if (triggerOnce) {
              observer.unobserve(target);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, staggerDelay]);

  return elementRef;
};

export const useParallax = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      element.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return elementRef;
};

export const useGlassmorphism = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const opacity = Math.min(scrolled / 100, 0.95);
      element.style.backgroundColor = `rgba(255, 255, 255, ${0.7 + opacity * 0.25})`;
      element.style.backdropFilter = `blur(${Math.min(scrolled / 5, 20)}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return elementRef;
};