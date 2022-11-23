import {StyleSheet, Platform} from 'react-native';
import {DARKGREEN, RED} from '../../theme/color';

const styles = StyleSheet.create({
  pieContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 200 : 150,
    width: 345,
  },
  pendingCaseText: {
    color: RED,
    fontWeight: 'bold',
  },
  recoveredCaseText: {
    color: DARKGREEN,
    fontWeight: 'bold',
  },
});

export default styles;
