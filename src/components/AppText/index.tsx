import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import React from 'react';

type TAppText = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  numberOfLines?: number;
};
const AppText = ({style, children, numberOfLines}: TAppText) => {
  return (
    <Text
      children={children}
      style={[styles.globalText, style]}
      numberOfLines={numberOfLines}
    />
  );
};

export default AppText;
const styles = StyleSheet.create({
  globalText: {
    fontFamily: 'Oregano-Regular',
  },
});
