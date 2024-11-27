type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  ComicDetail: {
    comicKey: string;
  };
  ReadComic: {
    chapterKey?: number;
    comicKey: string;
  };
  SearchScreen: undefined;
  Category: undefined;
  More: undefined;
  About: undefined;
};

type BottomTabParamList = {
  Home: undefined;
  Library: TopLibraryTabParamList;
  Notification: undefined;
  MyProfile: undefined;
};

type TopLibraryTabParamList = {
  BookMarks: undefined;
  Owned: undefined;
  Offline: undefined;
};

export type {RootStackParamList, BottomTabParamList, TopLibraryTabParamList};
