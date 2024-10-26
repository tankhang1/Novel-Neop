type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  ComicDetail: undefined;
  ReadComic: {
    chapterKey?: number;
  };
  SearchScreen: undefined;
  Category: undefined;
  More: undefined;
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
