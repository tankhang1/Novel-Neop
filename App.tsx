import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComicDetail from './src/screens/ComicDetail';
import ReadComic from './src/screens/ReadComic';
import {RootStackParamList} from '@utils/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ComicDetail" component={ComicDetail} />
        <Stack.Screen name="ReadComic" component={ReadComic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
