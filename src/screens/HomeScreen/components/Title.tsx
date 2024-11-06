import {
  ImageBackground,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import React from 'react';
// import AppTextGradient from '@components/AppTextGradient';
import {COLORS} from '@constants/index';

type TTitle = {
  width: number;
  height: number;
  content?: string;
  textStyle?: StyleProp<TextStyle>;
};

const Title = ({width, height, content, textStyle}: TTitle) => {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('@assets/images/background.png')}
      style={[styles.imageBackground, {width, height}]}>
      {/* <AppTextGradient
        content={content?.toUpperCase()}
        width={width}
        height={height}
      /> */}
      <Text style={[styles.text, textStyle]}>{content}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'center',
    // any default style values can go here if needed
  },
  text: {
    fontFamily: 'Oregano-Regular',
    fontSize: 17,
    color: COLORS.lightmode.primary[500],
  },
});

export default Title;
