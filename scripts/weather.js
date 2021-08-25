(async () => {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=brasilia&appid=25efa7c592ce21bce5ebb66fbe896087');
  const data = await response.json();
  console.log(data);
})();