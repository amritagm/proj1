function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = '16732b97376b581b59c77818be6a080f'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} &deg;C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            document.getElementById('weather-data').innerHTML = weatherData;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-data').innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
        });
}
