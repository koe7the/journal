import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../globals';

export default function UserDisplay({username, nav}) {
  return (
    <TouchableOpacity
      onPress={() => nav.navigate('profile')}
      style={screenStyles.container}>
      <Icon name="user" style={screenStyles.icon} />
      <Text style={screenStyles.username}>{username}</Text>
    </TouchableOpacity>
  );
}

const screenStyles = StyleSheet.create({
  container: {
    backgroundColor: styles.colors.primary,
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
