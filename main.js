const form = document.querySelector('#searchForm');
const cityNameInput = document.querySelector('#city');
const stateInput = document.querySelector('#state');
const searchBtn = document.querySelector('#search');

async function getWeatherData() {
    const query = `${cityNameInput.value},${stateInput.value}`;
    const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${query}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        },
    });
    const data = await response.json()
    console.log(data);
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(`Nome da cidade: ${cityNameInput.value}`);
    console.log(`Nome do estado: ${stateInput.value}`);
    await getWeatherData();
});
