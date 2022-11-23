import {StyleSheet} from 'react-native';

import {LIGHTRED} from '../../theme/color.js';

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: '45%',
    alignItems: 'center',
  },
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  covidText: {
    marginTop: 10,
    fontSize: 25,
    color: LIGHTRED,
    fontWeight: 'bold',
  },
  copyRightText: {
    marginBottom: 20,
    fontSize: 15,
  },
});

export default styles;
