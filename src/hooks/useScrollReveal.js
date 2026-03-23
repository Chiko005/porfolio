import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          } else {
            // Remove the class when it leaves the viewport to trigger animation again next time
            entry.target.classList.remove('revealed');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '-10% 0px -10% 0px',
      }
    );

    // Observe the main container (the section) so it gets the 'revealed' class
    observer.observe(element);

    // Observe all children with reveal classes
    const revealElements = element.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .skill-box');
    revealElements.forEach((el) => observer.observe(el));

    if (element.classList.contains('reveal') || 
        element.classList.contains('reveal-left') || 
        element.classList.contains('reveal-right') ||
        element.classList.contains('reveal-scale')) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
