import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
// import NotificationBellCheck from '@assets/icons/common/Notification-Bell-Check';
// import NotificationBellCross from '@assets/icons/common/Notification-Bell-Cross';
import BellNotificationSquare from '@assets/icons/common/Bell-Notification-Square';
import {COLORS} from '@constants/index';
import NotificationBellCheck from '@assets/icons/common/Notification-Bell-Check';
import NotificationBellCross from '@assets/icons/common/Notification-Bell-Cross';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BellNotificationSquare
          color={COLORS.lightmode.primary[600]}
          width={36}
          height={36}
        />
        <Text style={styles.titleText}>Notifications</Text>
        <Text style={styles.notificationCount}>(0+)</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButtonWarning}>
          <NotificationBellCheck
            color={COLORS.lightmode.netrual[0]}
            width={24}
            height={24}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButtonError}>
          <NotificationBellCross
            color={COLORS.lightmode.netrual[0]}
            width={24}
            height={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomColor: COLORS.lightmode.netrual[100],
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 45,
    color: COLORS.lightmode.netrual[900],
  },
  notificationCount: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 23,
    color: COLORS.lightmode.netrual[300],
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconButtonWarning: {
    width: 36,
    height: 36,
    borderRadius: 11,
    backgroundColor: COLORS.lightmode.warning[500],
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonError: {
    width: 36,
    height: 36,
    borderRadius: 11,
    backgroundColor: COLORS.lightmode.error[500],
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
