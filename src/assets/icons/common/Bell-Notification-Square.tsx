import {COLORS} from '@constants/index';
import {TIcon} from '@utils/types/meta';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BellNotificationSquare = ({
  width = 24,
  height = 24,
  color = COLORS.lightmode.netrual[900],
}: TIcon) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M15.25 2.02h-6.5A6.76 6.76 0 002 8.77v6.46a6.76 6.76 0 006.75 6.75h6.5A6.76 6.76 0 0022 15.23v-6.5a6.76 6.76 0 00-6.75-6.71m2 13.12a.5.5 0 01-.08.23.26.26 0 01-.15.12.5.5 0 01-.24 0H7.23c-.18 0-.33 0-.37-.09a.8.8 0 010-.57q.183-.444.47-.83a3.5 3.5 0 00.78-1.92c0-2 0-2.28.82-3.26a3 3 0 01.93-.72l.57-.28a1.24 1.24 0 00.48-.4c.15-.178.25-.391.29-.62a.77.77 0 01.26-.46.74.74 0 01.45-.15h.15a.9.9 0 01.28 0 .8.8 0 01.23.13.68.68 0 01.27.48c.044.2.126.39.24.56.129.187.3.342.5.45l.55.27c.358.17.676.416.93.72.82 1 .82 1.29.82 3.26.078.735.37 1.43.84 2q.295.402.49.86a.34.34 0 01.02.22zm-3.53 2.23c-.216.222-.48.392-.77.5a2.3 2.3 0 01-.94.17 3 3 0 01-.89-.16 2.32 2.32 0 01-1.21-1.16h4.25a2 2 0 01-.46.65z"
      />
    </Svg>
  );
};

export default BellNotificationSquare;
