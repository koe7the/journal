import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {styles} from '../globals';
import {logIn} from '../redux/actions';

class Welcome extends React.Component {
  state = {
    name: '',
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{...styles.elements.screen, justifyContent: 'center'}}>
          <Text style={{fontSize: 60, alignSelf: 'center', marginVertical: 50}}>
            Welcome!
          </Text>
          <TextInput
            label="welcome"
            placeholder="How'd you name"
            mode="outlined"
            onBlur={() => {
              Keyboard.dismiss();
            }}
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#fff',
            }}
            onChangeText={v => this.setState({name: v})}
            theme={{
              colors: {primary: '#000000', underlineColor: 'transparent'},
            }}
          />
          <Button
            style={{
              marginVertical: 55,
              width: '45%',
              alignSelf: 'center',
              backgroundColor: styles.colors.primary,
            }}
            labelStyle={{fontSize: 20}}
            onPress={() => {
              this.props.dispatch(logIn(this.state.name));
            }}
            mode="contained">
            sign in
          </Button>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  let {user} = state;
  return {user};
};

export default connect(mapStateToProps)(Welcome);
