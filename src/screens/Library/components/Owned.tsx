import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';
import Item from './Item';
import AppSearch from '@components/AppSearch';

const Owned = () => {
  const isEmpty = true;
  const renderItem = ({index}: ListRenderItemInfo<any>) => {
    return <Item key={index} />;
  };
  return (
    <View style={styles.container}>
      {isEmpty ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('@assets/images/no-purchase.png')}
            style={styles.image}
          />
          <Text style={styles.title}>No purchased stories</Text>
          <Text style={styles.text}>
            Explore the catalog and purchase stories to enjoy them anytime
          </Text>
          <View style={styles.bottomSpacing} />
        </View>
      ) : (
        <View>
          <AppSearch />
          <FlatList
            renderItem={renderItem}
            data={Array.from({length: 10})}
            initialNumToRender={3}
            contentContainerStyle={styles.listContainerStyle}
            ListFooterComponent={<View style={styles.bottomSpacing} />}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    gap: 14,
    // opacity: 0.5,
  },
  image: {
    width: 214,
    height: 200,
  },
  title: {
    color: COLORS.lightmode.primary[600],
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
    lineHeight: 33,
  },
  text: {
    color: COLORS.lightmode.netrual[300],
    fontSize: 16,
    letterSpacing: 1,
    width: '70%',
    textAlign: 'center',
    lineHeight: 22,
  },
  buttonImage: {
    width: 220,
    height: 48,
  },
  bottomSpacing: {
    height: 150,
  },
  listContainerStyle: {paddingHorizontal: 16, gap: 14},
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    opacity: 0.5,
  },
});

export default Owned;
