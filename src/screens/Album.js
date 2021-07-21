import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {Button, ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../globals';
import axios from 'axios';
import {connect} from 'react-redux';
import {pinAlbum} from '../redux/actions';
import {Header} from '../components';
class User extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.item.bind(this);
  }

  state = {
    albums: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(({data}) => {
        this.setState({albums: data});
      })
      .catch(err => console.log(err));
  }

  item({item}) {
    return (
      <View style={screenStyles.post}>
        <View style={{flexDirection: 'row'}}>
          <Text style={screenStyles.user_name}>{item.title}</Text>
          <Button
            onPress={() => this.props.dispatch(pinAlbum(item))}
            theme={{
              colors: {primary: '#fff', underlineColor: 'transparent'},
            }}>
            <Icon style={screenStyles.icon} name="save" />
          </Button>
        </View>
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Image
            source={{
              uri: 'https://picsum.photos/700/800',
              height: 200,
              width: 300,
            }}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={screenStyles.container}>
        <Header
          title="albums"
          loading={this.state.albums.length === 0 ? true : false}
          nav={this.props.navigation}
        />

        <FlatList
          data={this.state.albums}
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
  let {albums} = state;
  return {albums};
};

export default connect(mapStateToProps)(User);
