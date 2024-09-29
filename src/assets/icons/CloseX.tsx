import {TIcon} from '@utils/types/meta';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
const CloseX = ({
  color = '#626576',
  width = 30,
  height = 30,
}: Partial<TIcon>) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
      <Path
        d="M19.779 10.23a.756.756 0 00-1.07 0L15 13.93l-3.709-3.708a.757.757 0 00-1.07 1.069L13.931 15l-3.71 3.709a.757.757 0 001.07 1.07L15 16.069l3.709 3.71a.757.757 0 001.07-1.07L16.069 15l3.71-3.709a.76.76 0 000-1.062z"
        fill={color}
      />
    </Svg>
  );
};

export default CloseX;
