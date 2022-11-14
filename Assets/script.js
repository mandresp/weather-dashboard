var userInput = document.getElementById("user-input");
var userForm = document.getElementById("form-sbt");
var apiKey = "0979296881ad793a95b3a80e818231f4"
var dayForecast = document.getElementById("current-forecast")
var fiveDayForecast = document.getElementById("forecast")
var day2 = document.getElementById("day2")
var day3 = document.getElementById("day3")
var day4 = document.getElementById("day4")
var day5 = document.getElementById("day5")
var day6 = document.getElementById("day6")
var now = dayjs().format('MM-DD-YYYY')
var dayTwo = dayjs().add(1, 'day').format('MM-DD-YYYY')
var dayThree = dayjs().add(2, 'day').format('MM-DD-YYYY')
var dayFour = dayjs().add(3, 'day').format('MM-DD-YYYY')
var dayFive = dayjs().add(4, 'day').format('MM-DD-YYYY')
var daySix = dayjs().add(5, 'day').format('MM-DD-YYYY')

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

        var h4El = document.createElement("h4")
        h4El.textContent = data.city.name
        h4El.append(" " + dayTwo)
        day2.append(h4El)
        var temp = document.createElement("h5")
        temp.textContent = "Temp: " + data.list[8].main.temp + "°F"
        day2.append(temp)
        var wind = document.createElement("h5")
        wind.textContent = "Wind: " + data.list[8].wind.speed + "MPH"
        day2.append(wind)
        var humid = document.createElement("h5")
        humid.textContent = "Humidity: " + data.list[8].main.humidity + "%"
        day2.append(humid)
        var weather = document.createElement("h5")
        weather.textContent = data.list[8].weather[0].main
        day2.append(weather)

        var h4El = document.createElement("h4")
        h4El.textContent = data.city.name
        h4El.append(" " + dayThree)
        day3.append(h4El)
        var temp = document.createElement("h5")
        temp.textContent = "Temp: " + data.list[15].main.temp + "°F"
        day3.append(temp)
        var wind = document.createElement("h5")
        wind.textContent = "Wind: " + data.list[15].wind.speed + "MPH"
        day3.append(wind)
        var humid = document.createElement("h5")
        humid.textContent = "Humidity: " + data.list[15].main.humidity + "%"
        day3.append(humid)
        var weather = document.createElement("h5")
        weather.textContent = data.list[15].weather[0].main
        day3.append(weather)

        var h4El = document.createElement("h4")
        h4El.textContent = data.city.name
        h4El.append(" " + dayFour)
        day4.append(h4El)
        var temp = document.createElement("h5")
        temp.textContent = "Temp: " + data.list[23].main.temp + "°F"
        day4.append(temp)
        var wind = document.createElement("h5")
        wind.textContent = "Wind: " + data.list[23].wind.speed + "MPH"
        day4.append(wind)
        var humid = document.createElement("h5")
        humid.textContent = "Humidity: " + data.list[23].main.humidity + "%"
        day4.append(humid)
        var weather = document.createElement("h5")
        weather.textContent = data.list[23].weather[0].main
        day4.append(weather)

        var h4El = document.createElement("h4")
        h4El.textContent = data.city.name
        h4El.append(" " + dayFive)
        day5.append(h4El)
        var temp = document.createElement("h5")
        temp.textContent = "Temp: " + data.list[32].main.temp + "°F"
        day5.append(temp)
        var wind = document.createElement("h5")
        wind.textContent = "Wind: " + data.list[32].wind.speed + "MPH"
        day5.append(wind)
        var humid = document.createElement("h5")
        humid.textContent = "Humidity: " + data.list[32].main.humidity + "%"
        day5.append(humid)
        var weather = document.createElement("h5")
        weather.textContent = data.list[32].weather[0].main
        day5.append(weather)

        var h4El = document.createElement("h4")
        h4El.textContent = data.city.name
        h4El.append(" " + daySix)
        day6.append(h4El)
        var temp = document.createElement("h5")
        temp.textContent = "Temp: " + data.list[39].main.temp + "°F"
        day6.append(temp)
        var wind = document.createElement("h5")
        wind.textContent = "Wind: " + data.list[39].wind.speed + "MPH"
        day6.append(wind)
        var humid = document.createElement("h5")
        humid.textContent = "Humidity: " + data.list[39].main.humidity + "%"
        day6.append(humid)
        var weather = document.createElement("h5")
        weather.textContent = data.list[39].weather[0].main
        day6.append(weather)
    })
}

// This function is responsible for form submission by capturing userInput
var handleFormSubmit =  function(e) {
    e.preventDefault()
    var input = userInput.value
    fetchCoordinates(input)
}

userForm.addEventListener("submit", handleFormSubmit)