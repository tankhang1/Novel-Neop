import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {ASSETS, COLORS} from '@constants/index';
import AppImageWrapper from '@components/AppImageWrapper';
import AppImage from '@components/AppImage';
import AppSwitch from '@components/AppSwitch';

const MyProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.avatarWrapper}>
          <AppImageWrapper
            type="AVATAR"
            source={require('@assets/images/avatar.png')}
            resizeMode="contain"
            imageStyle={styles.avatarImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <ASSETS.ICONS.EditIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.nameText}>Bryan</Text>
          <Text style={styles.changeNameText}>Change your name</Text>
        </View>
      </View>
      <View style={styles.optionsWrapper}>
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.optionContent}>
            <AppImage
              source={ASSETS.IMAGES.NotificationSettingImage}
              resizeMode="stretch"
              imageStyle={styles.optionImage}
            />
            <Text style={styles.optionText}>Notification</Text>
          </View>
          <AppSwitch />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.optionContent}>
            <AppImage
              source={ASSETS.IMAGES.SettingImage}
              resizeMode="stretch"
              imageStyle={styles.optionImage}
            />
            <Text style={styles.optionText}>Settings</Text>
          </View>
          <ASSETS.ICONS.ArrowRightIcon />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.optionContent}>
            <AppImage
              source={ASSETS.IMAGES.LogoutSettingImage}
              resizeMode="stretch"
              imageStyle={styles.optionImage}
            />
            <Text style={[styles.optionText, styles.logoutText]}>Log out</Text>
          </View>
          <ASSETS.ICONS.ArrowRightIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    backgroundColor: COLORS.lightmode.netrual[0],
    paddingVertical: 32,
  },
  avatarWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    alignSelf: 'center',
  },
  avatarImage: {
    width: 80,
    height: 80,
    zIndex: 999,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    zIndex: 999,
  },
  nameWrapper: {
    marginTop: 15,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
  },
  changeNameText: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'rgba(0, 0, 0, 1)',
  },
  optionsWrapper: {
    paddingHorizontal: 16,
    gap: 14,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  optionImage: {
    width: 47,
    height: 47,
  },
  optionText: {
    fontSize: 17,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: COLORS.lightmode.netrual[900],
  },
  logoutText: {
    color: COLORS.lightmode.error[700],
  },
});

export default MyProfileScreen;
