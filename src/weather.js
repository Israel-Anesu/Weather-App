import { showWeather, showSearchError } from './display';

async function getWeatherInfo(cityName) {
    const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&&units=metric&appid=a41036db70430c9e27ed10e198f89e50`;
    try {
        const response = await fetch(endPoint, { mode: 'cors' });
        const weatherData = await response.json();
        showWeather(
            weatherData.name,
            weatherData.main.temp,
            weatherData.main.feels_like,
            weatherData.main.humidity,
            weatherData.wind.speed
        );
        console.log(weatherData);
    } catch (error) {
        if (error) {
            showSearchError(cityName);
        }
        console.error(error);
    }
}
export default getWeatherInfo;