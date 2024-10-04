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
  wrapperStyle?: StyleProp<ImageStyle>;

  source: ImageSourcePropType;
  resizeMode: ImageResizeMode;
  type?: 'UP' | 'END' | 'YELLOW' | 'AVATAR';
};
const mapImage = new Map([
  ['END', require('@assets/images/wrapper_end.png')],
  ['UP', require('@assets/images/wrapper_up.png')],
  ['YELLOW', require('@assets/images/wrapper_yellow.png')],
  ['AVATAR', require('@assets/images/avatar-bg.png')],
]);
const AppImageWrapper = ({
  wrapperStyle,
  imageStyle,
  resizeMode,
  source,
  type = 'UP',
}: TAppImageWrapper) => {
  return (
    <View style={[imageStyle, styles.overall, wrapperStyle]}>
      <AppImage
        imageStyle={imageStyle}
        resizeMode={resizeMode}
        source={mapImage.get(type)}
        globalStyle={[imageStyle]}
      />
      <AppImage
        imageStyle={imageStyle}
        resizeMode={resizeMode}
        source={source}
        globalStyle={[styles.image, imageStyle]}
      />
    </View>
  );
};

export default AppImageWrapper;

const styles = StyleSheet.create({
  overall: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    zIndex: -1,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
