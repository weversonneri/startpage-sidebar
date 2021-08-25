let toggleThemeButton = document.querySelector('#theme-toggle');
let storedTheme = localStorage.getItem('@theme');

storedTheme === 'dark' ? darkTheme() : lightTheme();

function lightTheme() {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('@theme', 'light');

  toggleThemeButton.innerHTML = '<i id="themeButton__icon" data-feather="moon"></i>';
  feather.replace();
}

function darkTheme() {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('@theme', 'dark');

  toggleThemeButton.innerHTML = '<i id="themeButton__icon" data-feather="sun"></i>';
  feather.replace();
}

const toggleTheme = () => {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  currentTheme === 'light' ? darkTheme() : lightTheme();
};

toggleThemeButton.addEventListener('click', () => {
  toggleTheme();
});
