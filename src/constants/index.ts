import {Dimensions, ImageSourcePropType} from 'react-native';
import HomeInActiveIcon from '@assets/icons/navigation/home-inactive.svg';
import HomeActiveIcon from '@assets/icons/navigation/home-active.svg';
import LibraryInActiveIcon from '@assets/icons/navigation/library-inactive.svg';
import LibraryActiveIcon from '@assets/icons/navigation/library-active.svg';
import NotificationInActiveIcon from '@assets/icons/navigation/notification-inactive.svg';
import NotificationActiveIcon from '@assets/icons/navigation/notification-active.svg';
import ProfileInActiveIcon from '@assets/icons/navigation/profile-inactive.svg';
import ProfileActiveIcon from '@assets/icons/navigation/profile-active.svg';
import SortIcon from '@assets/icons/sort.svg';
import SortUpIcon from '@assets/icons/sort-up.svg';
import TopTabIndicatorIcon from '@assets/icons/top-tab-indicator.svg';
import StarFillIcon from '@assets/icons/star-fill.svg';
import SendFillIcon from '@assets/icons/send-fill.svg';
import SubtractIcon from '@assets/icons/common/Subtract';
import LineHeightIcon from '@assets/icons/line-height.svg';
import MarginIcon from '@assets/icons/margin.svg';
import Settings from '@assets/icons/common/Settings';
import {COMMIC_EN} from './journey_to_the_west/en';
import {COMMIC_BALLAD_EN} from './ballad_of_the_desert/en';

import {COMIC_HINDI} from './journey_to_the_west/hidi';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ASSETS = {
  IMAGES: {
    NotificationSettingImage: require('@assets/images/notification-setting.png'),
    SettingImage: require('@assets/images/setting.png'),
    LogoutSettingImage: require('@assets/images/logout-setting.png'),
    AppBackground: require('@assets/images/app-background.png'),
  },
  ICONS: {
    HomeActiveIcon,
    HomeInActiveIcon,
    LibraryActiveIcon,
    LibraryInActiveIcon,
    NotificationInActiveIcon,
    NotificationActiveIcon,
    ProfileActiveIcon,
    ProfileInActiveIcon,
    SortIcon,
    SortUpIcon,
    TopTabIndicatorIcon,
    StarFillIcon,
    SubtractIcon,
    MarginIcon,
    LineHeightIcon,
    SendFillIcon,
    Settings,
  },
};
const COLORS = {
  empty: 'rgba(255,255,255,0.01)',
  lightmode: {
    primary: {
      50: '#FEFBEC',
      100: '#FDF9E3',
      200: '#FCF5D1',
      400: '#F8E790',
      500: '#F8DE5E',
      600: '#EBBC5D',
      800: '#AA8143',
    },
    secondary: {
      50: '#F0F9F9',
      100: '#E5F4F5',
      200: '#CFEBED',
      400: '#81CBD0',
      500: '#50B7BE',
      600: '#4AA8AF',
      800: '#306D71',
    },
    netrual: {
      0: '#FFFFFF',
      25: '#FAFAFA',
      50: '#F1F2F3',
      100: '#E1E2E5',
      200: '#C4C6CD',
      300: '#A3A5AE',
      500: '#626576',
      700: 'rgba(34, 38, 43, 1)',
      900: '#090A0B',
    },
    success: {
      50: '#EEFAF5',
      500: '#12B76A',
      700: '#0E9154',
    },
    warning: {
      50: '#FDF8EA',
      500: '#EAAA08',
      700: '#C48F07',
    },
    error: {
      50: '#FDF1F3',
      500: '#E01839',
      700: '#A9122B',
    },
  },
};
export type TComic = Map<
  number,
  {
    createdAt: Date;
    title: string;
    content: string;
  }
>;
export type TComicData = {
  comic_name: string;
  image: ImageSourcePropType;
  key: string;
  desc: {
    en?: string;
    hindi?: string;
  };
  chapter: {
    en: TComic;
    hindi?: TComic;
  };
  language: string[];
  banner: ImageSourcePropType;
};
const COMIC_DATA: TComicData[] = [
  {
    comic_name: 'Journey to the West',
    image: require('@assets/images/journey_banner.png'),
    key: 'journey',
    banner: require('@assets/images/banner.png'),
    desc: {
      en: `"Journey to the West", one of the Four Great Classical Novels of Chinese literature, is an epic adventure story that blends myth, history, folklore, and religious allegory. Written during the Ming dynasty by Wu Cheng'en, it follows the journey of the Buddhist monk Xuanzang, who travels from China to India to retrieve sacred texts. His pilgrimage is fraught with challenges, requiring courage, wisdom, and resilience. Accompanying him are three protectors: the mischievous Monkey King, Sun Wukong, known for his incredible strength and magical abilities; the loyal yet gluttonous pig, Zhu Bajie; and the quiet but steadfast river ogre, Sha Wujing. 
  Throughout their journey, they confront fierce monsters, powerful demons, and internal weaknesses, each of them undergoing personal growth and transformation. "Journey to the West" captures universal themes of redemption, spiritual enlightenment, and the struggle between good and evil, making it a timeless masterpiece that has influenced countless adaptations in literature, theater, and film.`,
      hindi: `पश्चिम की यात्रा, चार महान चीनी शास्त्रीय उपन्यासों में से एक है, जो पौराणिक कथाओं, इतिहास, लोककथाओं और धार्मिक प्रतीकवाद का मिश्रण करते हुए एक महाकाव्य रोमांचक कथा है। इसे मिंग राजवंश के दौरान वू चेंग’एन द्वारा लिखा गया माना जाता है और यह बौद्ध भिक्षु सानज़ंग (ज़ुआनज़ांग) की यात्रा का अनुसरण करता है, जो पवित्र ग्रंथों को लाने के लिए चीन से भारत की यात्रा करते हैं। उनकी यात्रा चुनौतियों से भरी होती है, जो साहस, ज्ञान, और धैर्य की परीक्षा लेती है। उनके साथ तीन रक्षक भी हैं: शरारती बंदर राजा सुन वुकोंग, जो अपनी अद्वितीय शक्ति और जादुई क्षमताओं के लिए प्रसिद्ध है; वफादार लेकिन लालची सुअर, झू बाजी; और शांत लेकिन अडिग नदी-ओगरे, शा वूजिंग।
  इस यात्रा के दौरान, वे भयंकर राक्षसों, शक्तिशाली दैत्यों और अपनी आंतरिक कमजोरियों का सामना करते हैं, जिससे हर पात्र व्यक्तिगत विकास और परिवर्तन से गुजरता है। "पश्चिम की यात्रा" में मुक्ति, आध्यात्मिक जागृति, और अच्छाई और बुराई के संघर्ष जैसे सार्वभौमिक विषयों को दर्शाया गया है, जो इसे एक कालातीत कृति बनाते हैं और साहित्य, रंगमंच और फिल्म में कई पीढ़ियों तक इसकी प्रेरणा को बनाए रखते हैं।
  `,
    },
    chapter: {
      en: COMMIC_EN,
      hindi: COMIC_HINDI,
    },
    language: ['English', 'Hindi'],
  },
  {
    comic_name: 'Ballad of the Desert',
    image: require('@assets/images/ballad_of_the_dessert.jpg'),
    key: 'ballad_of_the_dessert',
    desc: {
      en: `Yu Jin is an orphan, who was raised by wolves in the desert before a Han living with a Xiongnu tribe takes her back to camp. She soon becomes friends with Xiongnu children, including Yu Dan, Yi Zhi Xie and Mu Da Duo. One year later, due to political changes, her foster father is killed.`,
    },
    banner: require('@assets/images/banner_3.jpg'),
    language: ['English'],
    chapter: {
      en: COMMIC_BALLAD_EN,
    },
  },
];

export {WIDTH, HEIGHT, ASSETS, COLORS, COMIC_DATA};
