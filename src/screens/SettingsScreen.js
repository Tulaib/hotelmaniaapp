/* eslint-disable */

import * as React from 'react';
import {View, Text} from 'react-native';
import Btn from '../Btn';
import {getAuth, signOut} from 'firebase/auth';
import {darkGreen} from '../Constant';
const auth = getAuth();

export default function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Btn
        textColor="white"
        extraStyle={{
          width: 320,
        }}
        bgColor={darkGreen}
        btnLabel="Logout"
        // Press={() => alert('Logged In')}
        // Press={() => props.navigation.navigate('MainContainer')}
        Press={() => signOut(auth)}
      />
    </View>
  );
}
