import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';

const Ranges = [
  {start: 0, end: 100},
  {start: 101, end: 200},
  {start: 201, end: 300},
  {start: 301, end: 400},
  {start: 401, end: 500},
  {start: 501, end: 600},
  {start: 601, end: 700},
  {start: 701, end: 800},
  {start: 801, end: 900},
  {start: 901, end: 1000},
];

const ChapterItem = () => {
  return (
    <View style={styles.chapterItemContainer}>
      <Text style={styles.chapterTitle}>
        1000. Chapter 1000 Whispers of the Forgotten Sword
      </Text>
      <Text style={styles.chapterDate}>02/09/2024</Text>
    </View>
  );
};

const ComicChapterTab = () => {
  return (
    <View>
      <View>
        <View style={styles.headerContainer}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContainer}
            style={styles.scrollView}>
            {Ranges.map((range, index) => (
              <TouchableOpacity key={index} style={styles.rangeButton}>
                <Text style={styles.rangeText}>
                  {range.start} - {range.end}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.sortingContainer}>
            <TouchableOpacity>
              <Text style={styles.sortingText}>Oldest</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity>
              <Text style={styles.sortingTextBold}>Newest</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ChapterItem />
      </View>
      <Text>ComicChapterTab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
  },
  scrollView: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightmode.netrual[50],
  },
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
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sortingText: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    color: COLORS.lightmode.netrual[900],
  },
  sortingTextBold: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    color: COLORS.lightmode.netrual[900],
    fontWeight: '700',
  },
  divider: {
    height: 14,
    width: 1,
    backgroundColor: COLORS.lightmode.netrual[500],
  },
  chapterItemContainer: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightmode.netrual[50],
    padding: 16,
    gap: 6,
  },
  chapterTitle: {
    fontFamily: 'UVNBayBuomHepNang_Regular',
    color: COLORS.lightmode.netrual[700],
    fontSize: 18,
  },
  chapterDate: {
    fontSize: 11,
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[200],
  },
});

export default ComicChapterTab;
