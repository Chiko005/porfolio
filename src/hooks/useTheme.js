import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    // Create the sweep overlay
    const overlay = document.createElement('div');
    overlay.className = 'theme-sweep-overlay';

    // Get the target theme colors
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const sweepColor = nextTheme === 'light' ? '#ffffff' : '#000000';
    overlay.style.background = sweepColor;

    document.body.appendChild(overlay);

    // Trigger the sweep animation
    requestAnimationFrame(() => {
      overlay.classList.add('sweeping');

      // Switch the actual theme midway through the sweep
      setTimeout(() => {
        setTheme(nextTheme);
      }, 250);

      // Clean up the overlay after the animation
      setTimeout(() => {
        overlay.classList.add('sweep-done');
        setTimeout(() => {
          overlay.remove();
        }, 150);
      }, 500);
    });
  }, [theme]);

  return { theme, toggleTheme };
}
