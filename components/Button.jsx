import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
  let width = '0';

  if (parseInt(props.size) === 1) {
    width = '50%';
  } else if (parseInt(props.size) === 3) {
    width = '20%';
  } else {
    width = '25%';
  }

  return (
    <TouchableOpacity
      onPress={sing === '=' ? props.equal : () => props.onPress(sing)}
      style={[styles.btn, {width: `${width}`}]}>
      <Text style={{fontSize: 40}}>{props.sing}</Text>
    </TouchableOpacity>
  );
}
