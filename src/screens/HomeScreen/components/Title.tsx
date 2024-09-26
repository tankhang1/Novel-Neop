import {ImageBackground} from 'react-native';
import React from 'react';
import AppTextGradient from '@components/AppTextGradient';
type TTitle = {
  width: number;
  height: number;
  content?: string;
};
const Title = ({width, height, content}: TTitle) => {
  return (
    <ImageBackground
      source={require('@assets/images/background.png')}
      style={{width, height}}>
      <AppTextGradient
        content={content?.toUpperCase()}
        width={width}
        height={height}
      />
    </ImageBackground>
  );
};

export default Title;
