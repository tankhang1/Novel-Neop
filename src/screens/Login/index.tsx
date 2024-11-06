import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppWrapper from '@components/AppWrapper';
import {COLORS, HEIGHT, WIDTH} from '@constants/index';
import Line from '@assets/icons/line.svg';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@utils/types/navigation';
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen = ({navigation}: Props) => {
  const onNavHomeScreen = () => {
    navigation.navigate('Main');
  };

  return (
    <AppWrapper isAreaView={false}>
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
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.orWrapper}>
            <Line width={'40%'} />
            <Text style={styles.orText}>Or login with</Text>
            <Line width={'40%'} />
          </Animated.View>
          <View style={[styles.guessBtnWrapper]}>
            <AnimatedTouchable
              onPress={onNavHomeScreen}
              entering={FadeIn}
              exiting={FadeOut}>
              <Image
                source={require('@assets/images/btn-guess.png')}
                style={styles.btnSocial}
              />
            </AnimatedTouchable>
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
    justifyContent: 'flex-end',
    flex: 1,
  },
  logo: {width: 77, height: 77},
  title: {
    color: '#000000',
    fontSize: 36,
    fontFamily: 'Oregano-Regular',
    fontWeight: '600',
  },
  description: {
    color: COLORS.lightmode.netrual[900],
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  bottomSheet: {
    height: HEIGHT * 0.5,
    width: WIDTH,
    paddingTop: 10,
    marginTop: 10,
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
  btnText: {
    fontFamily: 'Oregano-Regular',
    fontSize: 23,
    color: '#181818',
  },
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
  orText: {
    fontFamily: 'Oregano-Regular',
    fontSize: 11,
    color: '#4E4E4E',
  },
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
