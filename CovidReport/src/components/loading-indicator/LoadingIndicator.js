import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './loadingIndicator-styles';

import {PINK} from '../../theme/color';

export default function LoadingIndicator() {
  return (
    <View style={styles.activityIndicatorContainer}>
      <ActivityIndicator size="large" color={PINK} />
    </View>
  );
}
