var userInput = document.getElementById("user-input");
var userForm = document.getElementById("form-sbt");
var apiKey = "d91f911bcf2c0f925fb6535547a5ddc9"
var dayForecast = document.getElementById("current-forecast")

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
        var h1El = document.createElement("h1")
        h1El.textContent = data.list[0].main.temp
        dayForecast.append(h1El)
    })
}

function renderDayForecast () {

}

// This function is responsible for form submission by capturing userInput
var handleFormSubmit =  function(e) {
    e.preventDefault()
    var input = userInput.value
    fetchCoordinates(input)
}

userForm.addEventListener("submit", handleFormSubmit)

//local storage
//create an empty array
//push that value(city name) to the array
//