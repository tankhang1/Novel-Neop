import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
  const ref = useRef<ScrollView>(null);
  const [curIndex, setCurIndex] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (curIndex === 3) {
  //       setCurIndex(0);
  //       ref.current?.scrollTo({x: 0});
  //     } else {
  //       ref.current?.scrollTo({x: (curIndex + 1) * WIDTH, animated: true});
  //     }
  //   }, 1000);
  // }, [curIndex]);
  return (
    <View>
      <ScrollView
        ref={ref}
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
  banner: {width: WIDTH, height: 270},

  dotWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    width: WIDTH,
  },
});
