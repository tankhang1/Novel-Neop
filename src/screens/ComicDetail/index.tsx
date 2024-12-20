import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Card2 from '../HomeScreen/components/Card2';
import {ASSETS, COLORS, HEIGHT, WIDTH} from '@constants/index';
import AppText from '@components/AppText';
import Underline from '../../assets/icons/underline.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@utils/types/navigation';
import BottomSheet from '@components/AppBottomSheet';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import CommicDetailTab from './components/CommicDetailTab';
import CommicChapterTab from './components/CommicChapterTab';
// import Comments from './components/Comments';
import AppComment from '@components/AppComment';
import ChevronLeft from '@assets/icons/common/Chevron-Left';
import ViewAltLight from '@assets/icons/common/View-Alt-Light';
import RoundStar from '@assets/icons/common/Round-Star';
import ChevronDown from '@assets/icons/common/Chevron-Down';
import BookMark from '@assets/icons/common/BookMark';
import LikeLight from '@assets/icons/common/Like-Light';
import BackgroundButton from '@assets/icons/common/Background-Button';
import CloseX from '@assets/icons/common/CloseX';
import Repeat from '@assets/icons/common/Repeat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {changeLanguage} from '@redux/slices/ComicSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import Play from '@assets/icons/common/Play';
import AppImage from '@components/AppImage';
import {getComicData} from '@hooks/useGetComicData';
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
const ComicDetail = ({navigation, route}: Props) => {
  const {comicKey} = route.params;
  const comic = useMemo(() => getComicData(comicKey), [comicKey]);
  const {curLanguage} = useSelector((state: RootState) => state.comic);
  const dispatch = useDispatch();
  const [isTimeoutLoading, setIsTimeOutLoading] = useState(true);
  const [tab, setTab] = useState<'info' | 'chapter'>('info');
  const [oldReadChapter, setOldReadChapter] = useState<null | number>(null);
  const transX = useSharedValue(0);
  const isOpenLanguage = useSharedValue(false);
  const isOpenComment = useSharedValue(false);
  const toggleSheetComment = () => {
    isOpenComment.value = !isOpenComment.value;
  };
  const toggleSheetLanguage = () => {
    isOpenLanguage.value = !isOpenLanguage.value;
  };

  const animatedIndicateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(transX.value, [0, 1], [0, WIDTH / 2]),
        },
      ],
    };
  });
  const resetStorageChapter = async () => {
    await AsyncStorage.clear();
  };
  const readOldChapter = async () => {
    const oldKey = await AsyncStorage.getItem('key');
    if (oldKey) {
      setOldReadChapter(+oldKey);
    } else {
      setOldReadChapter(1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsTimeOutLoading(false);
    }, 100);
  }, []);
  useFocusEffect(() => {
    readOldChapter();
  });
  return (
    <SafeAreaView style={styles.overall}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonContainer}>
          <View style={styles.backButton} hitSlop={10}>
            <ChevronLeft width={24} height={24} color="rgba(0,0,0,1)" />
          </View>
          <Text style={styles.backTxtButton}>Back</Text>
        </TouchableOpacity>

        <View style={styles.globalStyle}>
          <Card2
            imageStyle={styles.cardImageStyle}
            titleStyle={styles.cardTitleStyle}
            subTitleStyle={styles.cardSubTitleStyle}
            isReview={false}
            data={{
              image: comic?.image,
              name: comic?.comic_name || '',
            }}
            rightSectionStyle={styles.card2RightSection}
          />
          <View style={styles.descriptionImageContainer}>
            <View style={styles.descriptionLeftContainer}>
              <View style={styles.descriptionItemContainer}>
                <ViewAltLight width={14} height={14} />
                <Text style={styles.descriptionItemTxtContainer}>0</Text>
              </View>
              <View style={styles.descriptionItemContainer}>
                <Text style={styles.descriptionItemTxtContainer}>5</Text>
                <RoundStar
                  width={14}
                  height={14}
                  color={COLORS.lightmode.primary[600]}
                />
              </View>
            </View>
            <View style={styles.descriptionRightContainer}>
              <BackgroundButton
                wrapStyle={styles.descriptionButtonWraper}
                variant="yellow"
                onPress={() => (isOpenLanguage.value = !isOpenLanguage.value)}>
                <View style={styles.descriptionRightButtonItem}>
                  <Text style={styles.descriptionRightTxtItem}>
                    {curLanguage}
                  </Text>
                  <ChevronDown width={14} height={14} />
                </View>
              </BackgroundButton>
              <BackgroundButton
                disabled={true}
                wrapStyle={styles.descriptionButtonWraper}
                variant="gray-bold">
                <View style={[styles.descriptionRightButtonItem]}>
                  <BookMark
                    color={COLORS.lightmode.netrual[500]}
                    width={16}
                    height={16}
                  />
                  <Text style={styles.descriptionRightTxtItem}>0</Text>
                </View>
              </BackgroundButton>

              <BackgroundButton
                disabled={true}
                wrapStyle={styles.descriptionButtonWraper}
                variant="gray-bold">
                <View style={[styles.descriptionRightButtonItem]}>
                  <LikeLight
                    width={16}
                    height={16}
                    color={COLORS.lightmode.netrual[500]}
                  />
                  <Text style={styles.descriptionRightTxtItem}>0</Text>
                </View>
              </BackgroundButton>
            </View>
          </View>
        </View>

        <ImageBackground
          source={require('@assets/images/mask.png')}
          resizeMode="stretch"
          style={styles.bottomTabHeaderContainer}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => {
                setTab('info');
                transX.value = withTiming(0);
              }}
              style={styles.tabButton}>
              <AppText
                style={[
                  styles.tabText,
                  tab !== 'info' && {color: COLORS.lightmode.netrual[500]},
                ]}>
                Detail
              </AppText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setTab('chapter');
                transX.value = withTiming(1);
              }}
              style={styles.tabButton}>
              <AppText
                style={[
                  styles.tabText,
                  tab !== 'chapter' && {color: COLORS.lightmode.netrual[500]},
                ]}>
                Chapters ({comic?.chapter?.en.size})
              </AppText>
            </TouchableOpacity>
          </View>
          <View>
            <Animated.View
              style={[styles.indicatorContainer, animatedIndicateStyle]}>
              <Underline width={100} />
            </Animated.View>
          </View>
          {tab === 'info' ? (
            <CommicDetailTab data={comic?.desc} />
          ) : (
            <CommicChapterTab
              data={comic?.chapter}
              onPress={key =>
                navigation.navigate('ReadComic', {
                  chapterKey: key,
                  comicKey: comicKey,
                })
              }
            />
          )}
          <View style={styles.bottomHeight} />
          {/* <Comments isOpenComment={isOpenComment} /> */}
        </ImageBackground>
      </ScrollView>

      <ImageBackground
        source={require('@assets/images/bottom-bg.png')}
        style={styles.bottomBar}>
        <View style={styles.bottomContainer}>
          <BackgroundButton
            onPress={() => {
              resetStorageChapter();
              navigation.navigate('ReadComic', {
                chapterKey: 1,
                comicKey: comicKey,
              });
            }}
            variant="gray"
            wrapStyle={styles.bottomItemWrapper}>
            <View style={styles.bottomItemContainer}>
              <Repeat />
              <Text style={styles.bottomItemTextStyle}>Read</Text>
            </View>
          </BackgroundButton>
          <BackgroundButton
            onPress={() => {
              navigation.navigate('ReadComic', {
                chapterKey: oldReadChapter || 1,
                comicKey: comicKey,
              });
            }}
            wrapStyle={styles.bottomItemSecondWrapper}
            variant="yellow">
            <View style={styles.bottomItemSecondContainer}>
              <Play />
              <Text style={styles.bottomItemTextStyle}>
                Continue Chapter {oldReadChapter}
              </Text>
            </View>
          </BackgroundButton>
        </View>
      </ImageBackground>

      <BottomSheet
        isOpen={isOpenLanguage}
        toggleSheet={toggleSheetLanguage}
        duration={300}
        wrapperStyle={{
          // backgroundColor: COLORS.lightmode.netrual[0],
          width: WIDTH,
          height: HEIGHT * 0.4,
        }}>
        <View>
          <Text style={styles.bottomContainerStyle}>Language</Text>
          {!isTimeoutLoading && (
            <View>
              {comic?.language?.map((language, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.bottomTouchableItem,
                    curLanguage === language && styles.activeBg,
                  ]}
                  onPress={() => {
                    dispatch(changeLanguage(language));
                  }}>
                  <Text style={styles.bottomTouchableTextItem}>{language}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </BottomSheet>

      <BottomSheet
        isOpen={isOpenComment}
        toggleSheet={toggleSheetComment}
        duration={300}
        wrapperStyle={{
          // backgroundColor: COLORS.lightmode.netrual[0],
          width: WIDTH,
          height: HEIGHT * 0.95,
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
          {!isTimeoutLoading && (
            <View style={styles.scrollContainer}>
              <ScrollView contentContainerStyle={styles.commentList}>
                {ListComments.map((comment, index) => (
                  <AppComment {...comment} key={index} />
                ))}
                <View style={styles.bottomSpacer} />
              </ScrollView>
            </View>
          )}
          <View style={styles.commentInputContainer}>
            <AppImage
              source={{
                uri: 'https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg',
              }}
              imageStyle={styles.commentImage}
              resizeMode="contain"
            />
            <ImageBackground
              source={require('@assets/images/mask-2.png')}
              resizeMode="stretch"
              style={{flex: 1}}>
              <TextInput
                placeholder={`Let's discuss`}
                placeholderTextColor={COLORS.lightmode.netrual[200]}
                style={styles.textInput}
              />
            </ImageBackground>
            <TouchableOpacity>
              <ASSETS.ICONS.SendFillIcon />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overall: {flex: 1, backgroundColor: COLORS.lightmode.netrual[50]},
  commentImage: {
    width: 33,
    height: 33,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  bottomSpacer: {
    height: 30,
  },
  commentList: {
    gap: 14,
  },
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
  scrollContainer: {
    alignSelf: 'center',
    maxHeight: HEIGHT * 0.74,
  },
  textInput: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[900],
    // backgroundColor: COLORS.lightmode.netrual[50],
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  backTxtButton: {
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 24,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: -5,
  },
  backButton: {
    padding: 10,
  },
  closeButton: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightmode.netrual[900],
    borderRadius: 100,
  },
  activeBg: {backgroundColor: '#eeeeee'},
  descriptionImageContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH / 2,
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    width: 'auto',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  descriptionButtonWraper: {
    borderRadius: 8,
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
    gap: 2,
  },
  descriptionItemTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: COLORS.lightmode.netrual[900],
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
    fontFamily: 'Oregano-Regular',
  },

  bottomBar: {
    backgroundColor: 'transparent',
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
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
  bottomItemWrapper: {
    borderRadius: 14,
  },
  bottomItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  bottomItemSecondWrapper: {flex: 1, height: 50, borderRadius: 14},
  bottomItemSecondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flex: 1,
    justifyContent: 'center',
  },
  bottomItemTextStyle: {
    color: COLORS.lightmode.netrual[700],
    fontFamily: 'Montserrat-SemiBold',
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
    paddingVertical: 20,
  },
  headerSpacer: {
    width: 18,
  },
  headerTitle: {
    fontSize: 24,
    color: COLORS.lightmode.netrual[900],
    fontFamily: 'Oregano-Regular',
  },
  card2RightSection: {gap: 8},
  bottomHeight: {height: 100},
});

export default ComicDetail;
