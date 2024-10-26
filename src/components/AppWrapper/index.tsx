import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ASSETS, HEIGHT, WIDTH} from '@constants/index';
type TAppWrapper = {
  children: React.ReactNode;
};
const AppWrapper = ({children}: TAppWrapper) => {
  return (
    <View style={styles.overall}>
      <Image
        source={ASSETS.IMAGES.AppBackground}
        style={[StyleSheet.absoluteFill, {width: WIDTH, height: HEIGHT}]}
      />
      {children}
    </View>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  overall: {
    flex: 1,
    height: HEIGHT,
  },
});
