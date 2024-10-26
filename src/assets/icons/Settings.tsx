import {TIcon} from '@utils/types/meta';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Settings = ({color = '#000', width = 32, height = 32}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M3.556 16.667c0-5.971 0-8.958 1.854-10.812C7.265 4 10.25 4 16.222 4c5.971 0 8.958 0 10.812 1.855 1.855 1.854 1.855 4.84 1.855 10.812 0 5.97 0 8.957-1.855 10.812-1.854 1.854-4.84 1.854-10.812 1.854-5.97 0-8.957 0-10.812-1.854-1.854-1.855-1.854-4.84-1.854-10.812z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.556 12a2 2 0 10-4 0 2 2 0 004 0zm0 0h9.333m-4 9.333a2 2 0 114 0 2 2 0 01-4 0zm0 0H9.556"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Settings;
