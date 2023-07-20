import createApiUrl from './utils/createApiUrl.js';
import showWeather from './utils/showWeather.js'

const APPI_key = '5d066958a60d315387d9492393935c19';

function showWeatherCurrentPosition(pos) {
    const apiUrl = createApiUrl({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        appid: APPI_key,
    });
    showWeather(apiUrl);
};

function showWeatherChosenCity(city) {
    const apiUrl = createApiUrl({
        q: city,
        appid: APPI_key,
    });
    showWeather(apiUrl);
};

function chooseCity() {
    showWeatherChosenCity(prompt('Enter a city'));
};

function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showWeatherCurrentPosition, chooseCity);
};

window.onload = getCurrentPosition;

export default showWeatherChosenCity;
