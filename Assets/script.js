var userInput = document.getElementById("user-input");
var userForm = document.getElementById("form-sbt");
var apiKey = "0979296881ad793a95b3a80e818231f4"
var dayForecast = document.getElementById("current-forecast")
var h1El = document.createElement("h1")
var now = dayjs().format('MM-DD-YYYY')

function fetchCoordinates(city) {
    console.log(city)
    var apiCall = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + apiKey;

    fetch(apiCall)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            var lat = data[0].lat
            var lon = data[0].lon
            fetchWeather (lat, lon) 
        });
}

// Function is responsible for making api call with the user search term
function fetchWeather (lat, lon) {
    var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?"
    var apiCall = weatherApi + "lat=" + lat + "&lon=" + lon + "&units=imperial" + "&appid=" + apiKey
    fetch(apiCall)
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {
        console.log(data)
        var h1El = document.createElement("h1")
        h1El.textContent = data.city.name
        dayForecast.append(h1El)
        var temp = document.createElement("h3")
        temp.textContent = "Temp: " + data.list[0].main.temp + "°F"
        dayForecast.append(temp)
        var wind = document.createElement("h3")
        wind.textContent = "Wind: " + data.list[0].wind.speed + "MPH"
        dayForecast.append(wind)
        var humid = document.createElement("h3")
        humid.textContent = "Humidity: " + data.list[0].main.humidity + "%"
        dayForecast.append(humid)
        var weather = document.createElement("h3")
        weather.textContent = data.list[0].weather[0].main
        dayForecast.append(weather)
        h1El.append(" " + now)
    })
}

// This function is responsible for form submission by capturing userInput
var handleFormSubmit =  function(e) {
    e.preventDefault()
    var input = userInput.value
    fetchCoordinates(input)
}

userForm.addEventListener("submit", handleFormSubmit)