import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import "./styles.css";
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';

class WeatherLocation extends Component {

    constructor(){
        super();
        
        this.state = {
            city: 'Bogota!',
            data: null
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {
        

        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(data);
            this.setState({
                data: newWeather
            })
        });


    }
    
    render(){

        console.log("render");
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont"> 
                <Location city={ city }></Location>
                { data != null ? 
                <WeatherData data={ data }></WeatherData> : "Loading..." 
                }
            </div>  
        );
    }
}

export default WeatherLocation;

