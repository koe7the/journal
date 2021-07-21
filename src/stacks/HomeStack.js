import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage, Post} from '../screens';
const HomeStack = createBottomTabNavigator();

export default () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={HomePage} />
      <HomeStack.Screen name="post" component={Post} />
    </HomeStack.Navigator>
  );
};
