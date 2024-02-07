function updateTemp(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  let currentTempElement = document.querySelector("#current-temp");

  currentTempElement.innerHTML = currentTemp;
}

function searchCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-city");
  let currentCity = document.querySelector("#current-city");
  let city = searchInput.value;

  let apiKey = "c0f7a728c0575391764t3b111d69od7f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=
${city}&key=${apiKey}`;

  axios.get(apiUrl).then(updateTemp);

  currentCity.innerHTML = searchInput.value;
}

function formatDate(date) {
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();
  let day = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];

  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  return `${formattedDay} ${currentHour}:${currentMinute}`;
}

let form = document.querySelector("#form");
form.addEventListener("submit", searchCity);

let timeElement = document.querySelector("#current-time");

let now = new Date();

timeElement.innerHTML = formatDate(now);

// from weather api challenge

// function getTemp(response) {
//  let city = response.data.city;
//  let temperature = Math.round(response.data.temperature.current);

// let headliner = document.querySelector("#header");
// let currentTemp = `It is ${temperature} degrees in ${city}`;

//  headliner.innerHTML = currentTemp;

//let apiKey = "c0f7a728c0575391764t3b111d69od7f";
//let city = "Aarhus";

//let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

//axios.get(apiURL).then(getTemp);
