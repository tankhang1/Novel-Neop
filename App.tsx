import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import AnimatedBootSplash from '@screens/AnimatedBootSplash';
import AppNavigation from '@navigation/AppNavigation';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import {PortalProvider} from '@gorhom/portal';
dayjs.extend(relativeTime);
const App = () => {
  const [visible, setVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  }, []);
  return (
    <PortalProvider>
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
            <AppNavigation />
          </NavigationContainer>
        )}
      </View>
    </PortalProvider>
  );
};

export default App;
