import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';

const Offline = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/no-offline.png')}
        style={styles.image}
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
    opacity: 0.5,
  },
  image: {
    width: 214,
    height: 200,
  },
  title: {
    color: COLORS.lightmode.primary[600],
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
    lineHeight: 33,
  },
  text: {
    color: COLORS.lightmode.netrual[300],
    fontSize: 16,
    letterSpacing: 1,
    width: '70%',
    textAlign: 'center',
    lineHeight: 22,
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
