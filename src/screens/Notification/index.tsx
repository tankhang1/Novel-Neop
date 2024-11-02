import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import {COLORS} from '@constants/index';
import Item from './components/Item';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import NotificationBellCross from '@assets/icons/common/Notification-Bell-Cross';
import {SafeAreaView} from 'react-native-safe-area-context';

const NotificationScreen = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const isEmpty = false;
  const onDeleteClick = () => {
    setOpenDeleteModal(true);
  };

  const renderItem = () => {
    return <Item onDeleteClick={onDeleteClick} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <Header />
        {isEmpty ? (
          <View style={styles.emptyContainer}>
            <Image
              source={require('@assets/images/no-notification.png')}
              style={styles.image}
            />
            <Text style={styles.title}>No notification yet</Text>
            <Text style={styles.text}>
              Stay tuned! We'll notify you when there's something new.
            </Text>
            <View style={styles.bottomSpacing} />
          </View>
        ) : (
          <View>
            <FlatList
              renderItem={renderItem}
              data={Array.from({length: 10})}
              ListFooterComponent={<View style={styles.bottomSpacing} />}
            />
          </View>
        )}
        <Modal
          visible={openDeleteModal}
          onRequestClose={() => setOpenDeleteModal(false)}
          transparent
          animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <NotificationBellCross color="red" width={36} height={36} />
              <View style={styles.modalTextContainer}>
                <Text style={styles.modalTitle}>Delete All This ?</Text>
                <Text style={styles.modalMessage}>
                  Are you sure you want to delete all this? This action cannot
                  be undone.
                </Text>
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  onPress={() => setOpenDeleteModal(false)}
                  style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightmode.netrual[0],
  },
  emptyContainer: {
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 208,
    height: 217,
  },
  text: {
    color: COLORS.lightmode.netrual[300],
    fontSize: 16,
    letterSpacing: 1.5,
    width: '70%',
    textAlign: 'center',
    lineHeight: 22.4,
  },
  title: {
    color: COLORS.lightmode.primary[600],
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
    lineHeight: 33,
  },
  bottomSpacing: {
    height: 250,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    padding: 24,
    gap: 15,
    borderRadius: 32,
  },
  modalTextContainer: {
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    lineHeight: 34,
    color: COLORS.lightmode.netrual[900],
  },
  modalMessage: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    lineHeight: 20,
    letterSpacing: 1,
    textAlign: 'center',
    color: COLORS.lightmode.netrual[500],
  },
  modalButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    height: 44,
    borderColor: COLORS.lightmode.netrual[200],
  },
  cancelButtonText: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    lineHeight: 24,
    fontWeight: '700',
    color: COLORS.lightmode.netrual[500],
  },
  deleteButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 44,
    backgroundColor: COLORS.lightmode.error[500],
  },
  deleteButtonText: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    lineHeight: 24,
    fontWeight: '700',
    color: COLORS.lightmode.netrual[0],
  },
});
