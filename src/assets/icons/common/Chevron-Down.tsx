import {COLORS} from '@constants/index';
import {TIcon} from '@utils/types/meta';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ChevronDown = ({
  width = 24,
  height = 24,
  color = COLORS.lightmode.netrual[900],
}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 10l-5 5-5-5"
      />
    </Svg>
  );
};

export default ChevronDown;
