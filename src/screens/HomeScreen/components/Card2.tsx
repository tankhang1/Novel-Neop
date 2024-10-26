import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import AppImage from '@components/AppImage';
import AppText from '@components/AppText';
import Tag from './Tag';
import AppImageWrapper from '@components/AppImageWrapper';
import {ASSETS, COLORS} from '@constants/index';

type TCard2 = {
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  rightSectionStyle?: StyleProp<ViewStyle>;
  isReview?: boolean;
};

const Card2 = ({
  imageStyle,
  titleStyle,
  subTitleStyle,
  rightSectionStyle,
  isReview = true,
}: TCard2) => {
  return (
    <View style={styles.cardContainer}>
      <AppImageWrapper
        source={require('../../../assets/images/journey_banner.png')}
        imageStyle={[styles.image, imageStyle]}
        resizeMode="cover"
        type="YELLOW"
      />
      <View style={styles.contentContainer}>
        <View style={rightSectionStyle}>
          <AppText style={[styles.title, titleStyle]}>
            Journey to the West
          </AppText>
          <View style={styles.subtitleContainer}>
            <AppImage
              source={require('../../../assets/images/pen.png')}
              resizeMode="contain"
              imageStyle={styles.penIcon}
            />
            <AppText style={[styles.subTitle, subTitleStyle]}>Unknown</AppText>
          </View>
          <View style={styles.tagContainer}>
            <Tag
              content="Wuxia"
              wrapperStyle={styles.tagWrapper}
              textStyle={[styles.tagText, subTitleStyle]}
            />
            <Tag
              content="Fantasy"
              wrapperStyle={styles.tagWrapper}
              textStyle={[styles.tagText, subTitleStyle]}
            />
          </View>
        </View>
        <View style={{flex: 1}} />
        {isReview && (
          <View style={styles.rowContainer}>
            <View style={styles.iconTextContainer}>
              <ASSETS.ICONS.MenuIcon width={25} color="gray" />
              <Text style={styles.text}>653</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <ASSETS.ICONS.EyeIcon width={14} />
              <Text style={styles.text}>200k</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  image: {
    width: 76,
    height: 100,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'UVNBayBuomHep_Bold',
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
    fontFamily: 'UVNBayBuomHepNang_Regular',
    fontSize: 14,
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
    fontFamily: 'UVNBayBuomHep_Bold',
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: COLORS.lightmode.netrual[500],
  },
  contentContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default Card2;
