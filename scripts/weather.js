(async () => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=brasilia&appid=25efa7c592ce21bce5ebb66fbe896087';

  const response = await fetch(url);
  const data = await response.json();

  console.log(data.main.temp);
  console.log(convertToCelsius(data.main.temp));

})();

function convertToFahrenheit(kelvin) {
  let fahrenheit = Math.floor(((9 / 5) * (kelvin - 273.15)) + 32);
  return fahrenheit;
}

function convertToCelsius(kelvin) {
  let celsius = Math.floor(kelvin - 273.15);
  return celsius;
}