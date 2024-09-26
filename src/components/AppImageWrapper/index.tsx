import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import AppImage from '@components/AppImage';
type TAppImageWrapper = {
  imageStyle?: StyleProp<ImageStyle>;
  source: ImageSourcePropType;
  resizeMode: ImageResizeMode;
};
const AppImageWrapper = ({
  imageStyle,
  resizeMode,
  source,
}: TAppImageWrapper) => {
  return (
    <View style={[imageStyle, styles.overall]}>
      <AppImage
        imageStyle={imageStyle}
        resizeMode={resizeMode}
        source={require('../../assets/images/wrapper.png')}
        globalStyle={[imageStyle]}
      />
      <AppImage
        imageStyle={imageStyle}
        resizeMode={resizeMode}
        source={source}
        globalStyle={[{position: 'absolute', top: 0, zIndex: -1}, imageStyle]}
      />
    </View>
  );
};

export default AppImageWrapper;

const styles = StyleSheet.create({
  overall: {
    position: 'relative',
  },
});
