import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Modal, Portal, Provider} from 'react-native-paper';
import {styles} from '../globals';
import {connect} from 'react-redux';
import {clean} from '../redux/actions'
import UserDisplay from '../components/UserDisplay';
import {Navbar} from '../components';

const {colors, elements} = styles;

class HomePage extends React.Component {
  state= {
    showModal: false
  }
  navigateTo(v) {
    this.props.navigation.navigate(v);
  }


  render() {
    return (
      <Provider>
        <View style={elements.screen}>
          <Navbar />
          <UserDisplay username={this.props.user} nav={this.props.navigation} />
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

          <View style={screenStyles.index}>
            <Button onPress={()=>{
              this.props.dispatch(clean())
              this.setState({showModal:true})
            }} mode="contained" style={{...screenStyles.index_element, backgroundColor: "red"}}>
              clean
            </Button>
          </View>

          <Portal>

            <Modal visible={this.state.showModal}  onDismiss={()=>this.setState({showModal: false})} style={{backgroundColor: 'white', alignItems:"center", height:"50%", alignSelf:"center", marginTop:"50%" }}>
              <Text style={{fontWeight:"700", fontSize:68}}>
                state cleaned
              </Text>
            </Modal>
          </Portal>

        </View>
      </Provider>
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
