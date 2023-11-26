/* eslint-disable */

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn(props) {
  const {bgColor, btnLabel, textColor, Press, extraStyle} = props;
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 350,
        paddingVertical: 8,
        marginVertical: 10,
        ...extraStyle,
      }}>
      <Text style={{color: textColor, fontSize: 22, fontWeight: 'normal'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
