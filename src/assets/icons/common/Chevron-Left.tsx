import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TIcon} from '@utils/types/meta';
import {COLORS} from '@constants/index';

const ChevronLeft = ({
  width = 24,
  height = 24,
  color = COLORS.lightmode.netrual[900],
}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={'none'}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 6l-6 6 6 6"
      />
    </Svg>
  );
};

export default ChevronLeft;
