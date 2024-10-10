import {ColorValue} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '@constants/index';

type TBookMarkIcon = {
  stroke?: ColorValue;
  fill?: ColorValue;
};
const BookMarkIcon = ({...props}: TBookMarkIcon) => {
  return (
    <Svg width={10} height={14} viewBox="0 0 10 14" fill="none">
      <Path
        d="M10 12.27c0 .704-.81 1.1-1.366.668L5.52 10.515a.846.846 0 00-1.04 0l-3.114 2.423A.846.846 0 010 12.27V1.556c0-.413.15-.809.418-1.1A1.372 1.372 0 011.428 0h7.143c.38 0 .743.164 1.01.456.268.291.419.687.419 1.1V12.27z"
        fill={COLORS.lightmode.netrual[500]}
        {...props}
      />
    </Svg>
  );
};

export default BookMarkIcon;
