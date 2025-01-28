/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

interface LanguageContextProps {
  language: 'en' | 'ja';
  setLanguage: (language: 'en' | 'ja') => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: (language: 'en' | 'ja') => {}
});
