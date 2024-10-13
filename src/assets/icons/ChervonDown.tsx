import {TIcon} from '@utils/types/meta';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ChervonDown = ({width = 14, height = 14, color = '#22262B'}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        d="M3.5 5.25L7 8.75l3.5-3.5"
        stroke={color}
        strokeWidth={1.05}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChervonDown;
