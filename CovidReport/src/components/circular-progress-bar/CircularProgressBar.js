import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

import {convertIntoPercentage, setStrokeColor} from '../../utility/utilities';

import {BLACK, LIGHTGREY} from '../../theme/color';

export default function CircularProgressBar(props) {
  const {affected, recovered, id} = props.data.item;

  return (
    <CircularProgress
      value={convertIntoPercentage(affected, recovered)}
      valueSuffix={'%'}
      titleFontSize={15}
      titleColor={BLACK}
      radius={40}
      activeStrokeWidth={7}
      inActiveStrokeWidth={7}
      inActiveStrokeColor={LIGHTGREY}
      activeStrokeColor={setStrokeColor(id)}
      progressValueColor={BLACK}
      duration={3000}
    />
  );
}
