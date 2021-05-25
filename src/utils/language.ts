import AsyncStorage from '@react-native-community/async-storage';

import { ASYNC_STORAGE_LANGUAGE } from 'src/constants';

export const getLanguage = (): Promise<string | null> =>
  AsyncStorage.getItem(ASYNC_STORAGE_LANGUAGE);

export const setLanguage = (language: string): Promise<void> =>
  AsyncStorage.setItem(ASYNC_STORAGE_LANGUAGE, language);

export const clearLanguage = (): Promise<void> => AsyncStorage.removeItem(ASYNC_STORAGE_LANGUAGE);
