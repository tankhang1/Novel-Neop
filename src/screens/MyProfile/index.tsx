import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {ASSETS, COLORS, HEIGHT} from '@constants/index';
import AppImageWrapper from '@components/AppImageWrapper';
// import AppImage from '@components/AppImage';
// import AppSwitch from '@components/AppSwitch';
import CloseX from '@assets/icons/common/CloseX';
import ChevronRight from '@assets/icons/common/Chevron-Right';
// import Edit from '@assets/icons/common/Edit';
import {SafeAreaView} from 'react-native-safe-area-context';
// import PaperFill from '@assets/icons/common/Paper-Fill';
// import RoundPrivacyTip from '@assets/icons/common/Round-Privacy-Tip';
import About from '@assets/icons/common/About';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamList, RootStackParamList} from '@utils/types/navigation';
import AppImage from '@components/AppImage';
import RoundPrivacyTip from '@assets/icons/common/Round-Privacy-Tip';
import PaperFill from '@assets/icons/common/Paper-Fill';
import AppSwitch from '@components/AppSwitch';
import Edit from '@assets/icons/common/Edit';

const LIST_MALE_AVATAR = [
  require('@assets/images/avatar/01.png'),
  require('@assets/images/avatar/03.png'),
  require('@assets/images/avatar/05.png'),
  require('@assets/images/avatar/07.png'),
  require('@assets/images/avatar/09.png'),
];
const LIST_FEMALE_AVATAR = [
  require('@assets/images/avatar/02.png'),
  require('@assets/images/avatar/04.png'),
  require('@assets/images/avatar/06.png'),
  require('@assets/images/avatar/08.png'),
  require('@assets/images/avatar/10.png'),
];
type Props = NativeStackScreenProps<
  RootStackParamList & Pick<BottomTabParamList, 'MyProfile'>
>;
const MyProfileScreen = ({navigation}: Props) => {
  const [openSelectAvatar, setOpenSelectAvatar] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.avatarWrapper}>
          <AppImageWrapper
            type="AVATAR"
            source={require('@assets/images/avatar.png')}
            resizeMode="contain"
            imageStyle={styles.avatarImage}
          />
          {/* <TouchableOpacity
            style={styles.editIcon}
            onPress={() => setOpenSelectAvatar(true)}>
            <Edit color="white" width={18} height={18} />
          </TouchableOpacity> */}
        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.nameText}>Me</Text>
          {/* <Text style={styles.changeNameText}>Change your name</Text> */}
        </View>
      </View>
      <View style={styles.optionsWrapper}>
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.optionContent}>
            <AppImage
              source={ASSETS.IMAGES.NotificationSettingImage}
              resizeMode="stretch"
              imageStyle={styles.optionImage}
            />
            <Text style={styles.optionText}>Notification</Text>
          </View>
          <AppSwitch />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.optionContent}>
            <ImageBackground
              source={require('@assets/images/bg-icon-2.png')}
              style={styles.iconContainer}>
              <PaperFill />
            </ImageBackground>
            <Text style={styles.optionText}>Terms of Service</Text>
          </View>
          <ChevronRight variant="bold" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.optionContent}>
            <ImageBackground
              source={require('@assets/images/bg-icon-2.png')}
              style={styles.iconContainer}>
              <RoundPrivacyTip />
            </ImageBackground>
            <Text style={styles.optionText}>Privacy Policy</Text>
          </View>
          <ChevronRight variant="bold" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => navigation.navigate('About')}>
          <View style={styles.optionContent}>
            <ImageBackground
              source={require('@assets/images/bg-icon-2.png')}
              style={styles.iconContainer}>
              <About />
            </ImageBackground>
            <Text style={styles.optionText}>About</Text>
          </View>
          <ChevronRight variant="bold" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.optionContent}>
            <AppImage
              source={ASSETS.IMAGES.LogoutSettingImage}
              resizeMode="stretch"
              imageStyle={styles.optionImage}
            />
            <Text style={[styles.optionText, styles.logoutText]}>Log out</Text>
          </View>
          <ChevronRight variant="bold" />
        </TouchableOpacity>
      </View>
      <Modal
        visible={openSelectAvatar}
        onRequestClose={() => setOpenSelectAvatar(false)}
        transparent
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <View style={styles.spacer} />
              <Text style={styles.title}>Select avatar</Text>
              <TouchableOpacity
                onPress={() => setOpenSelectAvatar(false)}
                style={styles.closeButton}>
                <CloseX color="white" width={20} height={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.scrollContainer}>
              <ScrollView contentContainerStyle={styles.avatarContainer}>
                <View style={styles.avatarColumn}>
                  <View style={styles.avatarList}>
                    {LIST_MALE_AVATAR.map((avatar, index) => (
                      <Image
                        source={avatar}
                        key={index}
                        resizeMode="cover"
                        style={styles.modalAvatarImage}
                      />
                    ))}
                  </View>
                </View>
                <View style={styles.avatarColumn}>
                  <View style={styles.avatarList}>
                    {LIST_FEMALE_AVATAR.map((avatar, index) => (
                      <Image
                        source={avatar}
                        key={index}
                        resizeMode="cover"
                        style={styles.modalAvatarImage}
                      />
                    ))}
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    backgroundColor: COLORS.lightmode.netrual[0],
    paddingVertical: 32,
  },
  avatarWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    alignSelf: 'center',
  },
  avatarImage: {
    width: 80,
    height: 80,
    zIndex: 999,
  },
  scrollContainer: {maxHeight: HEIGHT * 0.7},
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    zIndex: 999,
    backgroundColor: COLORS.lightmode.netrual[900],
    borderRadius: 100,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameWrapper: {
    marginTop: 15,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
  },
  changeNameText: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'rgba(0, 0, 0, 1)',
  },
  optionsWrapper: {
    padding: 20,
    marginHorizontal: 8,
    borderRadius: 30,
    gap: 20,
    backgroundColor: COLORS.lightmode.netrual[25],
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  optionImage: {
    width: 47,
    height: 47,
  },
  optionText: {
    fontSize: 17,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: COLORS.lightmode.netrual[900],
  },
  logoutText: {
    color: COLORS.lightmode.error[700],
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust for backdrop effect
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 50,
    width: '90%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  spacer: {
    width: 20,
  },
  title: {
    color: COLORS.lightmode.netrual[900],
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: '700',
  },
  closeButton: {
    backgroundColor: COLORS.lightmode.netrual[300],
    borderRadius: 100,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  avatarColumn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarTitle: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.lightmode.netrual[500],
    fontWeight: '500',
    marginBottom: 10,
  },
  avatarList: {
    gap: 10,
  },
  modalAvatarImage: {
    width: 103,
    height: 103,
    resizeMode: 'cover',
  },
  iconContainer: {
    width: 47,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyProfileScreen;
