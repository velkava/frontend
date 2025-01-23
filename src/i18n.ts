import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import finnish from './locales/fi/translation.json'
import swedish from './locales/sv/translation.json'


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fi: {
        translation: finnish,
      },
      sv: {
        translation: swedish,
      },
    },
    fallbackLng: 'fi',
    supportedLngs: ['fi', 'sv'],
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;