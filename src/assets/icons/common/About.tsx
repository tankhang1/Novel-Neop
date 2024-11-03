import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '@constants/index';
import {TIcon} from '@utils/types/meta';

const About = ({
  width = 24,
  height = 24,
  color = COLORS.lightmode.netrual[900],
}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2"
      />
    </Svg>
  );
};

export default About;
