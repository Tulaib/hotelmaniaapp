/* eslint-disable */

import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen, green} from './Constant';

const Home = props => {
  return (
    // <Background>
    <View
      style={{
        // marginHorizontal: 40,
        // marginVertical: 0,

        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Image
        source={require('./assets/bg.jpg')}
        style={{height: '100%', position: 'absolute', width: '100%'}}
      />
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70%',
          backgroundColor: 'rgba(0,0,0,0.3)',
          margin: 20,
          paddingHorizontal: 20,
        }}>
        <Text style={{color: 'white', fontSize: 64}}>Let's</Text>
        <Text style={{color: 'white', fontSize: 64, marginBottom: 40}}>
          Explore
        </Text>

        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </View>
    // </Background>
  );
};

const styles = StyleSheet.create({});

export default Home;
