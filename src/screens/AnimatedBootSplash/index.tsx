import {ImageBackground, StyleSheet} from 'react-native';
import * as React from 'react';
import {HEIGHT, WIDTH} from '@constants/index';
import Animated, {
  interpolate,
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  onAnimationEnd: () => void;
  isReady: boolean;
};

const AnimatedBootSplash = ({onAnimationEnd, isReady}: Props) => {
  const translateY = useSharedValue(0);
  React.useEffect(() => {
    translateY.value = withRepeat(withTiming(1), -1, true);
  }, [translateY]);

  React.useEffect(() => {
    if (isReady) {
      translateY.value = withTiming(2, {duration: 300});
      setTimeout(() => {
        React.startTransition(() => {
          onAnimationEnd();
        });
      });
    }
  }, [isReady, onAnimationEnd, translateY]);
  const logoAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [0, 1, 2],
            [-10, 10, -HEIGHT],
          ),
        },
      ],
    };
  });
  return (
    <ImageBackground
      source={require('../../assets/images/app_background.png')}
      style={[StyleSheet.absoluteFill, styles.overall]}>
      <Animated.Image
        entering={SlideInDown.duration(300)}
        source={require('../../assets/images/large_logo.png')}
        style={[styles.logo, logoAnimatedStyle]}
      />
    </ImageBackground>
  );
};

export default AnimatedBootSplash;

const styles = StyleSheet.create({
  overall: {
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
