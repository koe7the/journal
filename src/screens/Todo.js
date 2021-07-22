import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {styles} from '../globals';
import axios from 'axios';
import {connect} from 'react-redux';
import {pinPost, pinTodo} from '../redux/actions';
import {Header, Item} from '../components';

class Post extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(({data}) => {
        this.setState({todos: data.slice(60)});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={screenStyles.container}>
        <Header
          title="todos"
          loading={this.state.todos.length === 0 ? true : false}
          nav={this.props.navigation}
        />

        <FlatList
          data={this.state.todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Item
              item={item}
              pin={elem => this.props.dispatch(pinTodo(elem))}
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
  item_title: {
    fontSize: 25,
    flex: 1,
    color: '#fff',
  },
  post_body: {
    color: '#fff',
  },
  item_icon: {
    color: '#fff',
    fontSize: 25,
    marginLeft: 10,
  },
});

const mapStateToProps = state => {
  let {todos} = state;
  return {todos};
};

export default connect(mapStateToProps)(Post);
