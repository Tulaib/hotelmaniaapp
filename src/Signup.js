/* eslint-disable */

import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Image} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constant';
import Field from './Field';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import App, {db, firebaseConst} from './config/firebase';
import {doc} from 'firebase/firestore';
import {firestore} from 'react-native-firebase';
const auth = getAuth();

const Signup = props => {
  const [loader, setloader] = React.useState(false);
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: '',
    firstName: '',
    lastName: '',
  });
  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.',
      });
      return;
    }

    try {
      setloader(true);
      await createUserWithEmailAndPassword(auth, value.email, value.password)
        .then(async () => {
          // alert('hello');
          firebaseConst
            ?.firestore()
            ?.collection('users')
            ?.doc(auth?.currentUser?.uid)
            ?.set({
              firstName: value?.firstName,
              lastName: value?.lastName,
              email: value?.email,
            });
        })
        .catch(ere => console.log('store err', ere));
      setloader(false);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
        // error: "Email does'nt exists or email/password is wrong",
      });
      setloader(false);
    } finally {
      setloader(false);
    }
  }
  return (
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
          marginTop: 20,
        }}>
        Register
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 19,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Create a new account
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          height: 700,
          width: 460,
          borderTopLeftRadius: 130,
          paddingTop: 50,
          alignItems: 'center',
        }}>
        <Field
          placeholder="First Name"
          onChangeText={text =>
            setValue({...value, error: '', firstName: text})
          }
        />
        <Field
          placeholder="Last Name"
          onChangeText={text => setValue({...value, error: '', lastName: text})}
        />
        <Field
          type="email"
          placeholder="Email"
          keyboardType={'email-address'}
          onChangeText={text => setValue({...value, error: '', email: text})}
        />
        {/* <Field placeholder="Contact Number" keyboardType={'number'} /> */}
        <Field
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setValue({...value, error: '', password: text})}
        />
        {/* <Field placeholder="Confirm Password" secureTextEntry={true} /> */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '78%',
            paddingRight: 16,
          }}>
          <Text style={{color: 'grey', fontSize: 16}}>
            By signing in, you agree to our{' '}
          </Text>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
            Terms & Conditions
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '78%',
            paddingRight: 16,
            marginBottom: 10,
          }}>
          <Text style={{color: 'grey', fontSize: 16}}>and </Text>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
            Privacy Policy
          </Text>
        </View>

        <Text style={{color: 'red', fontSize: 16}}>{value?.error} </Text>
        {loader ? (
          <Text style={{color: darkGreen, fontSize: 16}}>Loading... </Text>
        ) : (
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Sign up"
            Press={() => {
              signUp();
              // alert('Accoutn created');
              // props.navigation.navigate('MainContainer');
            }}
          />
        )}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Already have an account ?{' '}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
