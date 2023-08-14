import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();
import '../../i18n';
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Default language

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
