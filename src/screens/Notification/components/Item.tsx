import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AppImageWrapper from '@components/AppImageWrapper';
import {COLORS} from '@constants/index';
import Swipeable from 'react-native-gesture-handler/Swipeable';
type TItem = {
  onDeleteClick: () => void;
};
const Item = ({onDeleteClick}: TItem) => {
  const renderRightActions = () => (
    <TouchableOpacity style={styles.rightAction} onPress={onDeleteClick}>
      <Image
        source={require('@assets/images/delete-btn-bg.png')}
        style={styles.deleteButtonImage}
      />
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions} overshootLeft={false}>
      <View style={styles.container}>
        <AppImageWrapper
          type="YELLOW"
          source={require('@assets/images/card_1.png')}
          resizeMode="stretch"
          imageStyle={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>New Chapter Released!</Text>
            <Text style={styles.time}>1 minute ago</Text>
          </View>
          <Text style={styles.description}>
            Chapter 312 of First Immortal of the Sword is now live. Continue
            reading?
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightmode.netrual[100],
    backgroundColor: 'white',
  },
  image: {
    width: 52,
    height: 70,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8, // added margin to create space between image and text
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'UVNBayBuomHepNang_Regular',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 1,
    color: COLORS.lightmode.netrual[900],
  },
  time: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 1,
    color: COLORS.lightmode.netrual[500],
  },
  description: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    lineHeight: 17,
    color: COLORS.lightmode.netrual[900],
    letterSpacing: 1,
  },
  rightAction: {
    justifyContent: 'center', // Center the delete button vertically
    alignItems: 'flex-end', // Align the delete button to the right
    width: 88, // Set fixed width for the button
  },
  deleteButtonImage: {
    width: '100%', // Fill the width of the TouchableOpacity
    height: '100%', // Fill the height of the TouchableOpacity
    resizeMode: 'contain',
  },
});
