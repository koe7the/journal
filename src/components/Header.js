import React from 'react';
import {Text, View} from 'react-native';
import {ActivityIndicator, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../globals';

export default function ({nav, loading, title}) {
  return (
    <View
      style={{
        paddingRight: '5%',
        paddingLeft: '1%',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      }}>
      <Button
        theme={{colors: {primary: '#000000'}}}
        onPress={() => nav.goBack()}>
        <Icon style={{fontSize: 70}} name="caret-left" />
      </Button>
      <Text
        style={{
          ...styles.elements.title,
          textAlign: 'center',
          fontSize: 40,
        }}>
        {title}
      </Text>
      <ActivityIndicator
        style={{alignSelf: 'center'}}
        size={35}
        color={styles.colors.black}
        animating={loading}
      />
    </View>
  );
}

//this.state.albums.length === 0 ? true : false
