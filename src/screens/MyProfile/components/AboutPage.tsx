import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@utils/types/navigation';
import ChevronLeft from '@assets/icons/common/Chevron-Left';
import {SafeAreaView} from 'react-native-safe-area-context';
type Props = NativeStackScreenProps<RootStackParamList, 'About'>;
const AboutPage = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.overall}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonContainer}>
        <View style={styles.backButton} hitSlop={10}>
          <ChevronLeft width={24} height={24} color="rgba(0,0,0,1)" />
        </View>
        <Text style={styles.backTxtButton}>Back</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.version}>Version: 0.0.1</Text>
        <Text style={styles.company}>Company: Neo Prototype</Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  backTxtButton: {
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 24,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: -5,
  },
  backButton: {
    padding: 10,
  },
  content: {
    padding: 10,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
  },
  overall: {
    flex: 1,
    backgroundColor: 'white',
  },
  version: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  company: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
});
