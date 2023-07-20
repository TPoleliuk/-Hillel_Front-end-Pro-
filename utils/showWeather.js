import fetchData from './fetchData.js';
import createWeatherInfo from './createWeatherInfo.js';
import showWeatherChosenCity from '../script.js';

async function getWeatherData(url) {
    const weatherData = await fetchData(url);
    const {
        main: { temp, pressure, humidity },
        name: city,
        weather: [ { description, icon } ],
        wind: { speed, deg }
    } = weatherData;

    return {temp, pressure, humidity, city, description, icon, speed, deg};
};

function showWeatherInfo(parameters) {
    const app = document.querySelector('.app');
    const oldContent = app.firstElementChild;
    const actualWeatherInfo = createWeatherInfo(parameters);

    app.replaceChild(actualWeatherInfo, oldContent);
};

function onClickHandler() {
    const inputChangeCity = document.querySelector('.enter-city input');
    const newCity = inputChangeCity.value;

    showWeatherChosenCity(newCity);
}

function showWeather(url) {
    getWeatherData(url)
        .then(
            (parameters) => {
                showWeatherInfo(parameters);

                const buttonChangeCity = document.querySelector('button');
                buttonChangeCity.addEventListener('click', onClickHandler);
            },
            () => alert('Something wrong. Try again.')
        );
};

export default showWeather;