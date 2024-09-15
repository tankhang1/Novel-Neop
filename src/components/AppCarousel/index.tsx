import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AppImage from '../AppImage';
import {WIDTH} from '../../constants';
import Indicator from '../../assets/icons/indicator.svg';
import IndicatorActive from '../../assets/icons/indicator-active.svg';
const BANNERS = [
  require('../../assets/images/banner.png'),
  require('../../assets/images/banner.png'),
  require('../../assets/images/banner.png'),
  require('../../assets/images/banner.png'),
];
const AppCarousel = () => {
  const [curIndex, setCurIndex] = useState(0);
  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          if (Math.round(e.nativeEvent.contentOffset.x / WIDTH) !== curIndex) {
            setCurIndex(Math.round(e.nativeEvent.contentOffset.x / WIDTH));
          }
        }}>
        {BANNERS.map((banner, bannerIndex) => (
          <AppImage
            key={bannerIndex}
            source={banner}
            imageStyle={styles.banner}
            resizeMode="stretch"
          />
        ))}
      </ScrollView>
      <View style={styles.dotWrapper}>
        {BANNERS.map((_, index) =>
          curIndex === index ? (
            <IndicatorActive key={Math.random()} />
          ) : (
            <Indicator key={Math.random()} />
          ),
        )}
      </View>
    </View>
  );
};

export default AppCarousel;

const styles = StyleSheet.create({
  banner: {width: WIDTH, height: 188},

  dotWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    width: WIDTH,
  },
});
