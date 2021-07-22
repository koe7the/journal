import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {styles} from '../globals';
import axios from 'axios';
import {connect} from 'react-redux';
import {pinComment} from '../redux/actions';
import {Header, Item} from '../components';
class Comment extends React.Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(({data}) => {
        this.setState({comments: data});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={screenStyles.container}>
        <Header
          title="comments"
          loading={this.state.comments.length === 0 ? true : false}
          nav={this.props.navigation}
        />

        <FlatList
          data={this.state.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Item
              item={item}
              pin={elem => this.props.disptach(pinComment(elem))}
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
  let {comments} = state;
  return {comments};
};

export default connect(mapStateToProps)(Comment);
