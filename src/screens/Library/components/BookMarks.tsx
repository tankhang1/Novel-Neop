import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';
import BackgroundButton from '@assets/icons/common/Background-Button';

const BookMarks = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/no-login-library.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Log in to view your bookmarks, purchased stories, and more.
      </Text>
      <BackgroundButton variant="yellow" wrapStyle={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Click to login</Text>
      </BackgroundButton>
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
    width: 264,
    height: 190,
  },
  text: {
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[300],
    fontSize: 13,
    letterSpacing: 1,
    width: '70%',
    textAlign: 'center',
    lineHeight: 18,
    opacity: 0.5,
  },
  buttonWrapper: {
    width: 183,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  buttonText: {
    fontSize: 14,
    color: COLORS.lightmode.netrual[900],
    fontFamily: 'Montserrat-SemiBold',
  },
  bottomSpacing: {
    height: 150,
  },
});

export default BookMarks;
