import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }
    
    // 1. Check if class is present (set by index.html script)
    if (document.documentElement.classList.contains('dark')) {
      return 'dark';
    }
    
    // 2. Check local storage directly if class is missing (fallback)
    const stored = localStorage.getItem('portfolio_theme');
    if (stored === 'dark') return 'dark';
    if (stored === 'light') return 'light';

    // 3. Default to dark if nothing is set
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};