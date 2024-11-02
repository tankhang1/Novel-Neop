import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  View,
} from 'react-native';
import React from 'react';
import AppImageWrapper from '@components/AppImageWrapper';
import {COLORS} from '@constants/index';
import CloseX from '@assets/icons/common/CloseX';
import Animated, {FadeIn} from 'react-native-reanimated';
import ViewAltLight from '@assets/icons/common/View-Alt-Light';
import MenuIcon from '@assets/icons/common/Menu';

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
      <View style={styles.itemContainer}>
        <Text style={styles.text}>{label}</Text>
        <View style={styles.rowContainer}>
          <View style={styles.iconTextContainer}>
            <MenuIcon width={20} color="gray" />
            <Text style={styles.text}>653</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <ViewAltLight width={14} />
            <Text style={styles.text}>200k</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onClose}>
        <CloseX />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  itemContainer: {flex: 1, gap: 5},
  image: {
    width: 30,
    height: 40,
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    color: COLORS.lightmode.netrual[700],
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    gap: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    height: 20,
  },
});

export default Item;
