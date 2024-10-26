import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FirstHalf from '@assets/icons/first-half.svg';
import Magical from '@assets/icons/magical.svg';
import MartialArts from '@assets/icons/martial-arts.svg';
import ScienceFiction from '@assets/icons/science-fiction.svg';
import AppText from '@components/AppText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@utils/types/navigation';

type TCategoryItem = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
};
type CategoryItemNavigationProp = NavigationProp<
  RootStackParamList,
  'Category'
>;

const CategoryItem = ({icon: Icon, label}: TCategoryItem) => {
  const navigation = useNavigation<CategoryItemNavigationProp>();
  return (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => {
        navigation.navigate('Category');
      }}>
      <Icon />
      <AppText style={styles.categoryLabel}>{label}</AppText>
    </TouchableOpacity>
  );
};
type TCategory = {
  gap?: number;
};
const Categories = ({gap = 16}: TCategory) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.categoryWrapper}
      showsHorizontalScrollIndicator={false}>
      <View style={{width: gap}} />
      <CategoryItem icon={FirstHalf} label="Wuxia" key={1} />
      <CategoryItem icon={Magical} label="Fantasy" key={2} />
      <CategoryItem icon={MartialArts} label="Urban" key={3} />
      <CategoryItem icon={ScienceFiction} label="Martial Arts" key={4} />
      <CategoryItem icon={FirstHalf} label="Sci-fi" key={5} />
      <CategoryItem icon={FirstHalf} label="Sci-fi" key={6} />
      <CategoryItem icon={FirstHalf} label="Sci-fi" key={7} />
      <CategoryItem icon={FirstHalf} label="Sci-fi" key={8} />

      <View style={{width: gap}} />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryItem: {
    width: 76,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: '#090A0B',
  },
  categoryWrapper: {gap: 4, alignItems: 'flex-start'},
});
