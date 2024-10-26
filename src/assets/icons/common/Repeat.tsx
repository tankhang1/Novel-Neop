import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TIcon} from '@utils/types/meta';

const Repeat = ({width = 16, height = 16}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fillRule="evenodd"
        d="M5.905.28A8 8 0 0114.5 3.335V1.75a.75.75 0 011.5 0V6h-4.25a.75.75 0 010-1.5h1.727a6.5 6.5 0 10.526 5.994.75.75 0 111.385.575A8 8 0 115.905.279z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default Repeat;
