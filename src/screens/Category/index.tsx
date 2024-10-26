import {ScrollView, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import AppHeader from '@components/AppHeader';
import {WIDTH} from '@constants/index';
import AppImage from '@components/AppImage';
import Card2 from '@screens/HomeScreen/components/Card2';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@utils/types/navigation';
import AppSearch from '@components/AppSearch';
import ChevronLeft from '@assets/icons/common/Chevron-Left';

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;
const CategoryScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <AppHeader
        title="Wuxia"
        leftSection={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft />
          </TouchableOpacity>
        }
        rightSection={<View style={styles.rightSection} />}
      />
      <AppSearch />
      <AppImage
        source={require('@assets/images/banner.png')}
        imageStyle={styles.bannerImage}
        resizeMode="cover"
      />
      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          style={styles.scrollView}>
          {[...Array(6)].map((_, index) => (
            <Card2
              key={index}
              imageStyle={styles.cardImage}
              titleStyle={styles.cardTitle}
              subTitleStyle={styles.cardSubtitle}
            />
          ))}
          <View style={styles.bottomSpace} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightSection: {
    width: 32,
  },
  bannerImage: {
    width: WIDTH,
    height: 214,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 15,
    marginTop: 10,
  },
  cardImage: {
    width: 95,
    height: 126,
  },
  cardTitle: {
    fontSize: 20,
  },
  cardSubtitle: {
    fontSize: 15,
  },
  bottomSpace: {
    height: 30,
  },
});

export default CategoryScreen;
