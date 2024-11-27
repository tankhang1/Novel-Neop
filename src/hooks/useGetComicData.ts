import {COMIC_DATA} from '@constants/index';

export const getComicData = (key: string) => {
  return COMIC_DATA.find(comic => comic.key === key);
};
