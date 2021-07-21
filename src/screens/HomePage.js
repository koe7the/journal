import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from '../globals';
import {Navbar} from '../components';
import {connect} from 'react-redux';
const {colors, elements} = styles;

class HomePage extends React.Component {
  render() {
    return (
      <View style={elements.screen}>
        <Navbar />
        <Text style={elements.title}>home page</Text>

        <View style={screenStyles.index}>
          <Text style={screenStyles.index_element}>posts</Text>
          <Text style={screenStyles.index_element}>users</Text>
          <Text style={screenStyles.index_element}>comments</Text>
          <Text style={screenStyles.index_element}>albums</Text>
        </View>
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  index: {
    alignItems: 'center',
  },
  index_element: {
    fontSize: 19,
    textTransform: 'uppercase',
    marginVertical: '2%',
    fontWeight: '700',
  },
});

const mapStateToProps = state => {
  let {user} = state;
  return {user};
};

export default connect(mapStateToProps)(HomePage);
