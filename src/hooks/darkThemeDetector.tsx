import { useEffect, useState } from 'react';

export const useThemeDetector = (): boolean => {
  const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const mediaQueryListener = (e: { matches: boolean }) : void => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMediaQuery.addEventListener('change', (mediaQueryListener));
    return () => { darkThemeMediaQuery.removeEventListener('change', mediaQueryListener); };
  }, []);
  
  return isDarkTheme;
};
