import {View, StyleSheet} from 'react-native';
import React from 'react';
import Card2 from '@screens/HomeScreen/components/Card2';
import ProgressPie from '@components/AppProgressPie';

const Item = () => {
  return (
    <View style={styles.container}>
      <Card2 />
      <ProgressPie progress={45} />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
