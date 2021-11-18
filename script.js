"use strict";

const api = {
  key: "caadac0b9ec20337ac7610a0db0b2c9f",
  base: "http://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector(".search");
searchbox.addEventListener("keypress", setQuerry);

function setQuerry(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    console.log(searchbox.value);
  }
}

function getResults(querry) {
  fetch(`${api.base}weather?q=${querry}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;
}
