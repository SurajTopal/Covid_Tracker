import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import GetLocation from 'react-native-get-location';

import {CustomModal} from '../index.js';

import styles from './customDrawer-styles.js';

import {Avatar} from '../../assets/icons/';

function CustomDrawer(props) {
  const clickHandler = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        Alert.alert(
          `Current Location:
          ${JSON.stringify(location.latitude)}
          ${JSON.stringify(location.longitude)}`,
        );
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.topDrawerContainer}>
        <Avatar />
        <Text style={styles.nameText}>Rachel Brown</Text>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            onPress={clickHandler}
            style={styles.locationContainer}>
            <Text style={styles.locationText}>Location</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
