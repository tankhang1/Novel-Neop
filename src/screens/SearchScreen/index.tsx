import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';
import SearchItem from './components/SearchItem';
import BadgeItem from './components/BadgeItem';
import Item from './components/Item';

const TAGS = [
  {label: '#Wuxia', value: '#Wuxia'},
  {label: '#MartialArtsNovel', value: '#MartialArtsNovel'},
  {label: '#SwordFighting', value: '#SwordFighting'},
  {label: '#Jianghu', value: '#Jianghu'},
  {label: '#KungFuAdventure', value: '#KungFuAdventure'},
  {label: '#HeroicAdventure', value: '#HeroicAdventure'},
  {label: '#MartialWorld', value: '#MartialWorld'},
  {label: '#LegendOfJianghu', value: '#LegendOfJianghu'},
  {label: '#SwordAndMartialArts', value: '#SwordAndMartialArts'},
  {label: '#WuxiaFantasy', value: '#WuxiaFantasy'},
  {label: '#MartialArtsSaga', value: '#MartialArtsSaga'},
];

const LIST_SEARCH = [
  {
    image: require('@assets/images/card_1.png'),
    label: 'Unrivaled Medicine God',
  },
  {
    image: require('@assets/images/card_1.png'),
    label: 'Unrivaled Medicine God',
  },
  {
    image: require('@assets/images/card_1.png'),
    label: 'Unrivaled Medicine God',
  },
];

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchItem />
      <Text style={styles.title}>Tag</Text>
      <View style={styles.tagsContainer}>
        {TAGS.map((tag, index) => (
          <BadgeItem
            key={index}
            label={tag.label}
            index={index}
            isActive={index % 2 === 0}
          />
        ))}
      </View>
      <View style={styles.recentSearchHeader}>
        <Text style={styles.recentSearchText}>Recent searches</Text>
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchList}>
        {LIST_SEARCH.map((item, index) => (
          <Item
            index={index}
            key={index}
            source={item.image}
            label={item.label}
            onClose={() => {}}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightmode.netrual[25],
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'UVNBayBuomHepNang_Regular',
    fontSize: 28,
    lineHeight: 23.53,
    letterSpacing: 1,
    paddingVertical: 17,
    color: COLORS.lightmode.netrual[900],
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15,
  },
  recentSearchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recentSearchText: {
    fontFamily: 'UVNBayBuomHepNang_Regular',
    fontSize: 28,
    letterSpacing: 1,
    color: COLORS.lightmode.netrual[900],
  },
  clearText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    textDecorationLine: 'underline',
    color: COLORS.lightmode.netrual[500],
  },
  searchList: {
    gap: 14,
    marginTop: 14,
  },
});

export default SearchScreen;
