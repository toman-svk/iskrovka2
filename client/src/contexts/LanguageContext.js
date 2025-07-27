// src/contexts/LanguageContext.js
import React, { createContext, useContext, useState } from 'react';
import en from '../locales/en.json';
import sk from '../locales/sk.json';
import cz from '../locales/cz.json';

const translations = {
  en,
  sk,
  cz,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('sk');

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => obj?.[k], translations[language]) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);