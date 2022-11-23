import React, {useState, useEffect} from 'react';
import {FlatList, ImageBackground, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {
  BellSelector,
  LoadingIndicator,
  CircularProgressBar,
} from '../../components/index.js';

import {convertIntoPercentage, kFormatter} from '../../utility/utilities.js';

import {fetchData} from '../../network/services.js';

import styles from './map-styles.js';

import {MapImage, Union} from '../../assets/image/index.js';

function Map() {
  const [apiData, setApiData] = useState([]);
  const countryName = useSelector(state => {
    return state.cart;
  });
  useEffect(() => {
    fetchData().then(response => {
      setApiData(response?.data?.slice(0, 3));
    });
  }, []);

  const countryDataRender = data => (
    <ImageBackground
      source={Union}
      resizeMode="contain"
      style={styles.watchIcon}>
      <View style={styles.affectedRecoveredContainer}>
        <View style={styles.innerDetailsContainer}>
          <CircularProgressBar data={data} />
          <View style={styles.affectedRecoveredDetails}>
            <Text style={styles.countryText}>{data.item.country}</Text>
            <Text style={styles.textStyle}>
              Affected - {kFormatter(data.item.affected)}
            </Text>
            <Text style={styles.textStyle}>
              Recovered - {kFormatter(data.item.recovered)}
            </Text>
          </View>
        </View>
        <View>
          <BellSelector
            percentage={convertIntoPercentage(
              data.item.affected,
              data.item.recovered,
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );

  return apiData.length > 0 ? (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.outerContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>COVID - 19 Affected Areas</Text>
          <View style={styles.affectedContainer}>
            <View style={styles.mostAffectedContainer} />
            <Text style={styles.mostAffectedText}>Most Affected</Text>
            <View style={styles.lessAffectedContainer} />
            <Text style={styles.lessAffectedText}>Less Affected</Text>
            <Text>{countryName}</Text>
          </View>
          <MapImage height={375} width={370} />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.countryText}>Top 3 Countries</Text>
          <FlatList
            data={apiData}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={data => countryDataRender(data)}
          />
        </View>
      </View>
    </ScrollView>
  ) : (
    <LoadingIndicator />
  );
}

export default Map;
