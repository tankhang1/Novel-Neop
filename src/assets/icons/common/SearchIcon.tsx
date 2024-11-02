import {TIcon} from '@utils/types/meta';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = ({
  color = '#090A0B',
  width = 30,
  height = 31,
  strokeWidth = 2,
}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 31" fill="none">
      <Path
        d="M13.75 24.25c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM26.25 26.75l-5.438-5.438"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
