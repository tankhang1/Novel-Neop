import {ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import React, {memo, useState} from 'react';
import {ASSETS, WIDTH} from '@constants/index';
import AppImageWrapper from '@components/AppImageWrapper';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const BottomTabs = [
  {
    key: 'HOME',
    active: ASSETS.ICONS.HomeActiveIcon,
    inactive: ASSETS.ICONS.HomeInActiveIcon,
    nav: 'Home',
  },
  {
    key: 'LIBRARY',
    active: ASSETS.ICONS.LibraryActiveIcon,
    inactive: ASSETS.ICONS.LibraryInActiveIcon,
    nav: 'Library',
  },
  {
    key: 'COMMIC',
    url: require('@assets/images/card-8.png'),
  },
  {
    key: 'NOTIFICATION',
    active: ASSETS.ICONS.NotificationActiveIcon,
    inactive: ASSETS.ICONS.NotificationInActiveIcon,
    nav: 'Notification',
  },
  {
    key: 'PROFILE',
    active: ASSETS.ICONS.ProfileActiveIcon,
    inactive: ASSETS.ICONS.ProfileInActiveIcon,
    nav: 'MyProfile',
  },
];

const CustomBottomTab = ({navigation}: BottomTabBarProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const onTabClick = (index: number) => {
    setTabIndex(index);
    if (BottomTabs[index]?.nav) {
      navigation.navigate(BottomTabs[index].nav);
    }
  };

  return (
    <ImageBackground
      source={require('@assets/images/bottom-bg.png')}
      style={styles.background}
      resizeMode="stretch">
      {BottomTabs.map((tab, index) => {
        if (tab.key === 'COMMIC') {
          return (
            <TouchableOpacity key={tab.key} style={styles.tabContainer}>
              <AppImageWrapper
                source={tab.url}
                resizeMode="stretch"
                imageStyle={styles.commicImage}
              />
            </TouchableOpacity>
          );
        }

        const ActiveIcon = tab.active!;
        const InActiveIcon = tab.inactive!;

        return (
          <TouchableOpacity
            hitSlop={10}
            key={tab.key}
            style={styles.tabContainer}
            onPress={() => onTabClick(index)}>
            {tabIndex === index ? <ActiveIcon /> : <InActiveIcon />}
          </TouchableOpacity>
        );
      })}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WIDTH,
    height: 120,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commicImage: {
    width: 60,
    height: 88,
    position: 'absolute',
    top: -10,
  },
});

export default memo(CustomBottomTab);
