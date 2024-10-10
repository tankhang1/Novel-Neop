import {ImageBackground, StyleProp, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import AppText from '@components/AppText';

type TTag = {
  wrapperStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  content?: string;
  isGray?: boolean;
};
const Tag = ({wrapperStyle, textStyle, content, isGray}: TTag) => {
  return (
    <ImageBackground
      source={
        isGray
          ? require('../../../assets/images/tag-gray.png')
          : require('../../../assets/images/tag.png')
      }
      style={wrapperStyle}>
      <AppText style={textStyle}>{content}</AppText>
    </ImageBackground>
  );
};

export default Tag;
