import {StyleSheet} from 'react-native';

import {GREY, WHITE, LIGHTGREY, PINK, RED} from '../../theme/color';

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    bottom: 3,
  },
  topContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: LIGHTGREY,
    padding: 10,
    width: '100%',
  },
  watchIcon: {
    height: 120,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 10,
  },
  affectedContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  textStyle: {color: GREY},
  mostAffectedContainer: {
    height: 12,
    width: 12,
    backgroundColor: RED,
  },
  mostAffectedText: {
    color: GREY,
    lineHeight: 40,
  },
  lessAffectedText: {
    color: GREY,
    lineHeight: 40,
  },
  lessAffectedContainer: {
    height: 12,
    width: 12,
    backgroundColor: PINK,
  },
  bottomContainer: {
    borderWidth: 1,
    borderColor: LIGHTGREY,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
  },
  affectedRecoveredDetails: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  affectedRecoveredContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countryText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
