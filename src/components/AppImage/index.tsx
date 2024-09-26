import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';

type TAppImage = {
  imageStyle?: StyleProp<ImageStyle>;
  source: ImageSourcePropType;
  resizeMode: ImageResizeMode;
  globalStyle?: StyleProp<ViewStyle>;
};
const AppImage = ({imageStyle, globalStyle, source, resizeMode}: TAppImage) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onLoadStart = () => {
    setIsLoading(true);
    setIsError(false);
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  const onError = () => {
    setIsError(true);
    setIsLoading(false);
  };
  return (
    <View style={globalStyle}>
      <Animated.Image
        entering={FadeIn}
        style={[styles.image, imageStyle]}
        source={source}
        resizeMode={resizeMode}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
      />
      {isLoading && (
        <View style={[styles.image, styles.loadingView, imageStyle]}>
          <ActivityIndicator />
        </View>
      )}
      {isError && (
        <Image
          style={[styles.image, imageStyle]}
          source={require('../../assets/images/not-found.jpg')}
          resizeMode={resizeMode}
        />
      )}
    </View>
  );
};

export default AppImage;
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  loadingView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
