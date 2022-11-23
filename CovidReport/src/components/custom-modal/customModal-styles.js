import {Platform, StyleSheet} from 'react-native';
import {GREY, LIGHTGREY, RED, WHITE} from '../../theme/color';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryFlag: {
    height: 260,
    width: 345,
  },
  modal: {
    flex: 1,
  },
  flagContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: LIGHTGREY,
    borderWidth: 2,
  },
  countryDetails: {
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: LIGHTGREY,
    width: Platform.OS === 'ios' ? 345 : 350,
    height: Platform.OS === 'ios' ? 400 : 370,
    marginTop: 20,
    borderRadius: 20,
  },
  modalView: {
    backgroundColor: WHITE,
    borderRadius: 20,
    padding: 35,
    height: Platform.OS === 'ios' ? '91%' : '95%',
    width: '95%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 5,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginBottom: 5,
  },
  textStyle: {
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  footer: {
    marginTop: 10,
    color: GREY,
    fontSize: 20,
    fontWeight: 'bold',
  },
  affectedText: {
    color: RED,
    borderColor: GREY,
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  recoveredText: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: GREY,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  recoveredPercentText: {
    color: 'blue',
    borderColor: GREY,
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  countryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
