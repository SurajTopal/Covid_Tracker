import {StyleSheet} from 'react-native';

import {GREY, LIGHTGREY, WHITE} from '../../theme/color';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: WHITE,
    flex: 1,
    paddingBottom: 50,
  },
  affectedText: {
    fontWeight: 'bold',
  },
  countryText: {marginLeft: 10},
  countryDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  affectedDetails: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liveReportText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  topCountryText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15,
    color: GREY,
  },
  innerContainer: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: LIGHTGREY,
  },
  countryFlag: {
    height: 50,
    width: 67,
  },
  flagImageContainer: {
    borderRadius: 6,
    overflow: 'hidden',
  },
  outerContainer: {flex: 1, padding: 15, backgroundColor: WHITE},
  flatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: LIGHTGREY,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
