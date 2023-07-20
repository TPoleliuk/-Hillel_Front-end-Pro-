import createApiUrl from './js/utils/createApiUrl.js';
import showWeather from './js/utils/showWeather.js';

const APPI_key = '5d066958a60d315387d9492393935c19';

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

function showWeatherCurrentPosition(pos) {
    const apiUrl = createApiUrl({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        appid: APPI_key,
    });
    showWeather(apiUrl);
};

function getCurrentPosition() {
    setTimeout(() => {
        navigator.geolocation.getCurrentPosition(showWeatherCurrentPosition, chooseCity);
    }, 1800)
};

window.onload = getCurrentPosition;

export default showWeatherChosenCity;