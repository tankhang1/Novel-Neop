import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';

type TAppHeader = {
  title: string;
  leftSection: React.ReactNode;
  rightSection: React.ReactNode;
};
const AppHeader = ({title, leftSection, rightSection}: TAppHeader) => {
  return (
    <View style={styles.overall}>
      {leftSection}
      <Text style={styles.title}>{title}</Text>
      {rightSection}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  overall: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 32,
    color: COLORS.lightmode.netrual[900],
    fontFamily: 'UVNBayBuomHepNang-Regular',
  },
});
