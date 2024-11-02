import React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text,
  Mask,
  Rect,
} from 'react-native-svg';

type TAppTextGradient = {
  content?: string;
  width?: number;
  height?: number;
};

const AppTextGradient = ({content, width, height}: TAppTextGradient) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Defs>
        <LinearGradient
          id="paint0_linear_61_2145"
          x1="0"
          y1="0"
          x2={width}
          y2="0"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F0CA4D" />
          <Stop offset={0.265} stopColor="#FAE474" />
          <Stop offset={0.515} stopColor="#E1AD26" />
          <Stop offset={0.776} stopColor="#F8E370" />
          <Stop offset={1} stopColor="#E2B033" />
        </LinearGradient>

        {/* Create a mask using the text */}
        <Mask id="mask0">
          <Text
            x={15}
            y={20 + (height ?? 48) / 4.7}
            fontFamily="UVNBayBuomHepNang-Regular"
            fontSize={17}
            letterSpacing={4}
            fontWeight="bold"
            fill="white">
            {content}
          </Text>
        </Mask>
      </Defs>

      {/* Apply the gradient within the mask */}
      <Rect
        x={15}
        y="0"
        width={width}
        height={height}
        fill="url(#paint0_linear_61_2145)"
        mask="url(#mask0)"
      />
    </Svg>
  );
};

export default AppTextGradient;
