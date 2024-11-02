import {TIcon} from '@utils/types/meta';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MenuDotSquare = ({color = '#090A0B', height = 32, width = 32}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M11.6 16.666h.011m5.062 0h.01m5.039 0h.011"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 16.667C4 10.696 4 7.71 5.854 5.854 7.711 4 10.696 4 16.667 4c5.97 0 8.956 0 10.81 1.854 1.856 1.857 1.856 4.842 1.856 10.813 0 5.97 0 8.956-1.855 10.81-1.854 1.856-4.84 1.856-10.811 1.856s-8.957 0-10.813-1.855C4 25.624 4 22.638 4 16.667z"
        stroke={color}
        strokeWidth={1.5}
      />
    </Svg>
  );
};

export default MenuDotSquare;
