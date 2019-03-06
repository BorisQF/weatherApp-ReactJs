import React, { Component } from "react";
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

const api_key = "1b37d196f82179576b6485773da9d1d9";
const url_base_weather ="http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forecastData: null
        }
    }
    
    componentDidMount() {
        this.updateCity();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.city !== this.props.city){
            console.log("prop de ciudad previa",prevProps.city)
            console.log("prop de ciudad actual actualizada en el render",this.props.city)
            this.setState({forecastData:null})
            this.updateCity();//this.props.ciudad es la que vienen al hacer click y se actualiza cuando entra al render
        }
    }
    
    updateCity = () => {

        const url_forecast = `${url_base_weather}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
                data => (data.json())
            ).then(
                weatherDataForecast => {
                    const forecastData = transformForecast(weatherDataForecast);
                    this.setState({
                        forecastData
                    });
                    console.log('Hola forescastExtended', forecastData )
                }
            ).catch(
                e => console.log(e)
            );
    }

    renderForecastItemDay = ( dataForecast ) => {
        return dataForecast.map( ({weekDay, hour, data}) => (
                <ForecastItem key={ `${weekDay}${hour}` } 
                    weekDay={ weekDay } 
                    hour={ hour } 
                    data={ data }>
                </ForecastItem>));
    }

    loadingForecast = () => {
        return <h1>cargando datos...</h1>
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return ( 
            <div> 
                <h2 className="forecast-title"> hola { city } </h2> 
                { forecastData ?
                    this.renderForecastItemDay(forecastData) :
                    this.loadingForecast()  
                }
            </div> 
            
        );
    }
} 

ForecastExtended.propType = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;