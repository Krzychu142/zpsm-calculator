import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Screen(props) {
  return (
    <View style={[styles.screen, props.color, {width: '100%'}]}>
      <Text style={{fontSize: 50}}>{props.sing}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '15%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    backgroundColor: '#C9C9C9',
  },
});
