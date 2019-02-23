const location = "Bogota,co";
const api_key = "1b37d196f82179576b6485773da9d1d9";
const url_base_weather ="http://api.openweathermap.org/data/2.5/weather";

//const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;