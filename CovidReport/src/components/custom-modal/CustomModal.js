import React from 'react';
import {Alert, Modal, Text, Pressable, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useSelector} from 'react-redux';

import {CustomPie} from '../index.js';

import {recoveryPercentage} from '../../utility/utilities';

import {styles} from './customModal-styles';

const CustomModal = props => {
  const {
    modalVisible,
    setModalVisible,
    country,
    affected,
    recovered,
    countryFlag,
  } = props;

  // const count = useSelector(state => {
  //   return state.cart;
  // });

  return (
    <Modal
      style={styles.modal}
      presentationStyle="overFullScreen"
      animationType="fade"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.textStyle}>HIDE</Text>
          </Pressable>
          <View style={styles.flagContainer}>
            <SvgUri uri={countryFlag} style={styles.countryFlag} />
          </View>
          <View style={styles.countryDetails}>
            <Text style={styles.countryText}>{country}</Text>
            <Text style={styles.affectedText}>Affected Cases : {affected}</Text>
            <Text style={styles.recoveredText}>
              Recovered Cases : {recovered}
            </Text>
            <Text style={styles.recoveredPercentText}>
              Recovery Percentage : {recoveryPercentage(recovered, affected)}
            </Text>
            <CustomPie affected={affected} recovered={recovered} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default CustomModal;
