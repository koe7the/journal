import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header, Item} from '../components';
import {connect} from 'react-redux';

class ProfilePage extends React.Component {
  state = {
    posts: this.props.posts,
    comments: this.props.comments,
    users: this.props.users,
    user: this.props.user,
    albums: this.props.albums,
    todos: this.props.todos,
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View>
        <Header
          loading={false}
          title={this.state.user}
          nav={this.props.navigation}
        />

        <View style={{height: '50%'}}>
          <Text>posts</Text>
          <FlatList
            data={this.state.posts}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Item item={item} pinned />}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {...state};
};

export default connect(mapStateToProps)(ProfilePage);
