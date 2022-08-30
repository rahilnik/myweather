var now = new Date();

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var day = days[now.getDay()];
let h3 = document.querySelector("h3");
h3.innerHTML = `today is ${day} ${hours}:${minutes}`;


        

function searchcity(city) {
  let apiKey = "9afbead6b698cb67e5e11d1dfdb440d5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-submit").value;
  searchcity(city);
}
function displayWeatherCondition(response) {
  document.querySelector("h2").innerHTML = response.data.name;
  let tempelement= document.querySelector("#temperature");
   celsiusTemperature = response.data.main.temp;
  tempelement.innerHTML= Math.round(celsiusTemperature);
  

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let iconElement = document.querySelector("#icon");
 
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  getForecast(response.data.coord);
  }
  


function displayfahrenheittemperature(event){
  event.preventDefault();
  let tempelement= document.querySelector("#temperature");
  let fahrenheittemperature=(celsiusTemperature*9)/5 + 32;
  tempelement.innerHTML= Math.round(fahrenheittemperature);
}
function displaycelsuistemperature(event){
  event.preventDefault();
  let tempelement= document.querySelector("#temperature");
  tempelement.innerHTML= Math.round(celsiusTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
let celsiusTemperature =null;
let fahrenheitlink = document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click", displayfahrenheittemperature);
let celsiuslink = document.querySelector("#celsius-link");
celsiuslink.addEventListener("click", displaycelsuistemperature);