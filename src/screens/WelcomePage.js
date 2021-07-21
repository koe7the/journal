import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {styles} from '../globals';
import {logIn} from '../redux/actions';

class Welcome extends React.Component {
  state = {
    name: '',
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.elements.screen}>
        <Text style={{fontSize: 60, alignSelf: 'center', marginVertical: 50}}>
          Welcome!
        </Text>
        <TextInput
          label="welcome"
          placeholder="How'd you name"
          mode="outlined"
          style={{width: '90%', alignSelf: 'center'}}
          onChangeText={v => this.setState({name: v})}
        />
        <Button
          style={{marginVertical: 55, width: '45%', alignSelf: 'center'}}
          labelStyle={{fontSize: 20}}
          onPress={() => {
            this.props.dispatch(logIn(this.state.name));
          }}
          mode="contained">
          sign in
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  let {user} = state;
  return {user};
};

export default connect(mapStateToProps)(Welcome);
