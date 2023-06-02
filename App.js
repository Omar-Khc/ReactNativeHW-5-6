import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  View,
  StatusBar,
} from 'react-native';

import styles from './src/Style/mainScreen/styles'

import {getWeatherInformation} from './src/utils/api';
import getImageForWeather from './src/utils/getImageForWeather';

import SearchInput from './src/components/SearchInput';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState('');
  const [weatherCode, setWeatherCode] = useState('');

  useEffect(() => {
    handleUpdateLocation('Gaza strip');
  }, []);

  const handleUpdateLocation = async city => {
    if (!city) return;

    setLoading(true);
    setError(false);

    try {
      const {location, weather,weatherCode, temperature} = await getWeatherInformation(city);

      setLocation(location);
      setWeather(weather);
      setWeatherCode(weatherCode);
      setTemperature(temperature);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <View style={styles.container} behavior="padding">
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={getImageForWeather(weatherCode)}
        style={styles.imageContainer}
        imageStyle={styles.image}>

        <View style={styles.detailsContainer}>
          <ActivityIndicator animating={loading} color="white" size="large" />

          {!loading && (
            <View>
              {error && (
                <Text style={[styles.smallText, styles.textStyle]}>
                  Could not load weather, please try a different city.
                </Text>
              )}

              {!error && (
                <View>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {location}
                  </Text>
                  <Text style={[styles.smallText, styles.textStyle]}>
                    {weather}
                  </Text>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {`${Math.round(temperature)}°`}
                  </Text>
                </View>
              )}

              <SearchInput
                placeholder="Search any city"
                onSubmit={handleUpdateLocation}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}
