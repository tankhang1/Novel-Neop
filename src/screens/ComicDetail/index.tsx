import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  ListRenderItemInfo,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ArrowBack from '@assets/icons/arrow-back.svg';
import Card2 from '../HomeScreen/components/Card2';
import {HEIGHT, WIDTH} from '@constants/index';
import AppText from '@components/AppText';
import Underline from '../../assets/icons/underline.svg';
import Title from '../HomeScreen/components/Title';
import Card from '../HomeScreen/components/Card';
import MarkButton from '@assets/icons/mark-btn.svg';
import ReadButton from '@assets/icons/read-btn.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@utils/types/navigation';
import AppWrapper from '@components/AppWrapper';

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

type Props = NativeStackScreenProps<RootStackParamList, 'ComicDetail'>;
const ComicDetail = ({navigation}: Props) => {
  const [tab, setTab] = useState<'info' | 'chapter'>('info');

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
        wrapperStyle={styles.cardWrapper}
      />
    );
  };

  return (
    <AppWrapper>
      <ScrollView>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          hitSlop={10}>
          <ArrowBack />
        </TouchableOpacity>

        <View style={styles.globalStyle}>
          <Card2
            imageStyle={styles.cardImageStyle}
            titleStyle={styles.cardTitleStyle}
            subTitleStyle={styles.cardSubTitleStyle}
          />
        </View>

        <View style={styles.statContainer}>
          <ImageBackground
            source={require('../../assets/images/tag.png')}
            style={styles.statsContainer}>
            <View style={styles.statItem}>
              <AppText style={styles.statText}>232</AppText>
              <AppText style={styles.statSubText}>Chương</AppText>
            </View>
            <View style={styles.statItem}>
              <AppText style={styles.statText}>164k</AppText>
              <AppText style={styles.statSubText}>Lượt Xem</AppText>
            </View>
            <View style={styles.statItem}>
              <AppText style={styles.statText}>82</AppText>
              <AppText style={styles.statSubText}>Theo dõi</AppText>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => setTab('info')}
            style={styles.tabButton}>
            <AppText style={styles.tabText}>Giới Thiệu</AppText>
            {tab === 'info' && <Underline />}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setTab('chapter')}
            style={styles.tabButton}>
            <AppText style={styles.tabText}>Danh Sách Chương</AppText>
            {tab === 'chapter' && <Underline />}
          </TouchableOpacity>
        </View>

        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionWrapper}>
            <AppText style={styles.descriptionText}>
              Phàm Nhân Tu Tiên là một câu chuyện Tiên Hiệp kể về Hàn Lập - Một
              người bình thường nhưng lại gặp vô vàn cơ duyên...
            </AppText>
            <AppText style={styles.descriptionText}>
              - Truyện kết cấu khá hợp lý, tình tiết không quá chậm, không quá
              nhanh...
            </AppText>
          </View>
        </View>

        <View style={styles.comicListContainer}>
          <Title content="CÙNG THỂ LOẠI" width={245} height={42} />
          <FlatList
            data={ListComic}
            renderItem={renderCommicPopularItem}
            numColumns={4}
            contentContainerStyle={styles.comicListContent}
            columnWrapperStyle={styles.comicListColumn}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<View style={styles.listSpacer} />}
            ListFooterComponent={<View style={styles.listSpacer} />}
            scrollEnabled={false}
          />
          <View style={styles.listBottomSpacer} />
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <MarkButton />
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={10}
          onPress={() => navigation.navigate('ReadComic')}>
          <ReadButton />
        </TouchableOpacity>
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
  },
  globalStyle: {
    padding: 16,
  },
  cardWrapper: {
    maxWidth: (WIDTH - 32) / 4 - 12,
    minWidth: (WIDTH - 32) / 4 - 12,
  },
  backButton: {
    padding: 10,
  },
  cardImageStyle: {
    width: 104,
    height: 138,
  },
  cardTitleStyle: {
    fontSize: 16,
  },
  cardSubTitleStyle: {
    fontSize: 12,
  },
  statContainer: {
    paddingHorizontal: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  statItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  statSubText: {
    color: 'white',
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'SedgwickAveDisplay-Regular',
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  descriptionWrapper: {
    gap: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: '#22262B',
    lineHeight: 18,
  },
  comicListContainer: {
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  comicListContent: {
    gap: 12,
  },
  comicListColumn: {
    gap: 12,
  },
  listSpacer: {
    width: 8,
  },
  listBottomSpacer: {
    height: 100,
  },
  bottomBar: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderColor: '#F1F2F3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: WIDTH,
    bottom: 0,
  },
});

export default ComicDetail;
