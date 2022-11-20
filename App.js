/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
import SplashScreen from 'react-native-splash-screen';

import Button from './components/Button';
import Screen from './components/Screen';
import {colors} from './styles/GlobalColors';

import buttonsData from './data/dataPortrain';

import {nanoid} from 'nanoid';

const App: () => Node = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [expression, setExpression] = React.useState('');
  const [screen, setScreen] = React.useState('');
  const [isResult, setResult] = React.useState(false);

  function buttonClick(s) {
    if (isResult) {
      setResult(false);
      ac();
    }
    if (isNaN(s)) {
      setScreen(s);
    } else {
      setScreen(prevScreen => {
        return prevScreen + s;
      });
    }
    setExpression(prevExpression => {
      return prevExpression + s;
    });

    if (s === 'AC') {
      ac();
    }
  }

  function equal() {
    setResult(true);
    setScreen(eval(expression));
  }

  function ac() {
    setExpression(' ');
    setScreen(' ');
  }

  console.log(expression);
  const buttons = buttonsData.map((x, i) => {
    return (
      <Button
        sing={x.sing}
        color={x.color}
        size={x.size}
        key={i}
        id={nanoid}
        onPress={buttonClick}
        equal={equal}
      />
    );
  });
  return (
    <View style={styles.container}>
      {buttons}
      <Screen sing={screen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap-reverse',
    backgroundColor: colors.darkGray,
  },
});

export default App;
