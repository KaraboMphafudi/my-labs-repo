document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var lat = document.getElementById('latitude').value;
    var lon = document.getElementById('longitude').value;
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6fbbd5c9597da9a6a7826459c00513fa`;

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather at (${lat}, ${lon})</h2>
                <p>City: ${data.name}</p>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(function(error) {
            console.error('Error:', error);
            document.getElementById('weatherInfo').innerHTML = '<p>Invalid coordinates. Please try again.</p>';
        });
});