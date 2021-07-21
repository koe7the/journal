import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../globals';

export default function UserDisplay({username}) {
  return (
    <View style={screenStyles.container}>
      <Icon name="user" style={screenStyles.icon} />
      <Text style={screenStyles.username}>{username}</Text>
    </View>
  );
}

const screenStyles = StyleSheet.create({
  container: {
    backgroundColor: styles.colors.brown,
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
    borderRadius: 10,
    marginTop: 35,
    padding: 20,
  },
  username: {
    color: '#fff',
    fontSize: 25,
  },
  icon: {
    fontSize: 65,
    color: '#fff',
  },
});
