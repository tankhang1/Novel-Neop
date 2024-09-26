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
import SearchIcon from '@assets/icons/search.svg';
import AppCarousel from '@components/AppCarousel';
import Categories from './Categories';
import Title from './components/Title';
import Card from './components/Card';
import AppText from '@components/AppText';
import Card2 from './components/Card2';
import {useNavigation} from '@react-navigation/native';
import AppWrapper from '@components/AppWrapper';
import IconRight from '@assets/icons/arrow-right.svg';
type TComic = {
  image: any;
  label: string;
};
const ListComic = [
  {
    image: require('../../assets/images/card_1.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('../../assets/images/card_2.png'),
    label: 'Cử Đầu Vọng Minh Nguyệt',
  },
  {
    image: require('../../assets/images/card_3.png'),
    label: 'Chiến Thần Trừ Yêu Dẹp Loạn',
  },
  {
    image: require('../../assets/images/card_4.png'),
    label: 'Tiểu Gia Là Siêu Cấp Thiên Tài',
  },
  {
    image: require('../../assets/images/card_5.png'),
    label: 'Thần Lộ',
  },
  {
    image: require('../../assets/images/card_6.png'),
    label: 'Nhật Ký Của Tôi Và Em Trai',
  },
];
const ListComicNew = [
  {
    image: require('../../assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('../../assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('../../assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('../../assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('../../assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('../../assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('../../assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('../../assets/images/card_7.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
];
const HomeScreen = () => {
  const navigation = useNavigation();
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
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            imageStyle={styles.logo}
          />
          <SearchIcon width={32} height={32} />
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
                  <IconRight />
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
                <Title content="News NOvels" width={245} height={42} />
                <View style={styles.contentWrapper}>
                  <AppImage
                    source={require('../../assets/images/card_7.png')}
                    imageStyle={styles.newsCommicTitleImage}
                    resizeMode="stretch"
                  />
                  <View style={{gap: 8, flex: 1}}>
                    <AppText style={{fontSize: 15, color: 'white'}}>
                      Đệ Đệ Của Ta Là Thiên Tuyển Chi Tử
                    </AppText>
                    <AppText
                      style={{fontSize: 12, color: 'white', lineHeight: 18}}>
                      Tần Phong xuyên qua Hoang Cổ trở thành Tần gia đại thiếu
                      gia, song bào thai nhị đệ vẫn là trong truyền thuyết thiên
                      tuyển chi tử, càng là có được một khối vạn người không
                      được một Chí Tôn Cốt.
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
    width: 32,
    height: 32,
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
    paddingVertical: 32,
    gap: 12,
    width: '100%',
    height: 442,
    backgroundColor: '#22262B',
  },
  newsCommicTitleImage: {
    width: 104,
    height: 138,
  },
  newsItemImage: {width: 76, height: 100},
  newsItemWrapper: {width: 76, height: 180},
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
    color: 'black',
    fontWeight: '600',
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
});
