import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../globals';
import axios from 'axios';
import {connect} from 'react-redux';
import {pinUser} from '../redux/actions';
import {Header} from '../components';
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.item.bind(this);
  }

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

  item({item}) {
    return (
      <View style={screenStyles.post}>
        <View style={{flexDirection: 'row'}}>
          <Text style={screenStyles.user_name}>{item.name}</Text>
          <Button
            onPress={() => this.props.dispatch(pinUser(item))}
            theme={{
              colors: {primary: '#fff', underlineColor: 'transparent'},
            }}>
            <Icon style={screenStyles.icon} name="save" />
          </Button>
        </View>
      </View>
    );
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
