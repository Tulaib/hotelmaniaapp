/* eslint-disable */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';
import {darkGreen} from './Constant';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen names
const homeName = 'Home';
const mapName = 'Map';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === mapName) {
              iconName = focused ? 'map' : 'map-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: darkGreen,
          inactiveTintColor: 'grey',
          labelStyle: {paddingBottom: 10, fontSize: 10},
          style: {padding: 10, height: 80},
        }}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={mapName} component={MapScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
