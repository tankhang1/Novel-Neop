import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';

const Offline = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/no-offline.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>No stories downloaded</Text>
      <Text style={styles.text}>Download stories to enjoy them offline</Text>

      <View style={styles.bottomSpacing} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 14,
  },
  image: {
    width: 214,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    color: COLORS.lightmode.netrual[700],
  },
  text: {
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[300],
    fontSize: 15,
    letterSpacing: 1,
    width: '90%',
    textAlign: 'center',
  },
  buttonImage: {
    width: 220,
    height: 48,
  },
  bottomSpacing: {
    height: 150,
  },
});

export default Offline;
