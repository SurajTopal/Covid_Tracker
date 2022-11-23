import {StyleSheet} from 'react-native';
import {LIGHTRED, BLACK, WHITE} from '../../theme/color.js';

const styles = StyleSheet.create({
  drawerMainContainer: {
    flex: 1,
  },
  nameText: {
    color: BLACK,
    fontSize: 20,
    marginVertical: 10,
  },
  locationText: {
    fontSize: 15,
  },
  topDrawerContainer: {
    backgroundColor: LIGHTRED,
    height: 160,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  indiaText: {
    fontSize: 15,
    color: WHITE,
  },
  indiaStatsButton: {
    borderWidth: 2,
    marginLeft: 5,
    padding: 5,
    borderRadius: 5,
  },
  locationContainer: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
  },
});

export default styles;
