import {Dimensions} from 'react-native';
import HomeInActiveIcon from '@assets/icons/navigation/home-inactive.svg';
import HomeActiveIcon from '@assets/icons/navigation/home-active.svg';
import LibraryInActiveIcon from '@assets/icons/navigation/library-inactive.svg';
import LibraryActiveIcon from '@assets/icons/navigation/library-active.svg';
import NotificationInActiveIcon from '@assets/icons/navigation/notification-inactive.svg';
import NotificationActiveIcon from '@assets/icons/navigation/notification-active.svg';
import ProfileInActiveIcon from '@assets/icons/navigation/profile-inactive.svg';
import ProfileActiveIcon from '@assets/icons/navigation/profile-active.svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ASSETS = {
  IMAGES: {},
  ICONS: {
    HomeActiveIcon,
    HomeInActiveIcon,
    LibraryActiveIcon,
    LibraryInActiveIcon,
    NotificationInActiveIcon,
    NotificationActiveIcon,
    ProfileActiveIcon,
    ProfileInActiveIcon,
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
export {WIDTH, HEIGHT, ASSETS, COLORS};