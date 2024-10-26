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
  variant: 'yellow' | 'gray';
};
const BackgroundButton = ({
  children,
  onPress,
  wrapStyle,
  variant,
}: TBackgroundButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={[wrapStyle, styles.overall]}>
      <ImageBackground
        source={
          variant === 'yellow'
            ? require('@assets/images/btn-yellow.png')
            : require('@assets/images/btn-gray.png')
        }
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
