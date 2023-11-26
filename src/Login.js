/* eslint-disable */

import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Image} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constant';
import Field from './Field';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth();

const Login = props => {
  const [loader, setloader] = React.useState(false);
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: '',
  });
  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Emasil and password are mandatory.',
      });
      return;
    }

    try {
      setloader(true);
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: "Email does'nt exists or email/password is wrong",
        // error: error.message,
      });
      setloader(false);
    } finally {
      setloader(false);
    }
  }
  return (
    // <View style={{backgroundColor: 'red'}}>

    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <Image
        source={require('./assets/bg.jpg')}
        style={{height: '100%', position: 'absolute', width: '100%'}}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 64,
          fontWeight: 'bold',
          marginVertical: 20,
        }}>
        {/* Login */}
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          height: 700,
          width: 460,
          borderTopLeftRadius: 130,
          paddingTop: 30,
          display: 'flex',
          alignItems: 'center',
          // paddingLeft: 50,
        }}>
        <Image
          source={require('./assets/logo.png')}
          style={{height: 150, width: 300}}
        />
        {/* <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
          Welcome Back
        </Text> */}
        <Text
          style={{
            color: 'grey',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Login to your account
        </Text>
        <Field
          placeholder="Email / Username"
          keyboardType={'email-address'}
          onChangeText={text => setValue({...value, error: '', email: text})}
        />
        <Field
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setValue({...value, error: '', password: text})}
        />
        <View
          style={{
            alignItems: 'flex-end',
            width: '78%',
            paddingRight: 16,
            marginBottom: 50,
          }}>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
            Forgot Password ?
          </Text>
        </View>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>
          {value?.error}
        </Text>
        <Btn
          textColor="white"
          extraStyle={{
            width: 320,
          }}
          bgColor={darkGreen}
          btnLabel="Login"
          // Press={() => alert('Logged In')}
          // Press={() => props.navigation.navigate('MainContainer')}
          Press={signIn}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            // justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Don't have an account ?{' '}
          </Text>

          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </View>
  );
};

export default Login;
