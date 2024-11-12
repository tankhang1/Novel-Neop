import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';
import Animated, {FadeIn} from 'react-native-reanimated';

type TBadgeItem = {
  label: string;
  index: number;
  isActive?: boolean;
};
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const BadgeItem = ({label, index, isActive}: TBadgeItem) => {
  return (
    <AnimatedTouchable entering={FadeIn.delay(index * 50)} hitSlop={10}>
      <ImageBackground
        style={[
          styles.badgeContainer,
          isActive && {backgroundColor: COLORS.lightmode.netrual[900]},
        ]}
        source={require('@assets/images/badge-border.png')}
        resizeMode="stretch">
        <Text
          style={[
            styles.badgeText,
            isActive && {color: COLORS.lightmode.netrual[0]},
          ]}>
          {label}
        </Text>
      </ImageBackground>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    paddingHorizontal: 13,
    height: 33,
  },

  badgeText: {
    fontFamily: 'Oregano-Regular',
    fontWeight: '400',
    fontSize: 13.76,
    color: COLORS.lightmode.netrual[900],
  },
});

export default BadgeItem;
