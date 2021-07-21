import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './src/stacks';
export default function () {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
