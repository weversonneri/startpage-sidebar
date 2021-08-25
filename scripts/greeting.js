function greetingCard() {
  let d = new Date();
  let dd = d.getDate();
  let week = CONFIG.weekday[d.getDay()];
  let mm = CONFIG.monthNames[d.getMonth()];
  let yy = d.getFullYear();

  let greeting = d.getHours() < 12 ? `${CONFIG.greetingMorning}`
    : d.getHours() < 18 ? `${CONFIG.greetingAfternoon}`
      : `${CONFIG.greetingEvening}`;

  document.getElementById('greeting-title').innerText = `${greeting} ${CONFIG.name}!`;
  document.getElementById('greeting-date').innerText = `Today is ${week}, ${mm} ${dd}, ${yy}.`;
}

greetingCard();