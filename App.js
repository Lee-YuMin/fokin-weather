import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '143f7c508dbeec4fcbac950e009cc9b0';

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const { 
      data: {
        main: { temp },
        weather
      } 
    } = await axios.get (`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)

    this.setState({isLoading: false, temp, condition: weather[0].main});
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords } = await Location.getCurrentPositionAsync();
      this.getWeather(coords.latitude, coords.longitude);
    } catch (error) {
      console.log(error);
      Alert.alert("Can't find you.", 'So sad');
    }
  };
  
  componentDidMount() {
    this.getLocation();
  }
  render () {
    const { isLoading, temp, condition } = this.state
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
