/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

export const LanguageContext = createContext<{language: "en" | "ja"; setLanguage: (language: "en" | "ja") => void;}>({
  language: 'en',
  setLanguage: (language: 'en' | 'ja') => {}
});
