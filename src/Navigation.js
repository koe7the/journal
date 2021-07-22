import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {
  WelcomePage,
  HomePage,
  Post,
  User,
  Album,
  Comment,
  Todo,
  ProfilePage,
} from './screens';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Routes() {
  const user = useSelector(state => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="home" component={HomePage} />
            <Stack.Screen name="post" component={Post} />
            <Stack.Screen name="user" component={User} />
            <Stack.Screen name="album" component={Album} />
            <Stack.Screen name="comment" component={Comment} />
            <Stack.Screen name="todo" component={Todo} />
            <Stack.Screen name="profile" component={ProfilePage} />
          </>
        ) : (
          <>
            <Stack.Screen name="welcome" component={WelcomePage} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
