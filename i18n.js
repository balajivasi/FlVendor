import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './Assets/i18n/en.json';
import es from './Assets/i18n/es.json';

const resources = {
  en: en,
  es: es,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
