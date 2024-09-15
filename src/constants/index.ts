import {Dimensions} from 'react-native';
import SearchIcon from '../assets/icons/search.svg';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ASSETS = {
  IMAGES: {},
  ICONS: {
    SEARCH: SearchIcon,
  },
};
export {WIDTH, HEIGHT, ASSETS};
