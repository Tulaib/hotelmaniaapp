/* eslint-disable */

import axios from 'axios';
import * as React from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import {Card, Button, Icon} from '@rneui/themed';
import {getAuth} from 'firebase/auth';
const auth = getAuth();

export default function HomeScreen({navigation}) {
  const [options, setoptions] = React.useState({
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates',
    params: {
      latitude: '19.24232736426361',
      longitude: '72.85841985686734',
      arrival_date: '2023-11-29',
      departure_date: '2023-12-31',
      adults: '1',
      children_age: '0,17',
      room_qty: '1',
      languagecode: 'en-us',
      currency_code: 'EUR',
    },
    headers: {
      'X-RapidAPI-Key': '21af54ac97msheabac942b3c0f64p175680jsn9bacf3a8ba89',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
    },
  });
  const [Hotels, setHotels] = React.useState([]);
  const fetchHotels = async () => {
    const response = await axios.request(options).then(res => {
      console.log('res22', res?.data?.data);
      setHotels(res?.data?.data?.result);
    });
  };
  React.useEffect(() => {
    // fetchHotels();
  }, []);
  console.log('auth', auth);
  return (
    <ScrollView>
      {/* <View style={{borderWidth: 2, borderColor: 'red', height: 200}}> */}
      {[1, 2, 3, 4]?.map((item, index) => {
        <View style={{height: 300, width: '100%'}}>
          <Text>HELLO WORLD</Text>
          {/* <Card.Divider /> */}
          {/* <Image
            style={{padding: 0}}
            source={{
              uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          /> */}
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon name="code" color="#ffffff" iconStyle={{marginRight: 10}} />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </View>;
      })}
      {/* </View> */}
    </ScrollView>
  );
}
