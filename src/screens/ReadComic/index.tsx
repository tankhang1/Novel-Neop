import {
  View,
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppText from '@components/AppText';
import ArrowBack from '@assets/icons/arrow-back.svg';
import ArrowRight from '@assets/icons/arrow-right.svg';
import Menu from '@assets/icons/menu.svg';
import MenuFill from '@assets/icons/menu-fill.svg';

import Moon from '@assets/icons/moon.svg';
import Setting from '@assets/icons/setting.svg';

import IconCheck from '@assets/icons/check.svg';
import IconCheckWhite from '@assets/icons/check-white.svg';

import SettingFill from '@assets/icons/setting-fill.svg';

import {useSharedValue} from 'react-native-reanimated';
import BottomSheet from '@components/AppBottomSheet';
import {WIDTH} from '@constants/index';
import IconX from '@assets/icons/closeX.svg';
import AppImage from '@components/AppImage';
const LIST_CHAPTER = [
  {
    label: 'Chương 1: Sống lại 10 năm trước',
    value: 'C1',
  },
  {
    label: 'Chương 2: Không gian ổn định trang bị',
    value: 'C2',
  },
];

const CHAPTER_CONTENT = new Map([
  [
    'C1',
    {
      title: 'Chương 1: Trùng sinh 10 năm trước',
      content: `Kiến trúc được kiến tạo bằng sắt thép, mặt đất sạch sẽ trơn bóng như gương, các bác sĩ mặc đồ trắng đi lại lui tới. Bên trong khu vực chờ đợi là một đám thiếu niên với gương mặt tràn đầy non nớt, thần sắc kích động kèm với sự sợ hãi trên mặt đám nhỏ.

“Đinh đinh đông, số hiệu số 2318, Tần Phong, tiến về khu tiêm thuốc số ba!”

“Ta đến!”

Thiếu niên kia liền vội vàng đứng lên, hai chân kích động đến mức có chút như nhũn ra, kết quả hai chân tự đẩy qua lại một chút liền ngã phịch xuống đất một tiếng. Cho dù là ai nghe được, đều biết đối phương lần này té có bao nhiêu thảm.

“A, Tần Phong!” Chu Hạo cảm giác lần này thật sự là vô cùng thê thảm, liền vội vàng đi đến nâng lên. Kết quả không nghĩ tới, Tần Phong thế mà ngã đến hôn mê!

“Mẹ nó, Tần Phong ngươi đùa cái gì vậy, ngay tại thời điểm quan trọng như vậy thế mà ngươi lại hôn mê, nhanh tỉnh lại, lập tức đến lượt ngươi tiêm dược tề thức tỉnh!”

Công nguyên năm 2200, thế giới đại biến, nhân loại từ bá chủ hai ngàn năm nhanh chóng trở thành chuỗi thức ăn cấp thấp nhất. Nhưng bởi vì trong nhân loại vẫn còn dị năng giả, cổ võ giả cực mạnh tồn tại mới có thể dẫn dắt đến được không gian sinh tồn như cũ. Mà tiền đề để thức tỉnh dị năng giả, cổ võ giả, chính là vào thời điểm năm mười sáu tuổi tiêm vào bản thân dược tề thức tỉnh.

Điều này đại biểu cho thời điểm có thể một bước lên trời, thế mà ngay lúc này Tần Phong hôn mê bất tỉnh, khiến Chu Hạo gấp gáp.

“Đinh đinh đông, số hiệu số 2318, Tần Phong, tiến về khu tiêm thuốc số ba!”

Lần nữa âm thanh từ loa truyền đến còn có từng tiếng kêu gọi khiến cho đầu óc Tần Phong hỗn độn càng thêm đau đớn như muốn nứt ra.

‘Ta không chết?’ Trong đầu Tần Phong xuất hiện ra ý nghĩ này, hắn làm sao có thể không chết, rõ ràng tại thời điểm hắn đánh chiến thắng với Thú Vương cường đại vô danh đã đồng quy vu tận. Mà lúc này, thanh âm bên tai dần dần rõ ràng hơn.
`,
    },
  ],
  [
    'C2',
    {
      title: 'Chương 2: Không gian ổn định trang bị',
      content: `Kiến trúc được kiến tạo bằng sắt thép, mặt đất sạch sẽ trơn bóng như gương, các bác sĩ mặc đồ trắng đi lại lui tới. Bên trong khu vực chờ đợi là một đám thiếu niên với gương mặt tràn đầy non nớt, thần sắc kích động kèm với sự sợ hãi trên mặt đám nhỏ.

“Đinh đinh đông, số hiệu số 2318, Tần Phong, tiến về khu tiêm thuốc số ba!”

“Ta đến!”

Thiếu niên kia liền vội vàng đứng lên, hai chân kích động đến mức có chút như nhũn ra, kết quả hai chân tự đẩy qua lại một chút liền ngã phịch xuống đất một tiếng. Cho dù là ai nghe được, đều biết đối phương lần này té có bao nhiêu thảm.

“A, Tần Phong!” Chu Hạo cảm giác lần này thật sự là vô cùng thê thảm, liền vội vàng đi đến nâng lên. Kết quả không nghĩ tới, Tần Phong thế mà ngã đến hôn mê!

“Mẹ nó, Tần Phong ngươi đùa cái gì vậy, ngay tại thời điểm quan trọng như vậy thế mà ngươi lại hôn mê, nhanh tỉnh lại, lập tức đến lượt ngươi tiêm dược tề thức tỉnh!”

Công nguyên năm 2200, thế giới đại biến, nhân loại từ bá chủ hai ngàn năm nhanh chóng trở thành chuỗi thức ăn cấp thấp nhất. Nhưng bởi vì trong nhân loại vẫn còn dị năng giả, cổ võ giả cực mạnh tồn tại mới có thể dẫn dắt đến được không gian sinh tồn như cũ. Mà tiền đề để thức tỉnh dị năng giả, cổ võ giả, chính là vào thời điểm năm mười sáu tuổi tiêm vào bản thân dược tề thức tỉnh.

Điều này đại biểu cho thời điểm có thể một bước lên trời, thế mà ngay lúc này Tần Phong hôn mê bất tỉnh, khiến Chu Hạo gấp gáp.

“Đinh đinh đông, số hiệu số 2318, Tần Phong, tiến về khu tiêm thuốc số ba!”

Lần nữa âm thanh từ loa truyền đến còn có từng tiếng kêu gọi khiến cho đầu óc Tần Phong hỗn độn càng thêm đau đớn như muốn nứt ra.

‘Ta không chết?’ Trong đầu Tần Phong xuất hiện ra ý nghĩ này, hắn làm sao có thể không chết, rõ ràng tại thời điểm hắn đánh chiến thắng với Thú Vương cường đại vô danh đã đồng quy vu tận. Mà lúc này, thanh âm bên tai dần dần rõ ràng hơn.
`,
    },
  ],
]);
const ReadComic = () => {
  const navigation = useNavigation();
  const isOpen = useSharedValue(false);
  const isOpenMenu = useSharedValue(false);
  const [isLoading, setIsLoading] = useState(false);

  const [tabBottomSheet, setTabBottomSheet] = useState<
    'menu' | 'setting' | undefined
  >();
  const [themeColor, setThemeColor] = useState('#FFFFFF');
  const [fontSize, setFontSize] = useState(14);
  const [padding, setPadding] = useState(0);
  const [lineHeight, setLineHeight] = useState(16);
  const [chapter, setChapter] = useState('C1');
  const [fontFamily, setFontFamily] = useState<'Merriweather-Light' | 'Inter'>(
    'Inter',
  );
  const [counterEnd, setCounterEnd] = useState(0);
  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
    setTabBottomSheet(undefined);
  };
  const toggleSheetMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
    setTabBottomSheet(undefined);
  };
  return (
    <View style={styles.overall}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={10}>
          <ArrowBack />
        </TouchableOpacity>
        <AppText style={styles.headerTitle}>
          {CHAPTER_CONTENT.get(chapter)?.title}
        </AppText>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigation.goBack()}
          hitSlop={10}
        />
      </View>
      <FlatList
        data={[12]}
        onEndReached={() => {
          setCounterEnd(counterEnd + 1);
          if (counterEnd === 1) {
            setIsLoading(true);
            setTimeout(() => {
              setChapter('C2');
              setIsLoading(false);
              setCounterEnd(0);
            }, 1000);
          }
        }}
        onEndReachedThreshold={0.1}
        renderItem={() =>
          isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator />
            </View>
          ) : (
            <View style={styles.comicContainer}>
              <Text
                style={[
                  styles.comicTitle,
                  {
                    color: themeColor === '#000000' ? 'white' : 'black',
                  },
                ]}>
                {CHAPTER_CONTENT.get(chapter)?.title}
              </Text>
              <Text
                style={[
                  styles.comicContent,
                  {
                    color: themeColor === '#000000' ? 'white' : 'black',
                  },
                  {
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    padding: padding,
                    fontFamily: fontFamily,
                  },
                ]}>
                {CHAPTER_CONTENT.get(chapter)?.content}
              </Text>
              <View style={{height: 100}} />
            </View>
          )
        }
        style={{
          backgroundColor: themeColor,
        }}
      />
      <BottomSheet
        isOpen={isOpen}
        toggleSheet={toggleSheet}
        duration={300}
        wrapperStyle={styles.bottomSheetContainer}>
        <View style={{paddingHorizontal: 16, paddingVertical: 12, height: 340}}>
          <ScrollView>
            <View style={styles.bottomSheetHeaderContainer}>
              <TouchableOpacity
                hitSlop={10}
                onPress={() => {
                  setTabBottomSheet(undefined);
                  toggleSheet();
                }}>
                <IconX />
              </TouchableOpacity>
            </View>
            <View style={{gap: 24}}>
              <View>
                <AppText style={styles.themeText}>Màu nền</AppText>
                <View style={styles.themeSelectionContainer}>
                  <TouchableOpacity onPress={() => setThemeColor('#FFFFFF')}>
                    <ImageBackground
                      source={require('../../assets/images/bg-color-1.png')}
                      style={styles.themeItem}>
                      {themeColor === '#FFFFFF' && <IconCheck />}
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setThemeColor('#E5E3DF')}>
                    <ImageBackground
                      source={require('../../assets/images/bg-color-2.png')}
                      style={styles.themeItem}>
                      {themeColor === '#E5E3DF' && <IconCheck />}
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setThemeColor('#EAE4D3')}>
                    <ImageBackground
                      source={require('../../assets/images/bg-color-3.png')}
                      style={styles.themeItem}>
                      {themeColor === '#EAE4D3' && <IconCheck />}
                    </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setThemeColor('#000000')}>
                    <ImageBackground
                      source={require('../../assets/images/bg-color-4.png')}
                      style={styles.themeItem}>
                      {themeColor === '#000000' && <IconCheckWhite />}
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <AppText style={styles.themeText}>Font chữ</AppText>
                <View style={styles.themeSelectionContainer}>
                  <Pressable
                    onPress={() => setFontFamily('Merriweather-Light')}>
                    <ImageBackground
                      source={require('../../assets/images/bg-color-4.png')}
                      style={styles.themeItem}>
                      <AppText style={[{color: '#F8DE5E'}, styles.fontStyle]}>
                        Aa
                      </AppText>
                    </ImageBackground>
                  </Pressable>
                  <Pressable
                    onPress={() => setFontFamily('Merriweather-Light')}>
                    <ImageBackground
                      source={require('../../assets/images/bg-color-1.png')}
                      style={styles.themeItem}>
                      <AppText style={[{color: 'black'}, styles.fontStyle]}>
                        Aa
                      </AppText>
                    </ImageBackground>
                  </Pressable>
                  <Pressable onPress={() => setFontFamily('Inter')}>
                    <ImageBackground
                      source={require('../../assets/images/bg-color-2.png')}
                      style={styles.themeItem}
                    />
                  </Pressable>
                </View>
              </View>
              <View style={styles.menuItemContainer}>
                <View>
                  <AppText style={{fontSize: 14, color: '#090A0B'}}>
                    Cỡ chữ
                  </AppText>
                  <View style={styles.themeSelectionContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        if (fontSize > 0) {
                          setFontSize(fontSize - 1);
                        }
                      }}>
                      <AppImage
                        source={require('../../assets/images/arrow-left-circle.png')}
                        imageStyle={styles.arrowBtn}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <AppText style={{fontSize: 16, color: 'black'}}>
                      {fontSize}
                    </AppText>
                    <TouchableOpacity
                      onPress={() => {
                        setFontSize(fontSize + 1);
                      }}>
                      <AppImage
                        source={require('../../assets/images/arrow-right-circle.png')}
                        imageStyle={styles.arrowBtn}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <AppText style={{fontSize: 14, color: '#090A0B'}}>
                    Khoảng cách dòng
                  </AppText>
                  <View style={styles.themeSelectionContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        if (lineHeight > 0) {
                          setLineHeight(lineHeight - 1);
                        }
                      }}>
                      <AppImage
                        source={require('../../assets/images/arrow-left-circle.png')}
                        imageStyle={styles.arrowBtn}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <AppText style={{fontSize: 16, color: 'black'}}>
                      {lineHeight}
                    </AppText>
                    <TouchableOpacity
                      onPress={() => {
                        setLineHeight(lineHeight + 1);
                      }}>
                      <AppImage
                        source={require('../../assets/images/arrow-right-circle.png')}
                        imageStyle={styles.arrowBtn}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <AppText style={{fontSize: 14, color: '#090A0B'}}>
                    Padding
                  </AppText>
                  <View style={styles.themeSelectionContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        if (padding > 0) {
                          setPadding(padding - 1);
                        }
                      }}>
                      <AppImage
                        source={require('../../assets/images/arrow-left-circle.png')}
                        imageStyle={styles.arrowBtn}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <AppText style={{fontSize: 16, color: 'black'}}>
                      {padding}
                    </AppText>
                    <TouchableOpacity
                      onPress={() => {
                        setPadding(padding + 1);
                      }}>
                      <AppImage
                        source={require('../../assets/images/arrow-right-circle.png')}
                        imageStyle={styles.arrowBtn}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </BottomSheet>
      <BottomSheet
        isOpen={isOpenMenu}
        toggleSheet={toggleSheetMenu}
        duration={300}
        wrapperStyle={styles.bottomSheetContainer}>
        <View style={styles.bottomSheetContentContainer}>
          <View style={styles.bottomSheetHeaderContainer1}>
            <AppText style={styles.headerTitle1}>Danh sách chương</AppText>

            <TouchableOpacity
              hitSlop={10}
              onPress={() => {
                setTabBottomSheet(undefined);
                toggleSheetMenu();
              }}>
              <IconX />
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView>
              {LIST_CHAPTER.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setChapter(item.value);
                    setCounterEnd(0);
                  }}
                  style={styles.chapterItem}>
                  <AppText
                    style={{
                      fontSize: 14,
                      color: chapter === item.value ? '#EBBC5D' : '#22262B',
                    }}>
                    {item.label}
                  </AppText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </BottomSheet>
      <View style={styles.menuContainer}>
        <View style={styles.menuItemContainer}>
          <TouchableOpacity hitSlop={10} onPress={() => setChapter('C1')}>
            <ArrowBack />
          </TouchableOpacity>
          <AppText style={styles.themeText}>
            {chapter === 'C1' ? 'Chương 01' : 'Chương 02'}
          </AppText>
          <TouchableOpacity hitSlop={10} onPress={() => setChapter('C2')}>
            <ArrowRight fill="#EBBC5D" />
          </TouchableOpacity>
        </View>
        <View style={styles.menuItemContainer}>
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
            {tabBottomSheet === 'menu' ? <MenuFill /> : <Menu />}
          </Pressable>
          <Pressable>
            <Moon />
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
            {tabBottomSheet === 'setting' ? <SettingFill /> : <Setting />}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ReadComic;
const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {fontSize: 14, color: '#090A0B'},
  headerTitle1: {color: 'black', fontSize: 16},
  overall: {
    flex: 1,
  },
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  comicContainer: {paddingHorizontal: 16, gap: 12, paddingVertical: 12},
  comicTitle: {fontSize: 16, fontWeight: 700, fontFamily: 'Lora'},
  comicContent: {fontSize: 16, fontFamily: 'Lora'},
  bottomSheetContainer: {height: 430, flex: 1},
  bottomSheetContentContainer: {paddingHorizontal: 16, paddingVertical: 12},
  bottomSheetHeaderContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'flex',
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
  chapterItem: {
    borderBottomWidth: 1,
    borderColor: '#E1E2E5',
    paddingVertical: 10,
  },
  menuContainer: {
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: WIDTH,
    zIndex: 999,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
