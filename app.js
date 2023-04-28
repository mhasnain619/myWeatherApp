const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_image = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const cityName = document.getElementById('cityName');
const location_not_found = document.querySelector('.location-not-found')
const weather_body = document.querySelector('.weather-body')
const notFound = document.querySelector('.notFound')
async function cheackweather(city) {
    const Apikey = "aac20320b6ea5375de1e3f6763abbadb"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`
    const weather_data = await fetch(`${url}`).then(response => response.json());
    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        notFound.src = './images/404.png'
        console.log("error");
        return;
    }
    weather_body.style.display = "flex";
    location_not_found.style.display = "none";

    cityName.innerHTML = `${weather_data.name}`
    temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`
    console.log(weather_data)
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_image.src = "./images/cloud.png";
            break;
        case 'Clear':
            weather_image.src = "./images/clear.png";
            break;
        case 'Rain':
            weather_image.src = "./images/rain.png";
            break;
        case 'Mist':
            weather_image.src = "./images/mist.png";
            break;
        case 'Snow':
            weather_image.src = "./images/snow.png";
            break;
        case 'Smoke':
            weather_data.src = "./images/smokein"
            break;

    }
}
cheackweather('karachi')
searchBtn.addEventListener('click', () => {
    cheackweather(inputBox.value)
})