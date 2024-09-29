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
  type?: 'UP' | 'END';
};
const AppImageWrapper = ({
  imageStyle,
  resizeMode,
  source,
  type = 'UP',
}: TAppImageWrapper) => {
  return (
    <View style={[imageStyle, styles.overall]}>
      <AppImage
        imageStyle={imageStyle}
        resizeMode={resizeMode}
        source={
          type === 'END'
            ? require('@assets/images/wrapper_end.png')
            : require('@assets/images/wrapper_up.png')
        }
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
