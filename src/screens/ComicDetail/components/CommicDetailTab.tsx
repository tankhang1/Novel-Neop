import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Tag from '@screens/HomeScreen/components/Tag';
import AppText from '@components/AppText';
import {COLORS} from '@constants/index';

const CommicDetailTab = () => {
  return (
    <View>
      <ScrollView horizontal contentContainerStyle={styles.tagContainer}>
        <Tag
          isGray={true}
          content="#Popular"
          textStyle={styles.tagTxtStyle}
          wrapperStyle={styles.tagItemStyle}
        />
        <Tag
          isGray={true}
          content="#Hot"
          textStyle={styles.tagTxtStyle}
          wrapperStyle={styles.tagItemStyle}
        />
        <Tag
          isGray={true}
          content="#EpicAdventure"
          textStyle={styles.tagTxtStyle}
          wrapperStyle={styles.tagItemStyle}
        />
        <Tag
          isGray={true}
          content="#MythicalCreatures"
          textStyle={styles.tagTxtStyle}
          wrapperStyle={styles.tagItemStyle}
        />
      </ScrollView>
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionWrapper}>
          <AppText style={styles.descriptionText}>
            Embark on the journey of Sun Wukong, the Monkey King, who rises from
            humble beginnings to legendary status. Armed with extraordinary
            abilities and a mischievous personality, he challenges gods and
            demons alike. As Wukong confronts the trials of his destiny, he must
            learn to wield his powers for both personal vengeance and to protect
            the realm.
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default CommicDetailTab;
const styles = StyleSheet.create({
  tagContainer: {
    gap: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tagTxtStyle: {
    fontSize: 16,
    fontFamily: 'UVNBayBuomHepNang-Regular',
    color: COLORS.lightmode.netrual[900],
    fontWeight: '400',
  },
  tagItemStyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  descriptionText: {
    fontSize: 15,
    color: COLORS.lightmode.netrual[700],
    lineHeight: 24,
    fontFamily: 'Montserrat',
  },
  descriptionWrapper: {
    gap: 12,
  },
});
