let weatherIcon = document.querySelector('.weather-icon');
let weatherValue = document.querySelector('.weather-value p');

const KELVIN = 273.15;

const apiKey = CONFIG.weatherKey;
const city = CONFIG.weatherCity;
const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

window.onload = getWeather();

async function getWeather() {
  try {
    const response = await fetch(api);
    const data = await response.json();

    if (!response.ok) {
      throw new Error;
    }

    let dataIconId = data.weather[0].icon;
    let dataWeatherValue = data.main.temp;

    let convertedWeather = CONFIG.weatherUnit === 'C'
      ? convertToCelsius(dataWeatherValue)
      : convertToFahrenheit(dataWeatherValue);

    weatherIcon.innerHTML = `<img src="/assets/icons/${dataIconId}.png" alt="weather icon">`;
    weatherValue.innerHTML = convertedWeather;

  } catch (error) {
    console.log('%c 💀 Error to fetch weather api. Check the config file if api key and the city are correctly filled.',
      'color: red; font-weight: bold; background: black');
  }
}

function convertToFahrenheit(kelvin) {
  let fahrenheit = Math.floor(((9 / 5) * (kelvin - KELVIN)) + 32);
  return `${fahrenheit}ºF`;
}

function convertToCelsius(kelvin) {
  let celsius = Math.floor(kelvin - KELVIN);
  return `${celsius}ºC`;
}

