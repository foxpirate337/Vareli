import { createContext, useState, useContext, useCallback, useEffect } from 'react';
import translations from '../data/translations.js';

const LanguageContext = createContext();

const SUPPORTED_LANGUAGES = ['en', 'hr'];
const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'vareli-lang';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    // Check sessionStorage for saved language
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGUAGES.includes(saved)) return saved;
    } catch (e) {
      // sessionStorage not available
    }
    return DEFAULT_LANGUAGE;
  });

  const setLanguage = useCallback((lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguageState(lang);
      try {
        sessionStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {
        // sessionStorage not available
      }
      // Update the html lang attribute
      document.documentElement.lang = lang;
    }
  }, []);

  // Set initial lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = translations[language];
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k];
        } else {
          return key; // Fallback to key if not found
        }
      }
      // Handle template variables like {year}
      if (typeof value === 'string') {
        return value.replace('{year}', new Date().getFullYear());
      }
      return value || key;
    },
    [language]
  );

  // Helper to get localized field from data objects (nameEn/nameHr pattern)
  const localized = useCallback(
    (obj, field) => {
      const localizedKey = `${field}${language.charAt(0).toUpperCase() + language.slice(1)}`;
      return obj[localizedKey] || obj[`${field}En`] || '';
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, localized, supportedLanguages: SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
