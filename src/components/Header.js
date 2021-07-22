import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../globals';

export default function ({nav, loading, title}) {
  return (
    <View
      style={{
        paddingHorizontal: '5%',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Icon style={{fontSize: 70}} name="caret-left" />
      </TouchableOpacity>
      <Text
        style={{
          ...styles.elements.title,
          textAlign: 'center',
          fontSize: 40,
        }}>
        {title}
      </Text>
      <ActivityIndicator
        size={35}
        color={styles.colors.black}
        animating={loading}
      />
    </View>
  );
}

//this.state.albums.length === 0 ? true : false
