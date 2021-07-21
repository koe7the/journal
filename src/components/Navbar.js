import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from 'react-native-elements';

export default () => {
  const [state, setState] = useState(null);

  return (
    <View style={styles.container}>
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
  },
  searchbar_element: {
    flex: 1,
    width: '100%',
    borderColor: 'red',
  },
  searchbar_container: {
    backgroundColor: '#fff',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  searchbar_input_container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    backgroundColor: '#fff',
  },
});
