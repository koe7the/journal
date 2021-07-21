import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Button, ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../globals';
import axios from 'axios';
import {connect} from 'react-redux';
import {pinUser} from '../redux/actions';
import {Header} from '../components';
class User extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.item.bind(this);
  }

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
          title="users"
          loading={this.state.users.length === 0 ? true : false}
          nav={this.props.navigation}
        />

        <FlatList
          data={this.state.users}
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
  let {users} = state;
  return {users};
};

export default connect(mapStateToProps)(User);
