import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Button, ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../globals';
import axios from 'axios';
import {connect} from 'react-redux';
import {pinPost} from '../redux/actions';
import {Header} from '../components';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.item.bind(this);
  }

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

  item({item}) {
    return (
      <View style={screenStyles.post}>
        <View style={{flexDirection: 'row'}}>
          <Text style={screenStyles.item_title}>{item.title}</Text>
          <Button
            onPress={() => this.props.dispatch(pinPost(item))}
            theme={{
              colors: {primary: '#fff', underlineColor: 'transparent'},
            }}>
            <Icon style={screenStyles.item_icon} name="save" />
          </Button>
        </View>
        <Text style={screenStyles.post_body}>{item.completed}</Text>
      </View>
    );
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
          renderItem={this.item}
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
