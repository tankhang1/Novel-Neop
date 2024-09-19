import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppWrapper from '@components/AppWrapper';
import {HEIGHT, WIDTH} from '@constants/index';
import Line from '@assets/icons/line.svg';
import Animated, {
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@utils/types/navigation';
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen = ({navigation}: Props) => {
  const [type, setType] = useState<'SIGN_IN' | 'SIGN_UP'>('SIGN_IN');
  const translateX = useSharedValue(0);
  const btnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: interpolate(translateX.value, [0, 1], [0, WIDTH / 2])},
      ],
    };
  });

  const onNavHomeScreen = () => {
    navigation.navigate('Home');
  };
  useEffect(() => {
    if (type === 'SIGN_IN') {
      translateX.value = withTiming(0);
    } else {
      translateX.value = withTiming(1);
    }
  }, [type, translateX]);

  return (
    <AppWrapper>
      <View style={styles.overall}>
        <View style={styles.wrapper}>
          <Image
            source={require('@assets/images/large_logo.png')}
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>
              Welcome to <Text style={{color: '#EBBC5D'}}>Novel!</Text>
            </Text>
            <Text style={styles.description}>
              Dive into the amazing world of comics today!
            </Text>
          </View>
        </View>
        <ImageBackground
          source={require('@assets/images/mask.png')}
          style={styles.bottomSheet}
          resizeMode="stretch">
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setType('SIGN_IN')}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setType('SIGN_UP')}>
              <Text style={styles.btnText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Animated.View style={[styles.indicatorWrapper, btnAnimatedStyle]}>
              <View style={styles.indicator} />
            </Animated.View>
            <Line />
          </View>
          <View style={styles.socialBtnWrapper}>
            <TouchableOpacity onPress={onNavHomeScreen}>
              <Image
                source={require('@assets/images/btn-facebook.png')}
                style={styles.btnSocial}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onNavHomeScreen}>
              <Image
                source={require('@assets/images/btn-google.png')}
                style={styles.btnSocial}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onNavHomeScreen}>
              <Image
                source={require('@assets/images/btn-apple.png')}
                style={styles.btnSocial}
              />
            </TouchableOpacity>
          </View>
          {type === 'SIGN_IN' && (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              style={styles.orWrapper}>
              <Line width={'40%'} />
              <Text style={styles.orText}>Or login with</Text>
              <Line width={'40%'} />
            </Animated.View>
          )}
          <View
            style={[
              styles.guessBtnWrapper,
              type === 'SIGN_UP' && styles.guessBtnSignUpWrapper,
            ]}>
            {type === 'SIGN_IN' && (
              <AnimatedTouchable
                onPress={onNavHomeScreen}
                entering={FadeIn}
                exiting={FadeOut}>
                <Image
                  source={require('@assets/images/btn-guess.png')}
                  style={styles.btnSocial}
                />
              </AnimatedTouchable>
            )}
            <TouchableOpacity>
              <Text style={styles.linkBtn}>You can’t login? Report</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.termWrapper}>
            <TouchableOpacity>
              <Text style={styles.linkBtn}>Terms and Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkBtn}>Provacy Policy</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </AppWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    gap: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'flex-end',
    flex: 1,
  },
  logo: {width: 90, height: 90},
  title: {
    color: '#000000',
    fontSize: 37,
    fontFamily: 'UVNBayBuomHepNang',
    fontWeight: '600',
  },
  description: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'normal',
    fontFamily: 'UVNBayBuomHepNang',
  },
  bottomSheet: {
    width: WIDTH,
    height: HEIGHT * 0.65,
    paddingVertical: 20,
  },
  btnWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  btn: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {fontFamily: 'UVNBayBuomHepNang', fontSize: 23, color: '#181818'},
  indicatorWrapper: {
    width: WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: '60%',
    height: 2.25,
    backgroundColor: '#EBBC5D',
  },
  orText: {fontFamily: 'UVNBayBuomHepNang', fontSize: 11, color: '#4E4E4E'},
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  socialBtnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 25,
  },
  btnSocial: {
    width: 312,
    height: 57,
  },
  guessBtnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  guessBtnSignUpWrapper: {
    justifyContent: 'flex-start',
    paddingTop: 0,
    flex: 1,
  },
  linkBtn: {
    color: '#75B0E7',
    fontSize: 12,
    textDecorationLine: 'underline',
    fontFamily: 'Lora',
  },
  termWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  overall: {flex: 1, justifyContent: 'space-between'},
});
