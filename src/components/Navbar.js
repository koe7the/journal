import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/actions';

export default () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(logOut())}>
        <Icon name="terminal" style={styles.log_out_icon} />
      </TouchableOpacity>
      <SearchBar
        style={styles.searchbar_element}
        placeholder="Search here..."
        round
        lightTheme
        searchIcon={{size: 35}}
        containerStyle={styles.searchbar_container}
        inputContainerStyle={styles.searchbar_input_container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '7%',
    paddingHorizontal: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  searchbar_container: {
    backgroundColor: '#fff',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    width: '100%',
  },
  searchbar_element: {},
  searchbar_input_container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    backgroundColor: '#fff',
  },
  log_out_icon: {
    fontSize: 35,
  },
});
