import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@utils/types/navigation';
import LoginScreen from '@screens/Login';
import BottomTabNavigation from './BottomTabNavigation';
import ComicDetail from '@screens/ComicDetail';
import ReadComic from '@screens/ReadComic';
import SearchScreen from '@screens/SearchScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={BottomTabNavigation} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
      <Stack.Screen name="ReadComic" component={ReadComic} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;