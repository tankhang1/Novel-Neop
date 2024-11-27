import {
  View,
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import AppText from '@components/AppText';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import BottomSheet from '@components/AppBottomSheet';
import {ASSETS, COLORS, HEIGHT, WIDTH} from '@constants/index';
import ChapterBottomSheet from './components/ChapterBottomSheet';
import ChevronLeft from '@assets/icons/common/Chevron-Left';
import ChevronRight from '@assets/icons/common/Chevron-Right';
import ChevronDown from '@assets/icons/common/Chevron-Down';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@utils/types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {SafeAreaView} from 'react-native-safe-area-context';
import MenuDotSquare from '@assets/icons/common/Menu-Dot-Square';
import {getComicData} from '@hooks/useGetComicData';
const LIST_COLOR = [
  'rgba(235, 188, 93, 0.05)',
  'rgba(197,231,206,1)',
  'rgba(246,238,220,1)',
  'rgba(34,38,43,1)',
];
const LIST_FONTFAMILY = ['Lora', 'Poppins', 'Times-New-Roman', 'OpenSans'];
type Props = NativeStackScreenProps<RootStackParamList, 'ReadComic'>;
const ReadComic = ({navigation, route}: Props) => {
  const {comicKey} = route.params;
  const comic = useMemo(() => getComicData(comicKey), [comicKey]);

  const {curLanguage} = useSelector((state: RootState) => state.comic);
  const LIST_KEY = useMemo(
    () =>
      Array.from(
        curLanguage === 'English' ? comic?.chapter.en! : comic?.chapter.hindi!,
        ([key]) => key,
      ),
    [curLanguage, comic?.chapter],
  );
  const COMMIC = useMemo(
    () =>
      curLanguage === 'English' ? comic?.chapter.en! : comic?.chapter.hindi!,
    [curLanguage, comic?.chapter],
  );
  const isShowTab = useSharedValue(0);

  const chapterKey = route.params.chapterKey;
  const isOpen = useSharedValue(false);
  const isOpenMenu = useSharedValue(false);
  const [isLoading, setIsLoading] = useState(false);

  const [tabBottomSheet, setTabBottomSheet] = useState<
    'menu' | 'setting' | undefined
  >();
  const [lastTap, setLastTap] = useState(0);
  const [themeColor, setThemeColor] = useState('#FFFFFF');
  const [fontSize, setFontSize] = useState(15);
  const [padding, setPadding] = useState(0);
  const [lineHeight, setLineHeight] = useState(28);
  const [chapter, setChapter] = useState(1);
  const [fontFamily, setFontFamily] = useState<string>(LIST_FONTFAMILY[0]);
  const [counterEnd, setCounterEnd] = useState(0);
  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
    if (isOpenMenu.value) {
      toggleSheetMenu();
    }
    setTabBottomSheet(undefined);
  };
  const toggleSheetMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
    if (isOpen.value) {
      toggleSheet();
    }
    setTabBottomSheet(undefined);
  };
  const onDecreaseFontSize = () => {
    if (fontSize > 1) {
      setFontSize(fontSize - 1);
    }
  };
  const onIncreaseFontSize = () => {
    setFontSize(fontSize + 1);
  };
  const onDecreaseLineHeight = () => {
    if (lineHeight > 1) {
      setLineHeight(lineHeight - 1);
    }
  };
  const onIncreaseLineHeight = () => {
    setLineHeight(lineHeight + 1);
  };
  const onDecreasePadding = () => {
    if (padding > 1) {
      setPadding(padding - 1);
    }
  };
  const onIncreasePadding = () => {
    setPadding(padding + 1);
  };

  const onDecreaseChapter = () => {
    if (chapter > 1) {
      setChapter(chapter - 1);
    }
  };
  const onIncreaseChapter = () => {
    if (chapter < LIST_KEY.length) {
      setChapter(chapter + 1);
    }
  };
  const checkNewChapter = useCallback(async () => {
    await AsyncStorage.setItem('key', chapter.toString());
  }, [chapter]);
  const handleDoubleClick = () => {
    if (isShowTab.value === 0) {
      isShowTab.value = withTiming(1);
    }
  };

  const handleTap = () => {
    const currentTime = Date.now();
    const DOUBLE_TAP_DELAY = 800; // Adjust delay for double-click detection (in ms)

    if (currentTime - lastTap < DOUBLE_TAP_DELAY) {
      handleDoubleClick();
    } else {
      if (isShowTab.value === 1) {
        isShowTab.value = withTiming(0, {duration: 300});
      }
    }
    setLastTap(currentTime);
  };
  const topAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            isShowTab.value,
            [0, 1],
            [0, Platform.OS === 'ios' ? -100 : -50],
          ),
        },
      ],
    };
  });
  const bottomAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: interpolate(isShowTab.value, [0, 1], [0, 80])}],
    };
  });
  useEffect(() => {
    if (chapterKey) {
      setChapter(chapterKey);
    } else {
      setChapter(0);
    }
    setCounterEnd(0);
  }, [chapterKey]);
  useEffect(() => {
    checkNewChapter();
  }, [chapter, checkNewChapter]);
  return (
    <SafeAreaView style={styles.overall}>
      <Animated.View style={[styles.headerContainer, topAnimatedStyle]}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={15}>
          <ChevronLeft width={20} />
        </TouchableOpacity>
        <AppText style={styles.headerTitle} numberOfLines={1}>
          {COMMIC.get(chapter)?.title}
        </AppText>
        <View style={styles.spacing_1} />
      </Animated.View>
      <FlatList
        data={[12]}
        onEndReached={() => {
          setCounterEnd(counterEnd + 1);
          if (counterEnd === 1) {
            setIsLoading(true);
            setTimeout(() => {
              onIncreaseChapter();
              setIsLoading(false);
              setCounterEnd(0);
            }, 500);
          }
        }}
        onEndReachedThreshold={0.1}
        renderItem={() =>
          isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator />
            </View>
          ) : (
            <Pressable onPress={handleTap} style={styles.comicContainer}>
              <View style={styles.spacing_2} />
              <Text
                selectable
                style={[
                  styles.comicContent,
                  {
                    color:
                      themeColor === 'rgba(34,38,43,1)' ? 'white' : 'black',
                  },
                  {
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    padding: padding,
                    fontFamily: fontFamily,
                  },
                ]}>
                {COMMIC.get(chapter)?.content}
              </Text>
              <View style={styles.spacing_3} />
            </Pressable>
          )
        }
        onMomentumScrollBegin={() => {
          if (isShowTab.value === 0) {
            isShowTab.value = withTiming(1);
          }
        }}
        style={{
          backgroundColor: themeColor,
        }}
      />
      <BottomSheet
        isOpen={isOpen}
        toggleSheet={toggleSheet}
        duration={300}
        wrapperStyle={styles.bottomSheetContainer}>
        <View style={styles.bottomSheetInnerContainer}>
          <ScrollView>
            <TouchableOpacity
              hitSlop={10}
              onPress={() => {
                setTabBottomSheet(undefined);
                toggleSheet();
              }}
              style={styles.bottomSheetHeaderContainer}>
              <ChevronDown
                width={20}
                height={20}
                color={COLORS.lightmode.netrual[300]}
              />
            </TouchableOpacity>
            <View style={{gap: 24}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5}}>
                  <Text style={styles.label}>Size</Text>
                  <View style={styles.container}>
                    <TouchableOpacity
                      style={[styles.button, {opacity: 0.5}]}
                      onPress={onDecreaseFontSize}>
                      <Text style={styles.buttonText}>A -</Text>
                    </TouchableOpacity>
                    <Text style={styles.numberText}>{fontSize}</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={onIncreaseFontSize}>
                      <Text style={styles.buttonText}>A +</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{gap: 5}}>
                  <Text style={styles.label}>Line height</Text>
                  <View style={styles.container}>
                    <TouchableOpacity
                      style={[styles.button, {opacity: 0.5}]}
                      onPress={onDecreaseLineHeight}>
                      <ASSETS.ICONS.LineHeightIcon />
                    </TouchableOpacity>
                    <Text style={styles.numberText}>{lineHeight}</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={onIncreaseLineHeight}>
                      <ASSETS.ICONS.LineHeightIcon />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{gap: 5}}>
                <Text style={styles.label}>Margin</Text>
                <View style={styles.container}>
                  <TouchableOpacity
                    style={[styles.button, {opacity: 0.5}]}
                    onPress={onDecreasePadding}>
                    <ASSETS.ICONS.MarginIcon />
                  </TouchableOpacity>
                  <Text style={styles.numberText}>{padding}</Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={onIncreasePadding}>
                    <ASSETS.ICONS.MarginIcon />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{gap: 5}}>
                <Text style={styles.label}>Theme</Text>
                <ScrollView
                  horizontal
                  contentContainerStyle={{gap: 17}}
                  showsHorizontalScrollIndicator={false}>
                  {LIST_COLOR.map((item, index) => (
                    <TouchableOpacity
                      onPress={() => setThemeColor(item)}
                      key={index}
                      style={[
                        styles.colorItem,
                        {
                          backgroundColor: item,
                          borderColor:
                            themeColor === item
                              ? COLORS.lightmode.primary[600]
                              : item,
                        },
                      ]}
                    />
                  ))}
                </ScrollView>
              </View>
              <View style={{gap: 5}}>
                <Text style={styles.label}>Font</Text>
                {LIST_FONTFAMILY.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => setFontFamily(item)}
                    key={index}
                    style={[
                      styles.fontItem,
                      {
                        borderColor:
                          fontFamily === item
                            ? COLORS.lightmode.primary[600]
                            : COLORS.lightmode.netrual[50],
                      },
                    ]}>
                    <Text
                      style={[
                        styles.fontTxt,
                        {
                          fontFamily: item,
                        },
                      ]}>
                      The brightly lit inner palace was a dazzling yet imposing
                      sight.
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.spacing} />
            </View>
          </ScrollView>
        </View>
      </BottomSheet>

      <ChapterBottomSheet
        isOpenMenu={isOpenMenu}
        toggleSheetMenu={toggleSheetMenu}
        setTabBottomSheet={setTabBottomSheet}
        themeColor={themeColor}
        setChapter={setChapter}
        chapter={chapter}
        setCounterEnd={setCounterEnd}
        data={comic?.chapter}
      />
      <Animated.View style={[styles.menuContainer, bottomAnimatedStyle]}>
        <View style={styles.menuItemContainer}>
          <TouchableOpacity hitSlop={10} onPress={onDecreaseChapter}>
            <ChevronLeft width={20} />
          </TouchableOpacity>
          <Pressable
            hitSlop={10}
            onPress={() => {
              toggleSheetMenu();
              if (tabBottomSheet === 'menu') {
                setTabBottomSheet(undefined);
              } else {
                setTabBottomSheet('menu');
              }
            }}>
            <MenuDotSquare
              color={
                tabBottomSheet === 'menu'
                  ? COLORS.lightmode.primary[600]
                  : COLORS.lightmode.netrual[900]
              }
            />
          </Pressable>

          <Pressable
            hitSlop={10}
            onPress={() => {
              toggleSheet();
              if (tabBottomSheet === 'setting') {
                setTabBottomSheet(undefined);
              } else {
                setTabBottomSheet('setting');
              }
            }}>
            <ASSETS.ICONS.Settings
              color={
                tabBottomSheet === 'setting'
                  ? COLORS.lightmode.primary[600]
                  : COLORS.lightmode.netrual[900]
              }
            />
          </Pressable>
          <TouchableOpacity hitSlop={10} onPress={onIncreaseChapter}>
            <ChevronRight variant="bold" />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default ReadComic;
const styles = StyleSheet.create({
  colorItem: {width: 87, height: 40, borderRadius: 100, borderWidth: 2},
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH,
    backgroundColor: COLORS.lightmode.netrual[0],
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    position: 'absolute',
    top: 0,
    zIndex: 999,
  },
  headerTitle: {fontSize: 16, color: '#090A0B', flex: 1},
  overall: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  comicContainer: {paddingHorizontal: 16, gap: 12, paddingVertical: 6},
  comicTitle: {fontSize: 16, fontWeight: 700, fontFamily: 'Lora'},
  comicContent: {fontSize: 16, fontFamily: 'Lora'},
  bottomSheetContainer: {height: HEIGHT * 0.8, flex: 1},
  bottomSheetContentContainer: {paddingHorizontal: 16, paddingVertical: 12},
  bottomSheetHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomSheetHeaderContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  themeSelectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  themeItem: {
    width: 76.75,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeText: {fontSize: 14, color: '#090A0B'},
  fontStyle: {fontSize: 18},
  arrowBtn: {width: 32, height: 32},

  menuContainer: {
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 30,
    width: WIDTH,
    zIndex: 999,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // Note: gap property is not directly supported in React Native, use marginRight or padding as a workaround
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 22,
    width: 70,
    height: 40,
    backgroundColor: COLORS.lightmode.netrual[100],
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: 'Montserrat',
    color: COLORS.lightmode.netrual[900],
  },
  numberText: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    color: COLORS.lightmode.netrual[900],
  },
  label: {
    fontSize: 14,
    color: COLORS.lightmode.netrual[900],
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  fontItem: {
    backgroundColor: COLORS.lightmode.netrual[50],
    paddingHorizontal: 22,
    height: 47,
    justifyContent: 'center',
    borderRadius: 18,
    borderWidth: 2,
  },
  fontTxt: {
    fontSize: 13,
    color: COLORS.lightmode.netrual[900],
  },
  bottomSheetInnerContainer: {paddingHorizontal: 16, flex: 1},
  spacing: {height: 50},
  spacing_1: {width: 20},
  spacing_2: {height: Platform.OS === 'ios' ? 30 : 20},
  spacing_3: {height: 100},
});
