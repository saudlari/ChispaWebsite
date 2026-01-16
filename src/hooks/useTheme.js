import { useEffect, useState, useCallback } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    // Por defecto siempre light mode, solo usar dark si está guardado en localStorage
    const initialTheme = savedTheme || 'light';
    
    setTheme(initialTheme);
    const htmlElement = document.documentElement;
    
    // Remover clase light si existe (no debería, pero por si acaso)
    htmlElement.classList.remove('light');
    
    // Tailwind solo necesita la clase 'dark' - si no está, es modo light por defecto
    if (initialTheme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', initialTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const htmlElement = document.documentElement;
    
    console.log('Applying theme:', theme);
    console.log('HTML classes before:', htmlElement.classList.toString());
    
    // Remover clase light si existe
    htmlElement.classList.remove('light');
    
    // Aplicar/remover clase dark directamente
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    console.log('HTML classes after:', htmlElement.classList.toString());
    console.log('Has dark class?', htmlElement.classList.contains('dark'));
    console.log('Theme value:', theme);
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      console.log('Toggling theme from', prevTheme, 'to', newTheme);
      return newTheme;
    });
  }, []);

  return { theme, toggleTheme, mounted };
}

