import {
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import SearchIcon from '@assets/icons/SearchIcon';
import {ASSETS, COLORS} from '@constants/index';

const AppSearch = () => {
  return (
    <View style={styles.searchWrapper}>
      <ImageBackground
        source={require('@assets/images/search-bg.png')}
        style={styles.container}
        resizeMode="stretch">
        <SearchIcon
          color={COLORS.lightmode.netrual[300]}
          width={24}
          strokeWidth={3}
          height={24}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.lightmode.netrual[300]}
          placeholder="Search something"
        />
      </ImageBackground>
      <TouchableOpacity>
        <ASSETS.ICONS.SortIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconWrapper}>
        <ASSETS.ICONS.SortUpIcon />
        <Text>Mới đánh dấu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    resizeMode: 'contain',
    flex: 1,
    gap: 7,
  },
  input: {
    color: COLORS.lightmode.netrual[300],
    fontFamily: 'Merriweather-Light',
    flex: 1,
  },
  txtIcon: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 10,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    marginVertical: 16,
  },
});
