import {
  FlatList,
  StyleSheet,
  View,
  ListRenderItemInfo,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {startTransition, useEffect, useState} from 'react';
import AppImage from '@components/AppImage';
import AppCarousel from '@components/AppCarousel';
import Categories from './Categories';
import Title from './components/Title';
import Card from './components/Card';
import AppText from '@components/AppText';
import Card2 from './components/Card2';
import AppWrapper from '@components/AppWrapper';
import IconRight from '@assets/icons/arrow-right.svg';
import {COLORS} from '@constants/index';
import {RootStackParamList} from '@utils/types/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SearchIcon from '@assets/icons/SearchIcon';
type TComic = {
  image: any;
  label: string;
};
const ListComic = [
  {
    image: require('@assets/images/card_1.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('@assets/images/card_2.png'),
    label: 'Cử Đầu Vọng Minh Nguyệt',
  },
  {
    image: require('@assets/images/card_3.png'),
    label: 'Chiến Thần Trừ Yêu Dẹp Loạn',
  },
  {
    image: require('@assets/images/card_4.png'),
    label: 'Tiểu Gia Là Siêu Cấp Thiên Tài',
  },
  {
    image: require('@assets/images/card_5.png'),
    label: 'Thần Lộ',
  },
  {
    image: require('@assets/images/card_6.png'),
    label: 'Nhật Ký Của Tôi Và Em Trai',
  },
];
const ListComicNew = [
  {
    image: require('@assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('@assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('@assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('@assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('@assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('@assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('@assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('@assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
];
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen = ({navigation}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const renderCommicPopularItem = ({
    item,
    index,
  }: ListRenderItemInfo<TComic>) => {
    return (
      <Card
        {...item}
        key={index}
        onPress={() => {
          //@ts-ignore
          navigation.navigate('ComicDetail');
        }}
      />
    );
  };
  const renderCommicDoneItem = ({item, index}: ListRenderItemInfo<TComic>) => {
    return (
      <Card
        {...item}
        key={index}
        imageStyle={styles.newsItemImage}
        wrapperStyle={styles.newsItemWrapper}
        numberOfLines={2}
      />
    );
  };
  const renderCommicNewsItem = ({item, index}: ListRenderItemInfo<TComic>) => {
    return (
      <Card
        {...item}
        key={index}
        imageStyle={styles.newsItemImage}
        wrapperStyle={styles.newsItemWrapper}
        labelStyle={styles.newsItemLabel}
        numberOfLines={2}
      />
    );
  };
  useEffect(() => {
    setTimeout(() => {
      startTransition(() => {
        setIsLoading(false);
      });
    }, 200);
  }, []);
  return (
    <AppWrapper>
      <ScrollView>
        <View style={styles.header}>
          <AppImage
            source={require('../../assets/images/large_logo.png')}
            resizeMode="contain"
            imageStyle={styles.logo}
          />
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            <SearchIcon width={32} height={32} />
          </TouchableOpacity>
        </View>
        <AppCarousel />
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={styles.mainWrapper}>
            <Categories />
            <View style={styles.commicContainer}>
              <View style={styles.titleWrapper}>
                <Title content="Popular Novels" width={250} height={42} />
                <TouchableOpacity style={styles.moreBtn}>
                  <Text style={styles.moreText}>More</Text>
                  <IconRight fill={COLORS.lightmode.netrual[500]} />
                </TouchableOpacity>
              </View>
              <FlatList
                data={ListComic}
                renderItem={renderCommicPopularItem}
                numColumns={3}
                columnWrapperStyle={styles.gapColumnWrapper}
                style={styles.gapColumnWrapper}
                scrollEnabled={false}
              />
              <View style={styles.titleWrapper}>
                <Title content="Complete NOvels" width={245} height={42} />
                <TouchableOpacity style={styles.moreBtn}>
                  <Text style={styles.moreText}>More</Text>
                  <IconRight />
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              data={ListComic}
              renderItem={renderCommicDoneItem}
              horizontal
              contentContainerStyle={styles.gap}
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={<View style={styles.gapView} />}
              ListFooterComponent={<View style={styles.gapView} />}
            />
            <FlatList
              data={ListComic}
              renderItem={renderCommicDoneItem}
              horizontal
              contentContainerStyle={styles.gap}
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={<View style={styles.gapView} />}
              ListFooterComponent={<View style={styles.gapView} />}
            />
          </View>
        )}
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={styles.bgNewCommic}>
            <AppImage
              source={require('../../assets/images/bg_1.png')}
              resizeMode="contain"
              imageStyle={styles.bgContainer}
            />
            <View style={styles.newsComicWrapper}>
              <View style={styles.newComicContentWrapper}>
                <View style={styles.titleWrapper}>
                  <Title content="New Novels" width={245} height={42} />
                  <TouchableOpacity style={styles.moreBtn}>
                    <Text style={styles.moreText}>More</Text>
                    <IconRight />
                  </TouchableOpacity>
                </View>
                <View style={styles.contentWrapper}>
                  <AppImage
                    source={require('../../assets/images/card_7.png')}
                    imageStyle={styles.newsCommicTitleImage}
                    resizeMode="stretch"
                  />
                  <View style={{gap: 8, flex: 1}}>
                    <AppText style={styles.newsNovelsTitle}>
                      Nine Star Hegemon Body Art
                    </AppText>
                    <AppText
                      style={styles.newsNovelsDescription}
                      numberOfLines={6}>
                      Long Chen, a crippled youth who cannot cultivate, is
                      constantly targeted and bullied by his fellow noble heirs.
                      After a particularly vicious beating, he wakes up and
                      realizes a Pill Sovereign's soul has somehow merged with
                      him, giving him some additional memories. Within those
                      memories is the mysterious Nine Star Hegemon Body Art, a
                      cultivation technique that even he can train in, but whose
                      secrets and origin are still a mystery to him. Relying on
                      his improved instincts as he finally begins to cultivate,
                      he realizes a huge conspiracy is underfoot within the
                      Phoenix Cry Empire; a conspiracy involving his father,
                      members of the imperial family, and even the Emperor
                      himself.
                    </AppText>
                  </View>
                </View>
              </View>
              <FlatList
                data={ListComicNew}
                renderItem={renderCommicNewsItem}
                horizontal
                contentContainerStyle={styles.gap}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={<View style={styles.gapView} />}
                ListFooterComponent={<View style={styles.gapView} />}
              />
            </View>
            <AppImage
              source={require('../../assets/images/bg_2.png')}
              resizeMode="contain"
              imageStyle={styles.newComicBackground}
            />
          </View>
        )}
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={{paddingHorizontal: 16, gap: 16, marginTop: 25}}>
            <View style={styles.titleWrapper}>
              <Title content="All NOvels" width={245} height={42} />
              <TouchableOpacity style={styles.moreBtn}>
                <Text style={styles.moreText}>More</Text>
                <IconRight />
              </TouchableOpacity>
            </View>
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
          </View>
        )}
        <View style={{height: 20}} />
      </ScrollView>
    </AppWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    width: 46,
    height: 46,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  mainWrapper: {paddingVertical: 8, gap: 24},
  gapColumnWrapper: {
    gap: 16,
  },
  newsComicWrapper: {
    paddingVertical: 20,
    gap: 12,
    width: '100%',
    height: 480,
    backgroundColor: '#22262B',
  },
  newsCommicTitleImage: {
    width: 119,
    height: 158,
  },
  newsItemImage: {width: 85, height: 115},
  newsItemWrapper: {width: 85, height: 200},
  newsItemLabel: {color: 'white', fontSize: 12},
  newComicContentWrapper: {paddingHorizontal: 16, gap: 16},
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    gap: 16,
  },
  newComicBackground: {
    width: '140%',
    position: 'absolute',
    bottom: -130,
    left: -60,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  commicContainer: {paddingHorizontal: 16, gap: 16},
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moreBtn: {flexDirection: 'row', alignItems: 'center', gap: 5},
  moreText: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[500],
  },
  gapView: {
    width: 8,
  },
  gap: {gap: 12},
  bgNewCommic: {position: 'relative', paddingVertical: 32},
  bgContainer: {
    width: '140%',
    position: 'absolute',
    top: -64,
    left: -50,
  },
  newsNovelsDescription: {
    fontSize: 11,
    color: COLORS.lightmode.netrual[100],
    lineHeight: 17,
    fontFamily: 'Montserrat',
    fontWeight: 300,
    letterSpacing: 1,
  },
  newsNovelsTitle: {
    fontSize: 17,
    lineHeight: 23.8,
    letterSpacing: 1,
    fontWeight: 400,
    color: COLORS.lightmode.netrual[0],
    fontFamily: 'UVNBayBuomHepNang_Regular',
  },
});
