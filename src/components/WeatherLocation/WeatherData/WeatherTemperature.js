import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropType from 'prop-types';
import {
    SUN,
    CLOUD,
    CLOUDY,
    RAIN,
    SNOW,
    WINDY
} from './../../../constants/weatherIcons';
import "./styles.css";

const icons = {
    
    [SUN]:  'day-sunny',
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy'

}

const getWeatherIcon = (weatherState) => {
    let icon = icons[weatherState];
    let iconSize = "4x"

    if (icon) {
        return <WeatherIcons className="wicon" name={ icon } size={ iconSize } />
    }else{
        return <WeatherIcons className="wicon" name={ icons[weatherState] } size={ iconSize } />
    }
    
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTempuratureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{ ` ${temperature}` }</span>
        <span className="temperatureType">{ `C°` }</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature : PropType.number.isRequired,
    weatherState : PropType.string.isRequired
};

export default WeatherTemperature;