import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#8E0E00', '#1F1C18'],
        title: 'Thunderstorm',
        subtitle: 'Wrrrrrrr Cwang Cwang!!'
    }, 
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#C02425', '#F0CB35'],
        title: 'Drizzle',
        subtitle: 'Drizzle~~!!!'
    }, 
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#2c3e50', '#3498db'],
        title: 'It\'s Raining',
        subtitle: 'It\' so good mood!!'
    }, 
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#00C9FF', '#92FE9D'],
        title: 'Snow',
        subtitle: '펑펑~ 눈이옵니다~ 하늘에서 눈이옵니다~'
    }, 
    Atmosphere: {
        iconName: 'weather-lightning',
        gradient: ['#8E0E00', '#1F1C18'],
        title: 'Atmosphere',
        subtitle: 'Just soso'
    }, 
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#ee9ca7', '#ffdde1'],
        title: 'Clear',
        subtitle: 'Oh Oh! what the clear!'
    }, 
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#304352', '#d7d2cc']
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#304352', '#d7d2cc']
    },
    Smoke: {
        iconName: 'weather-fog',
        gradient: ['#304352', '#d7d2cc']
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#C02425', '#F0CB35']
    },
    Dust: {
        iconName: 'weather-sunny-alert',
        gradient: ['#BA8B02', '#181818']
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#304352', '#d7d2cc']
    },
    Sand: {
        iconName: 'weather-tornado',
        gradient: ['#BA8B02', '#181818']
    },
    Ash: {
        iconName: 'weather-sunny-alert',
        gradient: ['#BA8B02', '#181818']
    },
    Squall: {
        iconName: 'weather-windy',
        gradient: ['#525252', '#525252']
    },
    Tornado: {
        iconName: 'weather-hurricane',
        gradient: ['#525252', '#525252']
    }
};

export default function Weather( {temp, condition} ) {
    // console.log(temp);
    return (
        <LinearGradient colors={weatherOptions[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm', 
        'Drizzle', 
        'Rain', 
        'Snow', 
        'Atmosphere', 
        'Clear', 
        'Clouds',
        'Mist',
        'Smoke',
        'Haze',
        'Dust',
        'Fog',
        'Sand',
        'Dust',
        'Ash',
        'Squall',
        'Tornado'
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
})