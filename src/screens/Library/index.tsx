import React, {useCallback} from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {TopLibraryTabParamList} from '@utils/types/navigation';
import BookMarks from './components/BookMarks';
import Offline from './components/Offline';
import Owned from './components/Owned';
import MyTabBar from './components/MyTabBar';
import {SafeAreaView} from 'react-native';

const Tab = createMaterialTopTabNavigator<TopLibraryTabParamList>();

const LibraryScreen: React.FC = () => {
  const customTopTab = useCallback((props: MaterialTopTabBarProps) => {
    return <MyTabBar {...props} />;
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator tabBar={customTopTab}>
        <Tab.Screen name="BookMarks" component={BookMarks} />
        <Tab.Screen name="Owned" component={Owned} />
        <Tab.Screen name="Offline" component={Offline} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default LibraryScreen;
