import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="WeatherExtraInfoCont"> 
        <span>{ `Humidity ${ humidity } % - ` }</span>
        <span>{ `Wind ${wind}` }</span>
    </div>
);

WeatherExtraInfo.prototype = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired
}

export default WeatherExtraInfo;