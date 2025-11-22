import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    // Load language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'tr' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    try {
      // Support nested keys like "nav.home"
      const keys = key.split('.');
      let value: any = null;
      
      if (language === 'tr') {
        value = require('../../locales/tr.json');
      } else {
        value = require('../../locales/en.json');
      }
      
      for (const k of keys) {
        value = value?.[k];
      }
      
      return typeof value === 'string' ? value : key;
    } catch (error) {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

