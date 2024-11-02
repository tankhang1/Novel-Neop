import {
  TouchableOpacity,
  ImageBackground,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import React from 'react';

type TBackgroundButton = {
  children: React.ReactNode;
  onPress?: () => void;
  wrapStyle?: StyleProp<ViewStyle>;
  variant: 'yellow' | 'gray' | 'gray-bold' | 'red' | 'gray-large-bold';
};
const MapBg = new Map([
  ['yellow', require('@assets/images/btn-yellow.png')],
  ['gray', require('@assets/images/btn-gray.png')],
  ['gray-bold', require('@assets/images/mask-1.png')],
  ['red', require('@assets/images/mask-4.png')],
  ['gray-large-bold', require('@assets/images/mask-5.png')],
]);
const BackgroundButton = ({
  children,
  onPress,
  wrapStyle,
  variant,
}: TBackgroundButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={[wrapStyle, styles.overall]}>
      <ImageBackground
        source={MapBg.get(variant)}
        style={wrapStyle}
        resizeMode="stretch">
        {children}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default BackgroundButton;

const styles = StyleSheet.create({
  overall: {
    overflow: 'hidden',
  },
});
