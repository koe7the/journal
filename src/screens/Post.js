import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {styles} from '../globals';
import axios from 'axios';
import {connect} from 'react-redux';
import {pinPost} from '../redux/actions';
import {Header, Item} from '../components';

class Post extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({data}) => {
        this.setState({posts: data.slice(60)});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={screenStyles.container}>
        <Header
          title="posts"
          loading={this.state.posts.length === 0 ? true : false}
          nav={this.props.navigation}
        />

        <FlatList
          data={this.state.posts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Item
              item={item}
              pin={elem => this.props.dispatch(pinPost(elem))}
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
  post_title: {
    fontSize: 25,
    flex: 1,
    color: '#fff',
  },
  post_body: {
    color: '#fff',
  },
  post_icon: {
    color: '#fff',
    fontSize: 25,
    marginLeft: 10,
  },
});

const mapStateToProps = state => {
  let {posts} = state;
  return {posts};
};

export default connect(mapStateToProps)(Post);
