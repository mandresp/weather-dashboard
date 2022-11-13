var userInput = document.getElementById("user-input");
var userForm = document.getElementById("form-sbt");
var weatherapi = "http://api.openweathermap.org/geo/1.0/direct?q=denver&appid=0979296881ad793a95b3a80e818231f4"

// Function is responsible for making api call with the user search term
function fetchWeather (city) {
    fetch()
}

// This fucntion is responsible for form submission by capturing userInput
function handleFormSubmit(e) {
    e.preventDefault()
    var input = userInput.value
    fetchWeather(input)
}

userForm.addEventListener("submit", handleFormSubmit())