import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';
import './styles.css';



const LocationList = ({cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = (city) => {
        console.log("handleWeatherLocationClick", city );
        onSelectedLocation(city)
    }

    const strToComponents = cities => (
        cities.map( city =>( 
            <WeatherLocation 
                key={ city } 
                city={ city } 
                onWeatherLocationClick={ () => handleWeatherLocationClick(city) }
                /> 
                ))
    )

    return(
        <div className="locationListCont">
            { strToComponents( cities ) }  
        </div>
    );
}

LocationList.propType = {
    cities : PropTypes.object.isRequired,
    onSelectedLocation : PropTypes.func,
}

export default LocationList;