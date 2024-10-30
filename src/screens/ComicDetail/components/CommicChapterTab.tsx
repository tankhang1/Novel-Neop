import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {COLORS} from '@constants/index';
import ChapterItem from '@screens/ReadComic/components/ChapterItem';

import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {COMMIC_EN} from '@constants/en';
import {COMIC_HINDI} from '@constants/hidi';

type TComicChapter = {
  onPress?: (key: number) => void;
};
const ComicChapterTab = ({onPress}: TComicChapter) => {
  const {curLanguage} = useSelector((state: RootState) => state.comic);
  const [rangeSelected, setRangeSelected] = useState<{
    start: number;
    end: number;
  }>({start: 1, end: 10});

  const curComic = useMemo(
    () => (curLanguage === 'English' ? COMMIC_EN : COMIC_HINDI),
    [curLanguage],
  );
  const [isChangeSort, setIsChangeSort] = useState<null | 'oldest' | 'newest'>(
    null,
  );

  const ranges = useMemo(() => {
    const tmp = [];
    const n = curComic?.size ?? 1;
    for (let start = 1; start <= n; start += 10) {
      tmp.push({start, end: Math.min(start + 10 - 1, n)});
    }
    return tmp;
  }, [curComic]);
  const LIST_CHAPTER = useMemo(
    () =>
      curComic &&
      Array.from(curComic, ([key, value]) => ({
        label: value.title,
        createdAt: value.createdAt,
        value: key,
      })),
    [curComic],
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollViewContainer}
          style={styles.scrollView}>
          {ranges.map((range, index) => (
            <TouchableOpacity
              key={index}
              hitSlop={10}
              style={styles.rangeButton}
              onPress={() => {
                setRangeSelected(range);
                setIsChangeSort(null);
              }}>
              <Text
                style={[
                  styles.rangeText,
                  range.start === rangeSelected.start &&
                    range.end === rangeSelected.end &&
                    styles.textBold,
                ]}>
                {range.start} - {range.end}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.sortingContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsChangeSort('oldest');
              setRangeSelected(ranges[0]);
            }}>
            <Text
              style={[
                styles.sortingText,
                isChangeSort === 'oldest' && styles.textBold,
              ]}>
              Oldest
            </Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            onPress={() => {
              setIsChangeSort('newest');
              setRangeSelected(ranges[ranges.length - 1]);
            }}>
            <Text
              style={[
                styles.sortingText,
                isChangeSort === 'newest' && styles.textBold,
              ]}>
              Newest
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        nestedScrollEnabled
        style={styles.chapterList}
        persistentScrollbar={true}>
        <View style={styles.chapterItemList}>
          {LIST_CHAPTER?.slice(rangeSelected.start - 1, rangeSelected.end).map(
            (item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => onPress?.(item.value)}>
                <ChapterItem {...item} isActive={false} />
              </TouchableOpacity>
            ),
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
  },
  scrollView: {},
  scrollViewContainer: {
    gap: 18,
  },
  rangeButton: {
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  rangeText: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    color: COLORS.lightmode.netrual[900],
  },
  sortingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sortingText: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    color: COLORS.lightmode.netrual[900],
  },
  divider: {
    height: 14,
    width: 1,
    backgroundColor: COLORS.lightmode.netrual[500],
  },
  chapterList: {
    maxHeight: 300,
  },
  chapterItemList: {
    width: '100%',
    marginBottom: 10,
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default ComicChapterTab;
