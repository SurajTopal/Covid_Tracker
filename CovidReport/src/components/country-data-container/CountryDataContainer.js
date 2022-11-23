import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {add} from '../../store/cardSlice';

import {CustomModal, UpDown} from '../index';

import {numberWithComma} from '../../utility/utilities';

import styles from './countryDataContainer-styles';
import {useDispatch} from 'react-redux';

export default function CountryDataContainer(props) {
  const {country, countryFlag, affected, recovered} = props;
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    dispatch(add(country));
    return setModalVisible(true);
  };
  return (
    <TouchableOpacity onPress={openModal}>
      {modalVisible ? (
        <CustomModal
          isModalVisible={modalVisible}
          setModalVisible={setModalVisible}
          {...props}
        />
      ) : null}
      <View style={styles.flatContainer}>
        <View style={styles.countryDetails}>
          <View style={styles.flagImageContainer}>
            <SvgUri uri={countryFlag} style={styles.countryFlag} />
          </View>
          <Text style={styles.countryText}>{country}</Text>
        </View>
        <View style={styles.affectedDetails}>
          <Text style={styles.affectedText}>{numberWithComma(affected)}</Text>
          <UpDown recovered={recovered} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
