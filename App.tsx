import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComicDetail from './src/screens/ComicDetail';
import ReadComic from './src/screens/ReadComic';
import {RootStackParamList} from '@utils/types/navigation';
import {View} from 'react-native';
import AnimatedBootSplash from '@screens/AnimatedBootSplash';
import LoginScreen from '@screens/Login';
import SearchScreen from '@screens/SearchScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  const [visible, setVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1}}>
      {visible ? (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false);
          }}
          isReady={isReady}
        />
      ) : (
        <NavigationContainer
          onReady={() => {
            setTimeout(() => {
              setVisible(false);
            }, 2500);
          }}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ComicDetail" component={ComicDetail} />
            <Stack.Screen name="ReadComic" component={ReadComic} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
};

export default App;
