import React from 'react';
import {TIcon} from '@utils/types/meta';
import {COLORS} from '@constants/index';
import Svg, {Circle, G, Path} from 'react-native-svg';

const ViewAltLight = ({
  width = 24,
  height = 24,
  color = COLORS.lightmode.netrual[900],
}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G fill="none" stroke={color}>
        <Circle cx={12} cy={12} r={3.5} fill={color} />
        <Path d="M21 12s-1-8-9-8-9 8-9 8" />
      </G>
    </Svg>
  );
};

export default ViewAltLight;
