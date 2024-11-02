import React from 'react';
import {
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import SearchIcon from '@assets/icons/common/SearchIcon';
import {COLORS} from '@constants/index';
import {useNavigation} from '@react-navigation/native';

const SearchItem = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.searchContainer}>
      <ImageBackground
        source={require('@assets/images/search-bg.png')}
        style={styles.container}
        resizeMode="stretch">
        <SearchIcon
          color={COLORS.lightmode.netrual[500]}
          width={24}
          height={24}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.lightmode.netrual[300]}
          placeholder="Search something"
        />
      </ImageBackground>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigate.goBack()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    paddingVertical: 10,
  },
  container: {
    height: 57,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    resizeMode: 'center',
    flex: 1,
  },
  input: {
    color: 'black',
    fontFamily: 'Montserrat',
    fontSize: 16,
    letterSpacing: -0.5,
    flex: 1,
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontFamily: 'UVNBayBuomHepNang-Regular',
    fontSize: 24,
    fontWeight: '400',
    color: COLORS.lightmode.netrual[900],
  },
});

export default SearchItem;
