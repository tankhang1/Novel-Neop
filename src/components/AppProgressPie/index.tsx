import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const ProgressPie = ({progress}: {progress: number}) => {
  const radius = 20.5;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <View
      style={[
        {width: radius * 2 + strokeWidth, height: radius * 2 + strokeWidth},
        styles.container,
      ]}>
      <Svg
        width={radius * 2 + strokeWidth}
        height={radius * 2 + strokeWidth}
        viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`}>
        {/* Background circle */}
        <Circle
          stroke="#e6e6e6" // Light grey background
          fill="none"
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Foreground progress circle */}
        <Circle
          stroke="#c69016" // Progress color
          fill="none"
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference} // Full length of the circle
          strokeDashoffset={strokeDashoffset} // Progress based offset
          strokeLinecap="round" // Rounded edges
          rotation="-90" // Start from the top
          origin={`${radius + strokeWidth / 2}, ${radius + strokeWidth / 2}`} // Rotate from the center
        />
      </Svg>
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  progressText: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProgressPie;
