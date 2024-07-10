const apiKey = 'f3103f8bf46acc6285ec03916a4e7800'; // Replace with your OpenWeatherMap API key

document.addEventListener("DOMContentLoaded", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeatherByCoords(lat, lon);
        });
    }
});

function fetchWeather() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeatherByLocation(location);
    } else {
        alert('Please enter a location');
    }
}

function fetchWeatherByLocation(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function fetchWeatherByCoords(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const rainProbability = data.rain ? data.rain["1h"] || data.rain["3h"] || 0 : 0;
    weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Rain Probability: ${rainProbability} mm</p>
    `;
}


// const apiKey = 'f3103f8bf46acc6285ec03916a4e7800'; // Replace with your OpenWeatherMap API key

// document.addEventListener("DOMContentLoaded", function() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;
//             fetchWeatherByCoords(lat, lon);
//         });
//     }
// });

// function fetchWeather() {
//     const location = document.getElementById('locationInput').value;
//     if (location) {
//         fetchWeatherByLocation(location);
//     } else {
//         alert('Please enter a location');
//     }
// }

// function fetchWeatherByLocation(location) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
//         .then(response => response.json())
//         .then(data => displayWeather(data))
//         .catch(error => console.error('Error fetching weather data:', error));
// }

// function fetchWeatherByCoords(lat, lon) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
//         .then(response => response.json())
//         .then(data => displayWeather(data))
//         .catch(error => console.error('Error fetching weather data:', error));
// }

// function displayWeather(data) {
//     const weatherDiv = document.getElementById('weather');
//     weatherDiv.innerHTML = `
//         <h2>${data.name}</h2>
//         <p>${data.weather[0].description}</p>
//         <p>Temperature: ${data.main.temp} °C</p>
//         <p>Humidity: ${data.main.humidity}%</p>
//         <p>Wind Speed: ${data.wind.speed} m/s</p>
//     `;
// }
