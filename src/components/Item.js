import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {styles} from '../globals';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';

export default function Item({item, pin, album, pinned}) {
  return (
    <View style={compStyles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={compStyles.title}>
          {item?.title} {item?.name}
        </Text>
        {!pinned ? (
          <Button
            onPress={() => pin(item)}
            theme={{
              colors: {primary: '#fff', underlineColor: 'transparent'},
            }}>
            <Icon style={compStyles.icon} name="save" />
          </Button>
        ) : null}
      </View>
      {album ? (
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Image
            source={{
              uri: 'https://picsum.photos/700/800',
              height: 200,
              width: 300,
            }}
          />
        </View>
      ) : null}

      <Text style={compStyles.body}>{item?.body}</Text>
    </View>
  );
}
const compStyles = StyleSheet.create({
  container: {
    backgroundColor: styles.colors.primary,
    marginVertical: 20,
    padding: 18,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 25,
    flex: 1,
    color: '#fff',
  },
  body: {
    color: '#fff',
  },
  icon: {
    color: '#fff',
    fontSize: 25,
    marginLeft: 10,
  },
});
