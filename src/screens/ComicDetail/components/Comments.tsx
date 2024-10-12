import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Title from '@screens/HomeScreen/components/Title';
import {ASSETS, COLORS, HEIGHT, WIDTH} from '@constants/index';
import Card from '@screens/HomeScreen/components/Card';
import AppComment from '@components/AppComment';
import {SharedValue} from 'react-native-reanimated';
type TComment = {
  avatar: string;
  sender: string;
  createdAt: Date;
  countLike: number;
  message: string;
};
type TComic = {
  image: any;
  label: string;
};
const ListComic = [
  {
    image: require('../../../assets/images/card_1.png'),
    label: 'Phàm Nhân Tu Tiên',
  },
  {
    image: require('../../../assets/images/card_1.png'),
    label: 'Cử Đầu Vọng Minh Nguyệt',
  },
  {
    image: require('../../../assets/images/card_1.png'),
    label: 'Chiến Thần Trừ Yêu Dẹp Loạn',
  },
  {
    image: require('../../../assets/images/card_1.png'),
    label: 'Tiểu Gia Là Siêu Cấp Thiên Tài',
  },
  {
    image: require('../../../assets/images/card_1.png'),
    label: 'Thần Lộ',
  },
  {
    image: require('../../../assets/images/card_1.png'),
    label: 'Nhật Ký Của Tôi Và Em Trai',
  },
];
const ListComments: TComment[] = [
  {
    avatar:
      'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg', // Replace with actual URLs
    sender: 'Woodcutter Bryan',
    createdAt: new Date(), // You can adjust this to simulate a specific time
    countLike: 500,
    message:
      'I was hoping the author would give us more depth in this scene, but it just rushed past like a fleeting breeze. The anticipation built up for several chapters only to be dismissed in a moment.',
  },
  {
    avatar:
      'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg',
    sender: 'Reader Jane',
    createdAt: new Date(Date.now() - 3600 * 1000), // 1 hour ago
    countLike: 320,
    message:
      'I absolutely loved this chapter! The tension was palpable, and the ending was perfect.',
  },
  {
    avatar:
      'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg',
    sender: 'Critic Alex',
    createdAt: new Date(Date.now() - 7200 * 1000), // 2 hours ago
    countLike: 150,
    message:
      'The pacing felt off in this chapter, but the character development was spot on.',
  },
  {
    avatar:
      'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg', // Replace with actual URLs
    sender: 'Woodcutter Bryan',
    createdAt: new Date(), // You can adjust this to simulate a specific time
    countLike: 500,
    message:
      'I was hoping the author would give us more depth in this scene, but it just rushed past like a fleeting breeze. The anticipation built up for several chapters only to be dismissed in a moment.',
  },
  {
    avatar:
      'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg',
    sender: 'Reader Jane',
    createdAt: new Date(Date.now() - 3600 * 1000), // 1 hour ago
    countLike: 320,
    message:
      'I absolutely loved this chapter! The tension was palpable, and the ending was perfect.',
  },
  {
    avatar:
      'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg',
    sender: 'Critic Alex',
    createdAt: new Date(Date.now() - 7200 * 1000), // 2 hours ago
    countLike: 150,
    message:
      'The pacing felt off in this chapter, but the character development was spot on.',
  },
  {
    avatar:
      'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg', // Replace with actual URLs
    sender: 'Woodcutter Bryan',
    createdAt: new Date(), // You can adjust this to simulate a specific time
    countLike: 500,
    message:
      'I was hoping the author would give us more depth in this scene, but it just rushed past like a fleeting breeze. The anticipation built up for several chapters only to be dismissed in a moment.',
  },
  {
    avatar:
      'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg',
    sender: 'Reader Jane',
    createdAt: new Date(Date.now() - 3600 * 1000), // 1 hour ago
    countLike: 320,
    message:
      'I absolutely loved this chapter! The tension was palpable, and the ending was perfect.',
  },
  {
    avatar:
      'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg',
    sender: 'Critic Alex',
    createdAt: new Date(Date.now() - 7200 * 1000), // 2 hours ago
    countLike: 150,
    message:
      'The pacing felt off in this chapter, but the character development was spot on.',
  },
];
type TComments = {
  isOpenComment: SharedValue<boolean>;
};
const Comments = ({isOpenComment}: TComments) => {
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
        imageStyle={{resizeMode: 'cover', height: 115}}
        numberOfLines={2}
      />
    );
  };
  const renderComments = ({item, index}: ListRenderItemInfo<TComment>) => {
    return <AppComment {...item} key={index} />;
  };
  return (
    <View style={styles.comicListContainer}>
      <View style={styles.comicHeaderContainer}>
        <Title
          content="Featured Comments"
          width={242}
          height={53}
          textStyle={styles.comicTitleStyle}
        />
        <TouchableOpacity
          style={styles.comicMoreButton}
          onPress={() => (isOpenComment.value = !isOpenComment.value)}>
          <Text style={styles.comicMoreStyle}>More (8.5k)</Text>
          <ASSETS.ICONS.ArrowRightIcon fill={COLORS.lightmode.netrual[500]} />
        </TouchableOpacity>
      </View>
      <View style={styles.commentContainer}>
        <FlatList
          data={ListComments}
          renderItem={renderComments}
          horizontal
          contentContainerStyle={{
            gap: 14,
          }}
          ListHeaderComponent={<View style={styles.commentGap} />}
          ListFooterComponent={<View style={styles.commentGap} />}
        />
      </View>
      <View style={styles.comicHeaderContainer}>
        <Title
          content="Same Genre"
          width={195}
          height={53}
          textStyle={styles.comicTitleStyle}
        />
        <TouchableOpacity style={styles.comicMoreButton}>
          <Text style={styles.comicMoreStyle}>More</Text>
          <ASSETS.ICONS.ArrowRightIcon fill={COLORS.lightmode.netrual[500]} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}>
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
      </View>
      <View style={styles.listBottomSpacer} />
    </View>
  );
};

export default Comments;
const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerSpacer: {
    width: 18,
  },
  headerTitle: {
    fontSize: 24,
    color: COLORS.lightmode.netrual[900],
    fontFamily: 'UVNBayBuomHepNang_Regular',
  },
  cardWrapper: {
    maxWidth: WIDTH / 4 - 17,
    minWidth: WIDTH / 4 - 17,
  },
  comicListContainer: {
    justifyContent: 'center',
  },
  comicListContent: {
    gap: 12,
  },
  comicListColumn: {
    gap: 12,
  },
  comicHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  comicTitleStyle: {fontSize: 24, letterSpacing: 1, paddingLeft: 15},
  comicMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  comicMoreStyle: {
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[500],
  },
  commentGap: {
    width: 5,
  },
  commentContainer: {
    paddingVertical: 28,
  },
  listSpacer: {
    width: 18,
  },
  listBottomSpacer: {
    height: 100,
  },
});
