"use strict";

// Selecitng elements
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const btn = document.querySelector(".btn");
const indicator = document.querySelector(".indicator");
const allCities = document.querySelectorAll(".city");
const citiesContainer = document.querySelector(".cities");

const startTimer = function (city) {
  const timer = setInterval(() => {
    const cityTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: `${city}`,
    });
    const timeArr = cityTime.split(":");
    hour.textContent = timeArr[0];
    minute.textContent = timeArr[1];
    second.textContent = timeArr[2];
  }, 1000);

  return timer;
};

let timer = startTimer("Europe/London");

// Event Listeners
btn.addEventListener("click", function () {
  btn.classList.toggle("unactive");
  citiesContainer.classList.toggle("unactive");
  allCities.forEach((city) => {
    city.classList.toggle("unactive");
  });
});

citiesContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("city")) {
    const city = e.target.textContent;
    clearInterval(timer);

    if (city === "London") {
      timer = startTimer("Europe/London");
      indicator.textContent = `Europe - ${city}`;
    } else if (city === "New York") {
      timer = startTimer("America/New_York");
      indicator.textContent = `America - ${city}`;
    } else if (city === "Tokyo") {
      timer = startTimer("Asia/Tokyo");
      indicator.textContent = `Asia - ${city}`;
    } else if (city === "Nairobi") {
      timer = startTimer("Africa/Nairobi");
      indicator.textContent = `Africa - ${city}`;
    }
  }
});
