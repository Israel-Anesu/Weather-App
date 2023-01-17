import getWeatherInfo from './weather';

const weatherContainer = document.querySelector('.weather');

const form = document.querySelector('form');
const input = document.querySelector('input');
input.focus();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value === '') return;

    if (!weatherContainer.classList.contains('hidden')) {
        weatherContainer.classList.add('hidden');
    }

    if (weatherContainer.classList.contains('hidden')) {
        weatherContainer.textContent = '';
        getWeatherInfo(input.value);
        input.value = '';
        input.focus();
        weatherContainer.classList.remove('hidden');
    }
});