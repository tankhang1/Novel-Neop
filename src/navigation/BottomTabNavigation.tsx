import React, {useCallback} from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import {BottomTabParamList} from '@utils/types/navigation';
import CustomBottomTab from './components/CustomBottomTab';
import LibraryScreen from '@screens/Library';
import NotificationScreen from '@screens/Notification';
import MyProfileScreen from '@screens/MyProfile';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const BottomTabNavigation = () => {
  const customBottomTab = useCallback((props: BottomTabBarProps) => {
    return <CustomBottomTab {...props} />;
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}
      tabBar={customBottomTab}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{unmountOnBlur: false}}
      />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="MyProfile" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
