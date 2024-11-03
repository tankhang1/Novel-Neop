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

type TCard = {
  image: any;
  label: string;
  imageStyle?: StyleProp<ImageStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  numberOfLines?: number;
  onPress?: () => void;
};
const Card = ({
  image,
  label,
  imageStyle,
  wrapperStyle,
  labelStyle,
  numberOfLines,
  onPress,
}: TCard) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.cardWrapper, wrapperStyle]}>
      <AppImageWrapper
        source={image}
        imageStyle={[styles.image, imageStyle]}
        resizeMode="cover"
        type="YELLOW"
      />
      <AppText
        style={[styles.labelStyle, labelStyle]}
        numberOfLines={numberOfLines}>
        {label}
      </AppText>
    </TouchableOpacity>
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
    fontSize: 16,
    color: 'black',
    fontFamily: 'Kings-Regular',
  },
});
