import Toast from 'react-native-toast-message';

export const showToast = () => {
  Toast.show({
    type: 'info',
    text1: 'Information',
    text2: 'Feature coming soon, please come back later, thank you so much!',
  });
};
