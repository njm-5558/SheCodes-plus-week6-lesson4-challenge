function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-enter-input");
  let heading = document.querySelector("h1");
  if (cityInput.value) {
    heading.innerHTML = " " + cityInput.value + " ";
  }
}
let form = document.querySelector("#city-enter");
form.addEventListener("submit", search);

let now = new Date();
let h2 = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hours = now.getHours();
let minutes = now.getMinutes();
let day = days[now.getDay()];
h2.innerHTML = " " + day + " " + hours + ":" + minutes + " ";

function change(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  let tempCity = 5;
  let fTemperature = Math.round(tempCity * 1.8 + 32);
  temperature.innerHTML = "" + fTemperature + "";
}
let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", change);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", function (event) {
  event.preventDefault();
  let cTemperature = 5;
  temperature.innerHTML = "" + cTemperature + "";
});
