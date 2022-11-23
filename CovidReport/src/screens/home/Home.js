import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View, TextInput} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {LoadingIndicator, CountriesData} from '../../components/';

import {fetchData} from '../../network/services.js';

import {BLACK} from '../../theme/color';

import styles from './home-styles.js';

function Home() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchData().then(response => {
        setApiData(response);
      });
    }
  }, [isFocused]);

  const covidData = isFocused ? apiData : <LoadingIndicator />;

  const renderingCountryData = () => {
    const finalResult = () => {
      if (searchTerm === '') {
        return apiData.data;
      } else {
        return apiData.data.filter(countryData =>
          countryData.country.includes(searchTerm),
        );
      }
    };

    return covidData?.data?.length ? (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.searchBarContainer}>
              <Text style={styles.liveReportText}>Live Reports</Text>
              <TextInput
                style={styles.searchBar}
                placeHolderAlign="center"
                placeholderTextColor={BLACK}
                placeholder="Search"
                onChangeText={countryName => setSearchTerm(countryName)}
              />
            </View>
            <Text style={styles.topCountryText}>Top 45 Countries</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              data={finalResult()}
              renderItem={data => (
                <CountriesData
                  country={data.item.country}
                  recovered={data.item.recovered}
                  affected={data.item.affected}
                  countryFlag={data.item.countryFlag}
                />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    ) : (
      <LoadingIndicator />
    );
  };

  return renderingCountryData();
}

export default Home;
