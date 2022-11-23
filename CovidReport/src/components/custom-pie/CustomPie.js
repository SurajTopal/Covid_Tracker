import React from 'react';
import Pie from 'react-native-pie';
import {View, Text} from 'react-native';

import {DARKGREEN, RED} from '../../theme/color';

import styles from './customPie-styles';

export default function CustomPie(props) {
  const {affected, recovered} = props;

  const percentCal = () => (recovered / affected) * 100;
  return (
    <View style={styles.pieContainer}>
      <View>
        <Text style={styles.pendingCaseText}>Red -> Not Recovered</Text>
        <Text style={styles.recoveredCaseText}>Green -> Recovered</Text>
      </View>
      <Pie
        radius={60}
        innerRadius={50}
        sections={[
          {
            percentage: 100 - percentCal(),
            color: RED,
          },
          {
            percentage: percentCal(),
            color: DARKGREEN,
          },
        ]}
        dividerSize={2}
        strokeCap={'round'}
      />

    </View>
  );
}
