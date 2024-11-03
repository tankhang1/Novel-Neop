import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';
import dayjs from 'dayjs';

type TChapterItem = {
  label: string;
  createdAt: Date;
  isActive: boolean;
};
const ChapterItem = ({label, createdAt, isActive}: TChapterItem) => {
  return (
    <View style={styles.chapterItemContainer}>
      <Text
        style={[
          styles.chapterTitle,
          {
            color: isActive
              ? COLORS.lightmode.primary[600]
              : COLORS.lightmode.netrual[700],
          },
        ]}>
        {label}
      </Text>
      <Text style={styles.chapterDate}>
        {dayjs(createdAt).format('DD/MM/YYYY')}
      </Text>
    </View>
  );
};

export default ChapterItem;
const styles = StyleSheet.create({
  chapterItemContainer: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightmode.netrual[50],
    padding: 16,
    gap: 6,
  },
  chapterTitle: {
    fontFamily: 'Kings-Regular',
    color: COLORS.lightmode.netrual[700],
    fontSize: 18,
  },
  chapterDate: {
    fontSize: 11,
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[200],
  },
});
