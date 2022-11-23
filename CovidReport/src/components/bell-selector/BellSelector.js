import React, {useState} from 'react';

import {LIGHTGREEN, LIGHTRED} from '../../theme/color.js';

import {RedBell, GreenBell} from '../../assets/icons/index.js';

export default function BellSelector(props) {
  const [isGreenBellPress, setIsGreenBellPress] = useState(false);
  const [isRedBellPress, setIsRedBellPress] = useState(false);
  const {percentage} = props;

  const selectBell = () =>
    percentage < 10 ? (
      <GreenBell
        height={30}
        weight={20}
        fill={isGreenBellPress ? LIGHTGREEN : null}
        onPress={() => setIsGreenBellPress(!isGreenBellPress)}
      />
    ) : (
      <RedBell
        height={30}
        weight={20}
        fill={isRedBellPress ? LIGHTRED : null}
        onPress={() => setIsRedBellPress(!isRedBellPress)}
      />
    );

  return selectBell();
}
