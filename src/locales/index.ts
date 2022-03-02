import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { getLanguage, setLanguage } from 'src/utils';

import pt_br from './translations/pt_BR.json';
import en_us from './translations/en_US.json';

const resources = {
  ['pt-BR']: pt_br,
  ['en-US']: en_us
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    const storedLanguage = await getLanguage();
    if (storedLanguage) {
      return callback(storedLanguage);
    }

    let phoneLanguage = null;
    if (Platform.OS === 'android') {
      phoneLanguage = NativeModules.I18nManager.localeIdentifier;
    } else {
      phoneLanguage = NativeModules.SettingsManager.settings.AppleLocale;
    }

    phoneLanguage = phoneLanguage?.replace('_', '-');

    return callback(phoneLanguage);
  },
  init: () => {},
  cacheUserLanguage: (language: string) => setLanguage(language)
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt-BR',
    resources,
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
