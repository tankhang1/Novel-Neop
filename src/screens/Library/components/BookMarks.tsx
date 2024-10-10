import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/index';

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
      <TouchableOpacity>
        <Image
          source={require('@assets/images/click-login-btn.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
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
    color: COLORS.lightmode.netrual[300],
    fontSize: 13,
    letterSpacing: 1,
    width: '70%',
    textAlign: 'center',
    lineHeight: 18,
    opacity: 0.5,
  },
  buttonImage: {
    width: 220,
    height: 48,
  },
  bottomSpacing: {
    height: 150,
  },
});

export default BookMarks;
