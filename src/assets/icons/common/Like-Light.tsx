import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TIcon} from '@utils/types/meta';
import {COLORS} from '@constants/index';

const LikeLight = ({
  width = 24,
  height = 24,
  color = COLORS.lightmode.netrual[900],
}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G fill="none">
        <Path
          fill={color}
          d="M15 10l-.74-.123a.75.75 0 00.74.873zM4 10v-.75a.75.75 0 00-.75.75zm16.522 2.392l.735.147zM6 20.75h11.36v-1.5H6zm12.56-11.5H15v1.5h3.56zm-2.82.873l.806-4.835-1.48-.247-.806 4.836zm-.92-6.873h-.214v1.5h.213zm-3.335 1.67L8.97 8.693l1.248.832 2.515-3.773zM7.93 9.25H4v1.5h3.93zM3.25 10v8h1.5v-8zm16.807 8.54l1.2-6-1.47-.295-1.2 6zM8.97 8.692a1.25 1.25 0 01-1.04.557v1.5c.92 0 1.778-.46 2.288-1.225zm7.576-3.405A1.75 1.75 0 0014.82 3.25v1.5a.25.25 0 01.246.291zm2.014 5.462c.79 0 1.38.722 1.226 1.495l1.471.294A2.75 2.75 0 0018.56 9.25zm-1.2 10a2.75 2.75 0 002.697-2.21l-1.47-.295a1.25 1.25 0 01-1.227 1.005zm-2.754-17.5a3.75 3.75 0 00-3.12 1.67l1.247.832a2.25 2.25 0 011.873-1.002zM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 006 20.75z"
        />
        <Path stroke={color} strokeWidth={1.5} d="M8 10v10" />
      </G>
    </Svg>
  );
};

export default LikeLight;
