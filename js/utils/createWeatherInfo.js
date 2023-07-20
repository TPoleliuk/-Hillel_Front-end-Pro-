import newDiv from '../domHelper/creatingElement.js';
import weatherIndicators from './weatherIndicators.js';

function createFormChooseCity() {
    return `
        <form class="choose-city">
            <label class="enter-city">
                <input type="text" placeholder="Enter a city">
            </label>
            <div class="button-wrap">
                <button type="button">Search</button>
            </div>
        </form>`;
};

function createMainInfo(city, icon, description) {
    return `
        <div class="main-info">
            <div class="city-wrap">
                <img src="./images/navigation-icon.svg" alt="navigation" class="navigation-icon">
                <span>${city}</span>
            </div>  
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather">
            <span class="description">${description}</span>
        </div>`;
};

function createAdditionalInfo(indicators) {
    const indicatorsKeys = Object.keys(indicators);

    return indicatorsKeys.reduce((total, key) => {
                const indicator = weatherIndicators[key];
                return total + `
                <div class="card">
                    <img src="./images/indicators-icons/${key}.svg" alt="${weatherIndicators[key]}-icon" class="indicators-icons">
                    <p class="value">${indicators[key]} ${indicator['units']}</p>
                    <p class="fullName">${indicator['fullName']}</p>
                </div>`;
            }, ``);
};

function createWeatherInfo(parameters) {
    const {temp, pressure, humidity, city, description, icon, speed, deg} = parameters;
    const template = `
            ${createFormChooseCity()}
            <div class="weather-info">
                ${createMainInfo(city, icon, description)}
                <div class="additional-info">
                    ${createAdditionalInfo({temp, pressure, humidity, speed, deg})}
                </div>
            </div>`;
    
    return newDiv({classList: 'weather-content', innerHTML: template});
};

export default createWeatherInfo;