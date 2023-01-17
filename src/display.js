const weatherContainer = document.querySelector('.weather');

function showWeather(cityName, temperature, feelsLike, humidity, wind) {
    const cityNameDiv = document.createElement('div');
    const temperatureDiv = document.createElement('div');
    const feelsLikeDiv = document.createElement('div');
    const humidityDiv = document.createElement('div');
    const windDiv = document.createElement('div');

    cityNameDiv.setAttribute('class', 'search-name');
    temperatureDiv.setAttribute('class', 'temp');
    feelsLikeDiv.setAttribute('class', 'w-info');
    humidityDiv.setAttribute('class', 'w-info');
    windDiv.setAttribute('class', 'w-info');

    cityNameDiv.textContent = cityName;
    temperatureDiv.textContent = `${temperature} °C`;
    feelsLikeDiv.textContent = `Feels like: ${feelsLike} °C`;
    humidityDiv.textContent = `Humidity: ${humidity} %`;
    windDiv.textContent = `Wind: ${wind} Km/h`;
    weatherContainer.append(cityNameDiv, temperatureDiv, feelsLikeDiv, humidityDiv, windDiv);
}

function showSearchError(cityName) {
    const error = document.createElement('div');
    error.setAttribute('class', 'search-error');

    error.textContent = `${cityName}: Data not found`;
    weatherContainer.appendChild(error);
}

export { showWeather, showSearchError };