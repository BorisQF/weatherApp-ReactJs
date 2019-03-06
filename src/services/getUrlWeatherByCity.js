import { url_base_weather, api_key} from './../constants/api_url';

const getUrlWeatherByCity = (city) => {
    //const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
     return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;