// Display Current Time
function getCurrentTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let year = now.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let hour = now.getHours();
  let minutes = now.getMinutes();

  let zeit = document.querySelector(".currentTime");
  zeit.innerHTML = `${day}, ${date} ${month} ${year}, ${hour}:${minutes} `;
}
getCurrentTime();

//Create Search Engine
function displayWeather(response) {
  document.querySelector(".cityName").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "3eb9c949d1b0bbf888c46292a14dc08c";
  let city = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector(".search-form");
form.addEventListener("submit", search);

function retrievePosition(position) {
  let apiKey = "3eb9c949d1b0bbf888c46292a14dc08c";
  let units = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
function getLocation() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let pin = document.querySelector("#current-location-button");
pin.addEventListener("click", getLocation);

//Show Celcius Fahrenheit
function showCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
}

function showFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", showFahrenheit);

let celcius = document.querySelector("#celcius-link");
celcius.addEventListener("click", showCelcius);
