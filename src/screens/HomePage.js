import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from '../globals';
import {connect} from 'react-redux';
import UserDisplay from '../components/UserDisplay';
import {Navbar} from '../components';

const {colors, elements} = styles;

class HomePage extends React.Component {
  navigateTo(v) {
    this.props.navigation.navigate(v);
  }

  render() {
    return (
      <View style={elements.screen}>
        <Navbar />
        <UserDisplay username={this.props.user} />
        <Text style={elements.title}>home page</Text>

        <View style={screenStyles.index}>
          <Button
            onPress={() => this.navigateTo('post')}
            mode="contained"
            style={screenStyles.index_element}>
            posts
          </Button>
          <Button
            onPress={() => this.navigateTo('user')}
            mode="contained"
            style={screenStyles.index_element}>
            users
          </Button>
          <Button
            onPress={() => this.navigateTo('comment')}
            mode="contained"
            style={screenStyles.index_element}>
            comments
          </Button>
          <Button
            onPress={() => this.navigateTo('album')}
            mode="contained"
            style={screenStyles.index_element}>
            albums
          </Button>
          <Button
            onPress={() => this.navigateTo('todo')}
            mode="contained"
            style={screenStyles.index_element}>
            todos
          </Button>
        </View>
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  index: {
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  index_element: {
    fontSize: 19,
    textTransform: 'uppercase',
    marginVertical: '2%',
    fontWeight: '700',
    width: '100%',
    backgroundColor: colors.primary,
  },
});

const mapStateToProps = state => {
  let {user} = state;
  return {user};
};

export default connect(mapStateToProps)(HomePage);
