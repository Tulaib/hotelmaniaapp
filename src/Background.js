/* eslint-disable */
import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      {/* <ImageBackground
        source={require('./assets/bg.jpg')}
        style={{height: '100%', zIndex: 0}}
      /> */}
      <View style={{zIndex: 2}}>{children}</View>
    </View>
  );
};

export default Background;
