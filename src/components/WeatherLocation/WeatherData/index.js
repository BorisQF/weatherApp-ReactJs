import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    WINDY
} from './../../../constants/weatherIcons';
import "./styles.css";

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature={ 32 }
            weatherState={WINDY}
        />
        <WeatherExtraInfo humidity={ 80 } wind={ '10 m/s' } />
    </div>
);

export default WeatherData;