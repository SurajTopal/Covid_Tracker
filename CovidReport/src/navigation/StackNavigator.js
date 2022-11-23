import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Splash, OnBoarding} from '../screens/index.js';

import AppStack from './AppStack.js';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [isSpashActive, setIsSpashActive] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let screen;
  const handleSplash = () =>
    isSpashActive && <Stack.Screen name="Splash" component={Splash} />;

  useEffect(() => {
    setTimeout(() => {
      setIsSpashActive(false);
    }, 4000);
  });

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    screen = null;
  } else if (isFirstLaunch === true) {
    screen = (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {handleSplash()}
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen
          name="Covid19"
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  } else {
    screen = (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {handleSplash()}
        <Stack.Screen
          name="Home"
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
  return screen;
};

export default StackNavigator;
