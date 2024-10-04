import {Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ASSETS, COLORS} from '@constants/index';
import AppImageWrapper from '@components/AppImageWrapper';
import AppImage from '@components/AppImage';

const MyProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        gap: 32,
        backgroundColor: COLORS.lightmode.netrual[0],
        paddingVertical: 32,
      }}>
      <View
        style={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,
          alignSelf: 'center',
        }}>
        <AppImageWrapper
          type="AVATAR"
          source={require('@assets/images/avatar.png')}
          resizeMode="contain"
          imageStyle={{
            width: 80,
            height: 80,
            zIndex: 999,
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: 5,
            zIndex: 999,
          }}>
          <ASSETS.ICONS.EditIcon />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 16, gap: 14}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{gap: 14, flexDirection: 'row', alignItems: 'center'}}>
            <AppImage
              source={ASSETS.IMAGES.NotificationSettingImage}
              resizeMode="stretch"
              imageStyle={{width: 47, height: 47}}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Montserrat',
                color: COLORS.lightmode.netrual[900],
                fontWeight: '600',
              }}>
              Notification
            </Text>
          </View>
          <Switch style={{width: 51, height: 31}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{gap: 14, flexDirection: 'row', alignItems: 'center'}}>
            <AppImage
              source={ASSETS.IMAGES.SettingImage}
              resizeMode="stretch"
              imageStyle={{width: 47, height: 47}}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Montserrat',
                color: COLORS.lightmode.netrual[900],
                fontWeight: '600',
              }}>
              Settings
            </Text>
          </View>
          <ASSETS.ICONS.ArrowRightIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{gap: 14, flexDirection: 'row', alignItems: 'center'}}>
            <AppImage
              source={ASSETS.IMAGES.LogoutSettingImage}
              resizeMode="stretch"
              imageStyle={{width: 47, height: 47}}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Montserrat',
                color: COLORS.lightmode.error[700],
                fontWeight: '600',
              }}>
              Log out
            </Text>
          </View>
          <ASSETS.ICONS.ArrowRightIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyProfileScreen;
