/* eslint-disable */

import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import Signup from '../Signup';
import Login from '../Login';
const Stack = createNativeStackNavigator();

const authStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="MainContainer" component={MainContainer} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default authStack;
