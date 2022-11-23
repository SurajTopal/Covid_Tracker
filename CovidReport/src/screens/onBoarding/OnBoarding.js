import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from 'react-native-onboarding-swiper';

import {Text, View, TouchableOpacity} from 'react-native';

import {ON_BOARDING_DATA} from './constant.js';
import {LIGHTRED, GREY, WHITE} from '../../theme/color.js';

import styles from './onBoarding-styles.js';

export default function OnBoarding({navigation}) {
  const Dots = props => {
    const {selected} = props;
    const backgroundColor = selected ? LIGHTRED : GREY;
    return <View style={[styles.dots, {backgroundColor}]} />;
  };

  const Finish = ({...props}) => {
    AsyncStorage.setItem('alreadyLaunched', 'true');

    return (
      <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    );
  };

  const navigateHome = () => navigation.navigate('Covid19');
  const onBoardingRendering = () => (
    <Onboarding
      DoneButtonComponent={Finish}
      DotComponent={Dots}
      bottomBarColor={WHITE}
      onSkip={navigateHome}
      onDone={navigateHome}
      pages={ON_BOARDING_DATA}
    />
  );
  return onBoardingRendering();
}
