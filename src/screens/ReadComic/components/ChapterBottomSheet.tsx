import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet from '@components/AppBottomSheet';
import {SharedValue} from 'react-native-reanimated';
import {COLORS, HEIGHT} from '@constants/index';
import ChapterItem from './ChapterItem';
import ChevronDown from '@assets/icons/common/Chevron-Down';
import {COMMIC_EN} from '@constants/en';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {COMIC_HINDI} from '@constants/hidi';

type TChapterBottomSheet = {
  isOpenMenu: SharedValue<boolean>;
  toggleSheetMenu: () => void;
  setTabBottomSheet: (value?: 'menu' | 'setting') => void;
  themeColor: string;
  setChapter: (value: number) => void;
  chapter: number;
  setCounterEnd: (value: number) => void;
};
const ChapterBottomSheet = ({
  isOpenMenu,
  toggleSheetMenu,
  setTabBottomSheet,
  setChapter,
  setCounterEnd,
  chapter,
}: TChapterBottomSheet) => {
  const {curLanguage} = useSelector((state: RootState) => state.comic);
  const LIST_CHAPTER = useMemo(
    () =>
      Array.from(
        curLanguage === 'English' ? COMMIC_EN : COMIC_HINDI,
        ([key, value]) => ({
          label: value.title,
          createdAt: value.createdAt,
          value: key,
        }),
      ),
    [curLanguage],
  );
  return (
    <BottomSheet
      isOpen={isOpenMenu}
      toggleSheet={toggleSheetMenu}
      duration={300}
      wrapperStyle={styles.bottomSheetContainer}>
      <View style={styles.bottomSheetContentContainer}>
        <TouchableOpacity
          hitSlop={30}
          onPress={() => {
            setTabBottomSheet(undefined);
            toggleSheetMenu();
          }}
          style={styles.bottomSheetHeaderContainer1}>
          <ChevronDown
            width={20}
            height={20}
            color={COLORS.lightmode.netrual[300]}
          />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <ScrollView>
            {LIST_CHAPTER.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setChapter(index + 1);
                  setCounterEnd(0);
                }}
                style={styles.chapterItem}>
                <ChapterItem {...item} isActive={chapter === index + 1} />
              </TouchableOpacity>
            ))}
            <View style={{height: 100}} />
          </ScrollView>
        </View>
      </View>
    </BottomSheet>
  );
};

export default ChapterBottomSheet;
const styles = StyleSheet.create({
  bottomSheetContainer: {height: HEIGHT * 0.8, flex: 1},
  bottomSheetContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flex: 1,
  },

  bottomSheetHeaderContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerTitle1: {color: 'black', fontSize: 16},
  chapterItem: {},
});
