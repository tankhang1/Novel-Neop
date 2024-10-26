import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TIcon} from '@utils/types/meta';
import {COLORS} from '@constants/index';

const ChevronRight = ({
  width = 24,
  height = 24,
  color = COLORS.lightmode.netrual[900],
  variant = 'normal',
}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      {variant === 'bold' ? (
        <Path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 7l5 5-5 5"
        />
      ) : (
        <Path
          fillRule="evenodd"
          d="M9.646 7.646a.5.5 0 01.708 0L14.707 12l-4.353 4.354a.5.5 0 01-.708-.708L13.293 12 9.646 8.354a.5.5 0 010-.708"
          fill={color}
          clipRule="evenodd"
        />
      )}
    </Svg>
  );
};

export default ChevronRight;
