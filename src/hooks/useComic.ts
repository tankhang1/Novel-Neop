import {COMMIC_EN} from '@constants/en';
import {COMIC_HINDI} from '@constants/hidi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const renderComic = async () => {
  const language = await AsyncStorage.getItem('language');
  switch (language) {
    case 'English':
      return COMMIC_EN;
    case 'Hindi':
      return COMIC_HINDI;
    default:
      return COMMIC_EN;
  }
};

export const storageLanguage = (key: string) => {
  AsyncStorage.setItem('language', key);
};

export const getLanguage = async () => {
  return await AsyncStorage.getItem('language');
};
