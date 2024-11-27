import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';

const BookMarks = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/no-story.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>No stories bookmarked yet</Text>
      <Text style={styles.text}>
        Start bookmarking your favorite stories to easily find them later
      </Text>
      {/* <BackgroundButton variant="yellow" wrapStyle={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Click to login</Text>
      </BackgroundButton> */}
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
