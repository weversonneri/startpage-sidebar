const clock = () => {
  let d = new Date();
  let hh = d.getHours().toString();
  let min = twoDigitsFormat(d.getMinutes()).toString();

  if (CONFIG.twelveHourFormat) {
    hh = twoDigitsFormat(d.getHours() % 12 === 0 ? 12 : d.getHours() % 12).toString();
  }

  document.getElementById('hour').innerHTML = `${hh[0]} <br> ${hh[1]}`;
  document.getElementById('minutes').innerHTML = `${min[0]} <br> ${min[1]}`;

  console.log(hh);

  setTimeout(clock, 1000);
};

function twoDigitsFormat(n) {
  return n < 10 ? '0' + n : n;
}

window.onload = clock();

