import TranslationEN from './locale/en.json'
import TranslationAR from './locale/ar.json'
import LanguageDetector from "i18next-browser-languagedetector"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: TranslationEN
      },
      ar: {
        translation: TranslationAR
      },
    },
    lng: 'en',
    debug: true, 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: false
    }
  });

  export default i18n