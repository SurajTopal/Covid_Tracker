import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';

import {Virus} from '../../assets/image/index.js';

import styles from './splash-styles.js';

export default function Splash() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Virus />
        <Text style={styles.covidText}>COVSTATS</Text>
      </View>
      <Text style={styles.copyRightText}>
        © Copyright COVSTATS 2020. All rights reserved
      </Text>
    </SafeAreaView>
  );
}
