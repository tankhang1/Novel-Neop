import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TIcon} from '@utils/types/meta';
import {COLORS} from '@constants/index';

const NotificationBellCheck = ({
  width = 24,
  height = 24,
  color = COLORS.lightmode.netrual[900],
}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M21.003 15.578a7 7 0 00-.87-1.57 4.1 4.1 0 01-.89-1.88c0-2.89 0-3.87-1.58-5.76a5.8 5.8 0 00-1.9-1.47l-.73-.35a.3.3 0 01-.1-.1.23.23 0 01-.05-.1 2.77 2.77 0 00-2.93-2.34 2.77 2.77 0 00-2.84 2.29.3.3 0 01-.07.14.3.3 0 01-.09.08l-.78.38a5.6 5.6 0 00-1.91 1.48c-1.57 1.88-1.57 2.86-1.57 5.75a3.84 3.84 0 01-.82 1.77 6.6 6.6 0 00-.88 1.62 2.79 2.79 0 00.26 2.37 2.24 2.24 0 001.94.85h2.82q.065.404.22.78c.198.497.498.947.88 1.32.37.38.816.677 1.31.87.46.188.953.287 1.45.29h.16a4 4 0 002.79-1.16 4 4 0 00.87-1.31q.152-.384.23-.79h2.94a2.4 2.4 0 001-.23 2.4 2.4 0 00.88-.76c.226-.322.364-.698.4-1.09a2.2 2.2 0 00-.14-1.08m-6-5.28l-2.81 2.83c-.113.124-.253.22-.41.28a1.2 1.2 0 01-.49.1 1.26 1.26 0 01-.91-.38l-1.41-1.4a.75.75 0 010-1.06.74.74 0 011.06 0l1.26 1.25 2.68-2.68a.75.75 0 111.06 1.06z"
      />
    </Svg>
  );
};

export default NotificationBellCheck;