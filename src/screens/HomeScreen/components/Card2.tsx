import {ImageStyle, StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import React from 'react';
import AppImage from '@components/AppImage';
import AppText from '@components/AppText';
import Tag from './Tag';

type TCard2 = {
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
};

const Card2 = ({imageStyle, titleStyle, subTitleStyle}: TCard2) => {
  return (
    <View style={styles.cardContainer}>
      <AppImage
        source={require('../../../assets/images/card_1.png')}
        imageStyle={[styles.image, imageStyle]}
        resizeMode="stretch"
      />
      <View>
        <AppText style={[styles.title, titleStyle]}>Phàm Nhân Tu Tiên</AppText>
        <View style={styles.subtitleContainer}>
          <AppImage
            source={require('../../../assets/images/pen.png')}
            resizeMode="contain"
            imageStyle={styles.penIcon}
          />
          <AppText style={[styles.subTitle, subTitleStyle]}>Vong ngữ</AppText>
        </View>
        <View style={styles.tagContainer}>
          <Tag
            content="Tiên Hiệp"
            wrapperStyle={styles.tagWrapper}
            textStyle={styles.tagText}
          />
          <Tag
            content="Hoàn thành"
            wrapperStyle={styles.tagWrapper}
            textStyle={styles.tagText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  image: {
    width: 76,
    height: 100,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  subtitleContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  penIcon: {
    width: 16,
    height: 16,
  },
  subTitle: {
    color: 'black',
    fontSize: 12,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tagWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    color: 'white',
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
});

export default Card2;
