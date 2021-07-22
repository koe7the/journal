import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {styles} from '../globals';
import axios from 'axios';
import {connect} from 'react-redux';
import {pinUser} from '../redux/actions';
import {Header, Item} from '../components';
class User extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({data}) => {
        this.setState({users: data});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={screenStyles.container}>
        <Header
          title="users"
          loading={this.state.users.length === 0 ? true : false}
          nav={this.props.navigation}
        />

        <FlatList
          data={this.state.users}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Item
              item={item}
              pin={elem => this.props.dispatch(pinUser(elem))}
            />
          )}
        />
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  container: {backgroundColor: '#fff', height: '100%'},

  post: {
    backgroundColor: styles.colors.primary,
    marginVertical: 20,
    padding: 18,
    width: '90%',
    alignSelf: 'center',
  },
  user_name: {
    fontSize: 25,
    flex: 1,
    color: '#fff',
  },
  post_body: {
    color: '#fff',
  },
  icon: {
    color: '#fff',
    fontSize: 25,
    marginLeft: 10,
  },
});

const mapStateToProps = state => {
  let {users} = state;
  return {users};
};

export default connect(mapStateToProps)(User);
