import {
  View,
  Text,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {ASSETS, COLORS} from '@constants/index';
import dayjs from 'dayjs';

type TComment = {
  avatar: string;
  sender: string;
  createdAt: Date;
  countLike: number;
  message: string;
};

const AppComment = ({
  avatar,
  sender,
  countLike,
  createdAt,
  message,
  containerStyle,
}: TComment & {containerStyle?: StyleProp<ViewStyle>}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <View style={styles.senderInfo}>
          <Image
            source={{uri: avatar}}
            style={styles.avatar}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.senderName}>{sender}</Text>
            <Text style={styles.timestamp}>{dayjs(createdAt).fromNow()}</Text>
          </View>
        </View>
        <View style={styles.likeInfo}>
          <ASSETS.ICONS.LikeIcon
            stroke={COLORS.lightmode.netrual[300]}
            fill="none"
          />
          <Text style={styles.likeCount}>{countLike}</Text>
        </View>
      </View>
      <Text numberOfLines={4} style={styles.message}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightmode.netrual[50],
    width: 362,
    padding: 15,
    gap: 5,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  senderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 33,
    height: 33,
    borderRadius: 100,
  },
  senderName: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: COLORS.lightmode.netrual[900],
  },
  timestamp: {
    color: COLORS.lightmode.netrual[500],
    fontSize: 11,
    fontFamily: 'Montserrat',
  },
  likeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  likeCount: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: COLORS.lightmode.netrual[300],
  },
  message: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: COLORS.lightmode.netrual[900],
  },
});

export default AppComment;