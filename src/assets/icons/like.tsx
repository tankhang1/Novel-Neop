import {ColorValue} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
type TBookMarkIcon = {
  stroke?: ColorValue;
  fill?: ColorValue;
};
const LikeIcon = ({...props}: TBookMarkIcon) => {
  return (
    <Svg width={15} height={16} viewBox="0 0 15 16" fill="none">
      <Path
        d="M9.035 5.9V3.1c0-.557-.224-1.091-.625-1.485A2.151 2.151 0 006.902 1L4.056 7.3V15h8.024c.343.004.676-.115.937-.333.262-.219.434-.523.485-.857l.982-6.3a1.38 1.38 0 00-.333-1.129 1.42 1.42 0 00-1.09-.481H9.035zM4.056 15H1.923c-.378 0-.74-.148-1.006-.41A1.389 1.389 0 01.5 13.6V8.7c0-.371.15-.727.417-.99.266-.263.628-.41 1.006-.41h2.133"
        fill="#090A0B"
        {...props}
      />
    </Svg>
  );
};

export default LikeIcon;
