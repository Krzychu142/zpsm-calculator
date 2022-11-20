import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../styles/GlobalColors';

export default function Button(props) {
  const styles = StyleSheet.create({
    btn: {
      height: '15%',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      backgroundColor: props.color,
      borderWidth: 1,
    },
  });
  const sing = props.sing;

  return (
    <TouchableOpacity
      onPress={sing === '=' ? props.equal : () => props.onPress(sing)}
      style={[styles.btn, {width: parseInt(props.size) === 1 ? '50%' : '25%'}]}>
      <Text style={{fontSize: 40}}>{props.sing}</Text>
    </TouchableOpacity>
  );
}
