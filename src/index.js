import "./style.css";
import "../assets/images/favicon-32x32.png";
import image from "../assets/images/icon-arrow.svg";
import { intervalToDuration } from "date-fns";

let newDate;
let enteredYear = 1978;
let enteredMonth = 4;
let enteredDay = 11;
// newDate = new Date(enteredYear, enteredMonth, enteredDay);
// const currentDate = new Date();

// const age = intervalToDuration({ start: newDate, end: currentDate });

// console.log(age);
// console.log(age.months);
// console.log(age.days);

const arrowImage = document.getElementById("arrow-image");
arrowImage.src = image;
const labels = document.querySelectorAll(".label");

const inputMonth = document.getElementById("month-input");
const inputDay = document.getElementById("day-input");
const inputYear = document.getElementById("year-input");

function checkInputValidity() {
  if (
    inputDay.value < 1 ||
    inputDay.value > 31 ||
    inputMonth.value < 1 ||
    inputMonth.value > 12 ||
    inputYear.value < 1900 ||
    inputYear.value > 2024
  ) {
    inputDay.classList.add("invalid-input");
    inputMonth.classList.add("invalid-input");
    inputYear.classList.add("invalid-input");
    for (let i = 0; i < labels.length; i++) {
      labels[i].className = "invalid-date";
    }
    return;
  } else {
    inputDay.classList.remove("invalid-input");
    inputMonth.classList.remove("invalid-input");
    inputYear.classList.remove("invalid-input");
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.remove("invalid-date");
    }
  }
}

function getMonthValue() {
  checkInputValidity();
  enteredMonth = inputMonth.value;
  getAge();
}

function getDayValue() {
  checkInputValidity();
  enteredDay = inputDay.value;
  getAge();
}

function getYearValue() {
  checkInputValidity();
  enteredYear = inputYear.value;
  getAge();
}

inputMonth.addEventListener("input", getMonthValue);
inputDay.addEventListener("input", getDayValue);
inputYear.addEventListener("input", getYearValue);

function logInput() {
  console.log(inputMonth.value);
  console.log(inputDay.value);
  console.log(inputYear.value);
}

function displayAge() {
  const yearsDisplayInfo = document.querySelector(".years-display__info");
  const monthsDisplayInfo = document.querySelector(".months-display__info");
  const daysDisplayInfo = document.querySelector(".days-display__info");

  yearsDisplayInfo.textContent = "this is a test";
  monthsDisplayInfo.textContent = "03";
  daysDisplayInfo.textContent = "25";
}

function getAge() {
  newDate = new Date(enteredYear, enteredMonth, enteredDay);
  const currentDate = new Date();
  const age = intervalToDuration({ start: newDate, end: currentDate });
  console.log(age);
}
