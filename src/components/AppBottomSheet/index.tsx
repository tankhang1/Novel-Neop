import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);
type TBottomSheet = {
  isOpen: SharedValue<boolean>;
  toggleSheet: () => void;
  children: React.ReactNode;
  duration?: number;
  wrapperStyle?: StyleProp<ViewStyle>;
};
function BottomSheet({
  isOpen,
  toggleSheet,
  duration = 500,
  children,
  wrapperStyle,
}: TBottomSheet) {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, {duration}),
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{translateY: progress.value * 2 * height.value}],
  }));

  // const backgroundColorSheetStyle = {
  //   backgroundColor: '#f8f9ff',
  // };

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, {duration: 0})),
  }));

  useEffect(() => {
    const backAction = () => {
      if (isOpen.value) {
        toggleSheet();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [toggleSheet, isOpen]);

  return (
    <>
      <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          onPress={toggleSheet}
        />
      </Animated.View>
      <AnimatedImageBackground
        source={require('@assets/images/mask.png')}
        resizeMode={'stretch'}
        onLayout={e => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[
          sheetStyles.sheet,
          sheetStyle,
          // backgroundColorSheetStyle,
          wrapperStyle,
        ]}>
        {children}
      </AnimatedImageBackground>
    </>
  );
}
export default BottomSheet;
const sheetStyles = StyleSheet.create({
  sheet: {
    height: 150,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
