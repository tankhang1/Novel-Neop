import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TIcon} from '@utils/types/meta';
import {COLORS} from '@constants/index';

const Edit = ({
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
        strokeWidth={1.5}
        d="M5 16l-1 4 4-1L19.586 7.414a2 2 0 000-2.828l-.172-.172a2 2 0 00-2.828 0zM15 6l3 3m-5 11h8"
      />
    </Svg>
  );
};

export default Edit;
