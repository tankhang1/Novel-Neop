import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import AppImageWrapper from '@components/AppImageWrapper';
import {COLORS} from '@constants/index';
import CloseX from '@assets/icons/CloseX';
import Animated, {FadeIn} from 'react-native-reanimated';

type TItem = {
  source: ImageSourcePropType;
  label: string;
  index: number;
  onClose: () => void;
};
const Item = ({label, onClose, source, index}: TItem) => {
  return (
    <Animated.View entering={FadeIn.delay(index * 50)} style={styles.container}>
      <AppImageWrapper
        source={source}
        imageStyle={styles.image}
        resizeMode="stretch"
      />
      <Text style={styles.text}>{label}</Text>
      <TouchableOpacity onPress={onClose}>
        <CloseX />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  image: {
    width: 30,
    height: 40,
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    color: COLORS.lightmode.netrual[500],
    flex: 1,
  },
});

export default Item;
