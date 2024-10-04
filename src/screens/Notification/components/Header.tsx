import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {ASSETS, COLORS} from '@constants/index';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ASSETS.ICONS.NotificationICon />
        <Text style={styles.titleText}>Notifications</Text>
        <Text style={styles.notificationCount}>(99+)</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <ASSETS.ICONS.DoneAllIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <ASSETS.ICONS.RemoveIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomColor: COLORS.lightmode.netrual[100],
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  titleText: {
    fontSize: 32,
    fontFamily: 'UVNBayBuomHepNang_Regular',
    lineHeight: 45,
    color: COLORS.lightmode.netrual[900],
  },
  notificationCount: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: '700', // Use string for fontWeight
    lineHeight: 23,
    color: COLORS.lightmode.netrual[300],
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
});

export default Header;
