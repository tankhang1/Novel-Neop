import React, {useState} from 'react';
import {TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

const AppSwitch = () => {
  const [isActive, setIsActive] = useState(false);
  const offset = useSharedValue(0);

  const toggleSwitch = () => {
    setIsActive(!isActive);
    offset.value = isActive ? withTiming(0) : withTiming(15);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        isActive ? 1 : 0,
        [0, 1],
        ['rgba(120, 120, 128, 0.16)', 'rgba(52, 199, 89, 1)'],
      ),
    };
  });
  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <Animated.View style={[styles.switchContainer, animatedContainerStyle]}>
        <Animated.View style={[styles.circle, animatedStyle]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 40,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#ccc',
    padding: 2,
    justifyContent: 'center',
  },
  circle: {
    width: 21,
    height: 21,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
});

export default AppSwitch;
