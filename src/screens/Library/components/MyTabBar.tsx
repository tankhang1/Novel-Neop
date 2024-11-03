import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {ASSETS, COLORS, WIDTH} from '@constants/index';

const TOP_TAB = [
  {
    key: 'BookMarks',
    title: 'BookMarks',
    nav: 'BookMarks',
  },
  {
    key: 'Owned',
    title: 'Owned',
    nav: 'Owned',
  },
  {
    key: 'Offline',
    title: 'Offline',
    nav: 'Offline',
  },
];

const MyTabBar: React.FC<MaterialTopTabBarProps> = ({navigation, state}) => {
  const [tab, setTab] = useState(0);
  const transX = useSharedValue(0);

  const indicatorAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            transX.value,
            [0, 1, 2],
            [0, WIDTH / 3, (WIDTH * 2) / 3],
          ),
        },
      ],
    };
  });

  useEffect(() => {
    setTab(state.index);
    transX.value = withSpring(state.index);
  }, [state, transX]);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      resizeMode="stretch"
      source={require('@assets/images/background_2.png')}>
      <View style={styles.tabContainer}>
        {TOP_TAB.map((route, index) => (
          <TouchableOpacity
            onPress={() => {
              setTab(index);
              transX.value = withSpring(index);
              navigation.navigate(route.nav);
            }}
            style={styles.tabButton}
            key={index}>
            <Text
              style={[
                styles.tabText,
                tab === index ? styles.activeTabText : styles.inactiveTabText,
              ]}>
              {route.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Animated.View
          style={[styles.indicatorContainer, indicatorAnimatedStyle]}>
          <ASSETS.ICONS.TopTabIndicatorIcon />
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: 90,
    width: WIDTH,
    justifyContent: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 22,
    fontFamily: 'Kings-Regular',
  },
  activeTabText: {
    color: COLORS.lightmode.primary[600],
  },
  inactiveTabText: {
    color: COLORS.lightmode.netrual[25],
  },
  indicatorContainer: {
    width: WIDTH / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTabBar;
