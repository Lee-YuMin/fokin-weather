import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios";

const API_KEY = '143f7c508dbeec4fcbac950e009cc9b0';

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get (
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )

    console.log(data);
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords } = await Location.getCurrentPositionAsync();
      this.getWeather(coords.latitude, coords.longitude);
      this.setState({isLoading: false});
    } catch (error) {
      console.log(error);
      Alert.alert("Can't find you.", 'So sad');
    }
  };
  
  componentDidMount() {
    this.getLocation();
  }
  render () {
    const { isLoading } = this.state
    return isLoading ? <Loading /> : null;
  }
}
