import { newDiv } from '../domHelper/creatingElement.js'

function createWeatherInfo(parameters) {
    const {temp, pressure, humidity, city, description, icon, speed, deg} = parameters;
console.log(parameters)
    const template = `
            <form class="choose-city">
                <label class="enter-city">
                    <input type="text" placeholder="Enter a city">
                </label>
                <div class="button-wrap">
                    <button type="button">Search</button>
                </div>
            </form>
            <div class="weather-info">
                <div class="main-info">
                    <div class="city-wrap">
                        <img src="../images/navigation-icon.svg" alt="navigation" class="navigation-icon">
                        <span>${city}</span>
                    </div>   
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather">
                    <span>${description}</span>
                </div>
                <div class="additional-info">
                    <div class="card">
                        <p>Temperature:</p>
                        <p>${temp}</p>
                    </div>
                    <div class="card">
                        <p>Pressure:</p>
                        <p>${pressure}</p>
                    </div>
                    <div class="card">
                        <p>Humidity:</p>
                        <p>${humidity}</p>
                    </div>
                    <div class="card">
                        <p>Speed:</p>
                        <p>${speed}</p>
                    </div>
                    <div class="card">
                        <p>Deg:</p>
                        <p>${deg}</p>
                    </div>
                </div>
            </div>
            `;
    
    return newDiv({classList: 'weather-content', innerHTML: template});
};

export default createWeatherInfo;