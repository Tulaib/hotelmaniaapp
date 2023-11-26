/* eslint-disable */

import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default function MapScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Text
        onPress={() => navigation.navigate('Home')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        MapS Screen
      </Text> */}
        <MapView
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: 24.82836261115321,
            longitude: 67.16178414584118,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
    </SafeAreaView>
  );
}
