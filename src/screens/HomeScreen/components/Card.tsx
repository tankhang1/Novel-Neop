import {
  StyleSheet,
  StyleProp,
  ImageStyle,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppText from '@components/AppText';
import AppImageWrapper from '@components/AppImageWrapper';
import Animated, {FadeIn} from 'react-native-reanimated';

type TCard = {
  image: any;
  label: string;
  imageStyle?: StyleProp<ImageStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  numberOfLines?: number;
  onPress?: () => void;
  index?: number;
};
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const Card = ({
  image,
  label,
  imageStyle,
  wrapperStyle,
  labelStyle,
  numberOfLines,
  index = 0,
  onPress,
}: TCard) => {
  return (
    <AnimatedTouchable
      entering={FadeIn.delay(index * 100)}
      onPress={onPress}
      style={[styles.cardWrapper, wrapperStyle]}>
      <AppImageWrapper
        source={image}
        imageStyle={[styles.image, imageStyle]}
        resizeMode="stretch"
      />
      <AppText
        style={[styles.labelStyle, labelStyle]}
        numberOfLines={numberOfLines}>
        {label}
      </AppText>
    </AnimatedTouchable>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 138,
  },
  cardWrapper: {
    flex: 1,
    gap: 6,
  },
  labelStyle: {
    fontSize: 14,
    color: 'black',
  },
});
