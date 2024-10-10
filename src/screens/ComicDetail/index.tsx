import {
  View,
  StyleSheet,
  ScrollView,
  ListRenderItemInfo,
  FlatList,
  TouchableOpacity,
  Text,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ArrowBack from '@assets/icons/arrow-back.svg';
import Card2 from '../HomeScreen/components/Card2';
import {ASSETS, COLORS, HEIGHT, WIDTH} from '@constants/index';
import AppText from '@components/AppText';
import Underline from '../../assets/icons/underline.svg';
import Title from '../HomeScreen/components/Title';
import Card from '../HomeScreen/components/Card';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@utils/types/navigation';
import Tag from '@screens/HomeScreen/components/Tag';
import AppComment from '@components/AppComment';
import BottomSheet from '@components/AppBottomSheet';
import {useSharedValue} from 'react-native-reanimated';
import CloseX from '@assets/icons/CloseX';
import AppImage from '@components/AppImage';

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

const Language = ['Vietnamese', 'English', 'Indian', 'French', 'Japan'];
type TComment = {
  avatar: string;
  sender: string;
  createdAt: Date;
  countLike: number;
  message: string;
};
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

type Props = NativeStackScreenProps<RootStackParamList, 'ComicDetail'>;
const ComicDetail = ({navigation}: Props) => {
  const [tab, setTab] = useState<'info' | 'chapter'>('info');
  const isOpenLanguage = useSharedValue(false);
  const isOpenComment = useSharedValue(false);
  const toggleSheetLanguage = () => {
    isOpenLanguage.value = !isOpenLanguage.value;
  };
  const toggleSheetComment = () => {
    isOpenComment.value = !isOpenComment.value;
  };
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
        numberOfLines={2}
      />
    );
  };
  const renderComments = ({item, index}: ListRenderItemInfo<TComment>) => {
    return <AppComment {...item} key={index} />;
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.lightmode.netrual[50],
      }}>
      <ScrollView>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            hitSlop={10}>
            <ArrowBack width={20} />
          </TouchableOpacity>
          <Text style={styles.backTxtButton}>Back</Text>
        </View>

        <View style={styles.globalStyle}>
          <Card2
            imageStyle={styles.cardImageStyle}
            titleStyle={styles.cardTitleStyle}
            subTitleStyle={styles.cardSubTitleStyle}
            isReview={false}
          />
          <View style={styles.descriptionImageContainer}>
            <View style={styles.descriptionLeftContainer}>
              <View style={styles.descriptionItemContainer}>
                <ASSETS.ICONS.EyeFillIcon />
                <Text style={styles.descriptionItemTxtContainer}>300k</Text>
              </View>
              <View style={styles.descriptionItemContainer}>
                <Text style={styles.descriptionItemTxtContainer}>4.8</Text>
                <ASSETS.ICONS.StarFillIcon />
              </View>
            </View>
            <View style={styles.descriptionRightContainer}>
              <TouchableOpacity
                style={styles.descriptionRightButtonItem}
                onPress={() => (isOpenLanguage.value = !isOpenLanguage.value)}>
                <Text style={styles.descriptionRightTxtItem}>English</Text>
                <ASSETS.ICONS.ChervonDownIcon />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.descriptionRightButtonItem,
                  {
                    backgroundColor: COLORS.lightmode.netrual[100],
                  },
                ]}>
                <ASSETS.ICONS.BookMarkIcon
                  fill={'none'}
                  stroke={COLORS.lightmode.netrual[500]}
                />
                <Text style={styles.descriptionRightTxtItem}>5.4k</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.descriptionRightButtonItem,
                  {
                    backgroundColor: COLORS.lightmode.netrual[100],
                  },
                ]}>
                <ASSETS.ICONS.LikeIcon />
                <Text style={styles.descriptionRightTxtItem}>5.4k</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomTabHeaderContainer}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setTab('info')}
              style={styles.tabButton}>
              <AppText
                style={[
                  styles.tabText,
                  tab !== 'info' && {color: COLORS.lightmode.netrual[500]},
                ]}>
                Detail
              </AppText>
              {tab === 'info' && <Underline width={70} />}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setTab('chapter')}
              style={styles.tabButton}>
              <AppText
                style={[
                  styles.tabText,
                  tab !== 'chapter' && {color: COLORS.lightmode.netrual[500]},
                ]}>
                Chapters (1k1)
              </AppText>
              {tab === 'chapter' && <Underline width={70} />}
            </TouchableOpacity>
          </View>
          <View style={styles.tagContainer}>
            <Tag
              isGray={true}
              content="#Popular"
              textStyle={styles.tagTxtStyle}
              wrapperStyle={styles.tagItemStyle}
            />
            <Tag
              isGray={true}
              content="#Popular"
              textStyle={styles.tagTxtStyle}
              wrapperStyle={styles.tagItemStyle}
            />
            <Tag
              isGray={true}
              content="#Popular"
              textStyle={styles.tagTxtStyle}
              wrapperStyle={styles.tagItemStyle}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.descriptionWrapper}>
              <AppText style={styles.descriptionText}>
                Embark on the journey of Sun Wukong, the Monkey King, who rises
                from humble beginnings to legendary status. Armed with
                extraordinary abilities and a mischievous personality, he
                challenges gods and demons alike. As Wukong confronts the trials
                of his destiny, he must learn to wield his powers for both
                personal vengeance and to protect the realm.
              </AppText>
            </View>
          </View>

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
                <ASSETS.ICONS.ArrowRightIcon
                  fill={COLORS.lightmode.netrual[500]}
                />
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
                <ASSETS.ICONS.ArrowRightIcon
                  fill={COLORS.lightmode.netrual[500]}
                />
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
        </View>
      </ScrollView>
      <ImageBackground
        source={require('@assets/images/bottom-bg.png')}
        style={styles.bottomBar}>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bottomItemContainer}>
            <ASSETS.ICONS.ExchangeIcon />
            <Text style={styles.bottomItemTextStyle}>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomItemSecondContainer}>
            <ASSETS.ICONS.PlayIcon />
            <Text style={styles.bottomItemTextStyle}>Continue Chapter 2</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <BottomSheet
        isOpen={isOpenLanguage}
        toggleSheet={toggleSheetLanguage}
        duration={300}
        wrapperStyle={{
          backgroundColor: COLORS.lightmode.netrual[0],

          height: HEIGHT * 0.4,
        }}>
        <View>
          <Text style={styles.bottomContainerStyle}>Language</Text>
          <View>
            {Language.map((language, index) => (
              <TouchableOpacity key={index} style={styles.bottomTouchableItem}>
                <Text style={styles.bottomTouchableTextItem}>{language}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </BottomSheet>
      <BottomSheet
        isOpen={isOpenComment}
        toggleSheet={toggleSheetComment}
        duration={300}
        wrapperStyle={{
          backgroundColor: COLORS.lightmode.netrual[0],

          height: HEIGHT * 0.9,
        }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerSpacer} />
            <Text style={styles.headerTitle}>
              A Regressor’s Tale of Cultivation
            </Text>
            <TouchableOpacity
              onPress={() => (isOpenComment.value = !isOpenComment.value)}
              style={styles.closeButton}>
              <CloseX color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView contentContainerStyle={styles.commentList}>
              {ListComments.map((comment, index) => (
                <AppComment {...comment} key={index} />
              ))}
              <View style={styles.bottomSpacer} />
            </ScrollView>
          </View>

          <View style={styles.commentInputContainer}>
            <AppImage
              source={{
                uri: 'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg',
              }}
              imageStyle={styles.commentImage}
              resizeMode="contain"
            />
            <TextInput
              placeholder={`Let's discuss`}
              placeholderTextColor={COLORS.lightmode.netrual[200]}
              style={styles.textInput}
            />
            <TouchableOpacity>
              <ASSETS.ICONS.SendFillIcon />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
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
    maxWidth: WIDTH / 4 - 17,
    minWidth: WIDTH / 4 - 17,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
  },
  backTxtButton: {
    fontSize: 15,
    fontFamily: 'Montserrat',
    lineHeight: 24,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: -5,
  },
  backButton: {
    padding: 10,
  },
  descriptionImageContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  descriptionLeftContainer: {
    width: 108,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  descriptionRightButtonItem: {
    backgroundColor: COLORS.lightmode.primary[500],
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    width: 'auto',
    paddingHorizontal: 14,
    borderRadius: 10,
    paddingVertical: 8,
  },
  descriptionRightTxtItem: {
    fontSize: 11,
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[900],
    fontWeight: '600',
  },
  descriptionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  descriptionItemTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  cardImageStyle: {
    width: 104,
    height: 138,
  },
  cardTitleStyle: {
    fontSize: 22,
  },
  cardSubTitleStyle: {
    fontSize: 15,
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
    gap: 5,
    paddingVertical: 6,
  },
  tabText: {
    fontSize: 20,
    color: 'rgba(9, 10, 11, 1)',
    fontFamily: 'UVNBayBuomHepNang_Regular',
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  descriptionWrapper: {
    gap: 12,
  },
  descriptionText: {
    fontSize: 15,
    color: COLORS.lightmode.netrual[700],
    lineHeight: 24,
    fontFamily: 'Montserrat',
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
  listSpacer: {
    width: 18,
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
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: WIDTH,
    bottom: 0,
  },
  bottomTabHeaderContainer: {
    backgroundColor: COLORS.lightmode.netrual[0],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tagTxtStyle: {
    fontSize: 16,
    fontFamily: 'UVNBayBuomHepNang_Regular',
    color: COLORS.lightmode.netrual[900],
    fontWeight: '400',
  },
  tagItemStyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
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
  commentContainer: {
    paddingVertical: 28,
  },
  commentGap: {
    width: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 30,
  },
  bottomItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: COLORS.lightmode.netrual[0],
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 14,
  },
  bottomItemSecondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: COLORS.lightmode.primary[500],
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 14,
    flex: 1,
    justifyContent: 'center',
  },
  bottomItemTextStyle: {
    color: COLORS.lightmode.netrual[700],
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '600',
  },
  bottomContainerStyle: {
    fontSize: 28,
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[900],
    fontWeight: '700',
    padding: 24,
    paddingBottom: 5,
  },
  bottomTouchableItem: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  bottomTouchableTextItem: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[900],
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
  closeButton: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightmode.netrual[900],
    borderRadius: 100,
  },
  scrollContainer: {
    alignSelf: 'center',
    maxHeight: HEIGHT * 0.74,
  },
  commentList: {
    gap: 14,
  },
  bottomSpacer: {
    height: 30,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  commentImage: {
    width: 33,
    height: 33,
  },
  textInput: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[900],
    backgroundColor: COLORS.lightmode.netrual[50],
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
});

export default ComicDetail;
