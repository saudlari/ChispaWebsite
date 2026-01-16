import { useEffect, useState, useCallback } from 'react';
import { APP_CONFIG } from '../config/constants';

export function useTheme() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    try {
      const savedTheme = localStorage.getItem(APP_CONFIG.localStorage.themeKey);
      const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';
      
      setTheme(initialTheme);
      const htmlElement = document.documentElement;
      
      htmlElement.classList.remove('light');
      
      if (initialTheme === 'dark') {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error loading theme from localStorage:', error);
      }
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const htmlElement = document.documentElement;
    
    htmlElement.classList.remove('light');
    
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    try {
      localStorage.setItem(APP_CONFIG.localStorage.themeKey, theme);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error saving theme to localStorage:', error);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme, mounted };
}

