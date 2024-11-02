import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ASSETS, HEIGHT, WIDTH} from '@constants/index';
import {SafeAreaView} from 'react-native-safe-area-context';
type TAppWrapper = {
  children: React.ReactNode;
  isAreaView?: boolean;
};
const AppWrapper = ({children, isAreaView = true}: TAppWrapper) => {
  if (isAreaView) {
    return (
      <SafeAreaView style={styles.overall}>
        <Image
          source={ASSETS.IMAGES.AppBackground}
          style={[StyleSheet.absoluteFill, {width: WIDTH, height: HEIGHT}]}
        />
        {children}
      </SafeAreaView>
    );
  }
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
