const form = document.querySelector('#searchForm');
const cityNameInput = document.querySelector('#city');
const countryInput = document.querySelector('#country');
const searchBtn = document.querySelector('#search');
const infoBox = document.querySelector('#info');
const countryName = document.querySelector('#countryName');
const cityName = document.querySelector('#cityName');
const temp = document.querySelector('#temp');
const condition = document.querySelector('#condition');

function changeBackground(condition) {
    switch (condition) {
        case 'Sunny':
            document.body.style.backgroundImage = "url('assets/sunny.jpg')";
            break;
        case 'Partly cloudy':
            document.body.style.backgroundImage = "url('assets/partly-cloudy.jpg')";
            break;
        case 'Patchy rain possible':
            document.body.style.backgroundImage = "url('assets/patchy-rain-possible.jpg')";
            break;
        case 'Clear':
            document.body.style.backgroundImage = "url('assets/clear.jpg')";
            break;
        case 'Cloudy':
            document.body.style.backgroundImage = "url('assets/cloudy.jpg')";
            break;
        case 'Overcast':
            document.body.style.backgroundImage = "url('assets/overcast.jpg')";
            break;
        case 'Mist':
            document.body.style.backgroundImage = "url('assets/mist.jpg')";
            break;
        case 'Patchy rain nearby':
            document.body.style.backgroundImage = "url('assets/patchy-rain-nearby.jpg')";
            break;
        case 'Patchy snow nearby':
            document.body.style.backgroundImage = "url('assets/patchy-snow-nearby.jpg')";
            break;
        case 'Patchy sleet nearby':
            document.body.style.backgroundImage = "url('assets/patchy-sleet-nearby.webp')";
            break;
        case 'Patchy freezing drizzle nearby':
            document.body.style.backgroundImage = "url('assets/patchy-freezing-drizzle.jpg')";
            break;
        case 'Thundery outbreaks in nearby':
            document.body.style.backgroundImage = "url('assets/thundery-outbreaks-nearby.webp')";
            break;
        case 'Blowing snow':
            document.body.style.backgroundImage = "url('assets/blowing-snow.jpg')";
            break;
        case 'Blizzard':
            document.body.style.backgroundImage = "url('assets/blizzard.jpg')";
            break;
        case 'Fog':
            document.body.style.backgroundImage = "url('assets/fog.png')";
            break;
        case 'Freezing fog':
            document.body.style.backgroundImage = "url('assets/freezing-fog.jpg')";
            break;
        case 'Patchy light drizzle':
            document.body.style.backgroundImage = "url('assets/patchy-light-drizzle.jpg')";
            break;
        case 'Light drizzle':
            document.body.style.backgroundImage = "url('assets/light-drizzle.jpg')";
            break;
        case 'Freezing drizzle':
            document.body.style.backgroundImage = "url('assets/freezing-drizzle.jpg')";
            break;
        case 'Heavy freezing drizzle':
            document.body.style.backgroundImage = "url('assets/heavy-freezing-drizzle.jpg')";
            break;
        case 'Patchy light rain':
            document.body.style.backgroundImage = "url('assets/patchy-light-rain.jpg')";
            break;
        case 'Light rain':
            document.body.style.backgroundImage = "url('assets/light-rain.jpg')";
            break;
        case 'Moderate rain at times':
            document.body.style.backgroundImage = "url('assets/moderate-rain-at-time.jpg')";
            break;
        case 'Moderate rain':
            document.body.style.backgroundImage = "url('assets/moderate.jpg')";
            break;
        case 'Heavy rain at times':
            document.body.style.backgroundImage = "url('assets/heavy-rain-at-times.jpg')";
            break;
        case 'Heavy rain':
            document.body.style.backgroundImage = "url('assets/heavy-rain.jpg')";
            break;
        case 'Light freezing rain':
            document.body.style.backgroundImage = "url('assets/light-freezing-rain.jpg')";
            break;
        case 'Moderate or heavy freezing rain':
            document.body.style.backgroundImage = "url('assets/moderate-or-heavy-freezing-rain.jpg')";
            break;
        case 'Light sleet':
            document.body.style.backgroundImage = "url('assets/light-sleet.jpg')";
            break;
        case 'Moderate or heavy sleet':
            document.body.style.backgroundImage = "url('assets/moderate-or-heavy-sleet.jpg')";
            break;
        case 'Patchy light snow':
            document.body.style.backgroundImage = "url('assets/patchy-light-snow.jpg')";
            break;
        case 'Light snow':
            document.body.style.backgroundImage = "url('assets/light-snow.jpg')";
            break;
        case 'Patchy moderate snow':
            document.body.style.backgroundImage = "url('assets/patchy-moderate-snow.jpg')";
            break;
        case 'Moderate snow':
            document.body.style.backgroundImage = "url('assets/moderate-snow.jpg')";
            break;
        case 'Patchy heavy snow':
            document.body.style.backgroundImage = "url('assets/patchy-heavy-snow.jpg')";
            break;
        case 'Heavy snow':
            document.body.style.backgroundImage = "url('assets/heavy-snow.jpg')";
            break;
        case 'Ice pellets':
            document.body.style.backgroundImage = "url('assets/ice-pellets.jpg')";
            break;
        case 'Light rain shower':
            document.body.style.backgroundImage = "url('assets/light-rain-shower.jpg')";
            break;
        case 'Moderate or heavy rain shower':
            document.body.style.backgroundImage = "url('assets/moderate-or-heavy-rain-shower.jpg')";
            break;
        case 'Torrential rain shower':
            document.body.style.backgroundImage = "url('assets/torrential-rain-shower.jpg')";
            break;
        case 'Light sleet showers':
            document.body.style.backgroundImage = "url('assets/light-sleet-showers.jpg')";
            break;
        case 'Moderate or heavy sleet showers':
            document.body.style.backgroundImage = "url('assets/moderate-or-heavy-sleet-showers.jpg')";
            break;
        case 'Light snow showers':
            document.body.style.backgroundImage = "url('assets/light-snow-showers.webp')";
            break;
        case 'Moderate or heavy snow showers':
            document.body.style.backgroundImage = "url('assets/moderate-or-heavy-snow-showers.jpg')";
            break;
        case 'Light showers of ice pellets':
            document.body.style.backgroundImage = "url('assets/light-showers-of-ice-pellets.jpg')";
            break;
        case 'Moderate or heavy showers of ice pellets':
            document.body.style.backgroundImage = "url('assets/moderate-or-heavy-showers-of-ice-pellets.jpg')";
            break;
        case 'Patchy light rain in area with thunder':
            document.body.style.backgroundImage = "url('assets/patchy-light-rain-in-area-with-thunder.jpg')";
            break;
        case 'Moderate or heavy rain in area with thunder':
            document.body.style.backgroundImage = "url('assets/moderate-or-heavy-rain-in-area-with-thunder.webp')";
            break;
        case 'Patchy light snow in area with thunder':
            document.body.style.backgroundImage = "url('assets/patchy-light-snow-in-area-with-thunder.jpg')";
            break;
        case 'Moderate or heavy snow in area with thunder':
            document.body.style.backgroundImage = "url('assets/moderate-or-heavy-snow-in-area-with-thunder.webp')";
            break;

    }
}

async function showInfo(data) {
    infoBox.classList.remove('hidden');
    countryName.innerHTML = data.location.country;
    cityName.innerHTML = data.location.name;
    temp.innerHTML = `${data.current.temp_c} °C`;

    const conditionTranslateResponse = await fetch(`https://rapid-translate-multi-traduction.p.rapidapi.com/t`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
        },
        body: JSON.stringify({
            from: 'en',
            to: 'pt-BR',
            q: data.current.condition.text
        })
    });
    const conditionTranslate = await conditionTranslateResponse.json()
    condition.innerHTML = conditionTranslate[0];
}

async function getWeatherData() {
    searchBtn.disabled = true;
    const response = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${cityNameInput.value}&country=${countryInput.value}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': '',
        }
    });
    const data = await response.json();
    const position = {
        lat: data[0].latitude,
        lon: data[0].longitude
    }

    const weatherResponse = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${position.lat},${position.lon}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    });
    const weatherData = await weatherResponse.json();
    const condition = weatherData.current.condition.text;
    changeBackground(condition);
    showInfo(weatherData);
    searchBtn.disabled = false;
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await getWeatherData();
});
