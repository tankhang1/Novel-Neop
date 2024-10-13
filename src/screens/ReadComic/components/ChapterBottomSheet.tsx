import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import BottomSheet from '@components/AppBottomSheet';
import {SharedValue} from 'react-native-reanimated';
import {ASSETS, COLORS, COMMIC, HEIGHT} from '@constants/index';
import ChapterItem from './ChapterItem';
const LIST_CHAPTER = Array.from(COMMIC, ([key, value]) => ({
  label: value.title,
  createdAt: value.createdAt,
  value: key,
}));
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
  return (
    <BottomSheet
      isOpen={isOpenMenu}
      toggleSheet={toggleSheetMenu}
      duration={300}
      wrapperStyle={styles.bottomSheetContainer}>
      <View style={styles.bottomSheetContentContainer}>
        <View style={styles.bottomSheetHeaderContainer1}>
          <TouchableOpacity
            hitSlop={20}
            onPress={() => {
              setTabBottomSheet(undefined);
              toggleSheetMenu();
            }}>
            <ASSETS.ICONS.ChervonDownIcon
              width={20}
              height={20}
              color={COLORS.lightmode.netrual[300]}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: HEIGHT * 0.6,
          }}>
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
          </ScrollView>
        </View>
      </View>
    </BottomSheet>
  );
};

export default ChapterBottomSheet;
const styles = StyleSheet.create({
  bottomSheetContainer: {height: HEIGHT * 0.7, flex: 1},
  bottomSheetContentContainer: {paddingHorizontal: 16, paddingVertical: 12},

  bottomSheetHeaderContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle1: {color: 'black', fontSize: 16},
  chapterItem: {},
});
