import "./style.css";
import "../assets/images/favicon-32x32.png";
import image from "../assets/images/icon-arrow.svg";
import { intervalToDuration } from "date-fns";

const arrowImage = document.getElementById("arrow-image");
arrowImage.src = image;
const labels = document.querySelectorAll(".label");

const inputMonth = document.getElementById("month-input");
const inputDay = document.getElementById("day-input");
const inputYear = document.getElementById("year-input");

let newDate;
let enteredYear = 1970;
let enteredMonth = 1;
let enteredDay = 1;
let age;

function checkInputValidity() {
  if (
    inputDay.value < 1 ||
    inputDay.value > 31 ||
    inputMonth.value < 1 ||
    inputMonth.value > 12 ||
    inputYear.value < 1900 ||
    inputYear.value > 2023
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
  enteredMonth = inputMonth.value - 1;
  return enteredMonth;
}

function getDayValue() {
  enteredDay = inputDay.value;
  return enteredDay;
}

function getYearValue() {
  enteredYear = inputYear.value;
  return enteredYear;
}

inputMonth.addEventListener("input", () => {
  checkInputValidity();
  if (
    inputDay.className === "invalid-input" ||
    inputMonth.className === "invalid-input" ||
    inputYear.className === "invalid-input"
  ) {
    displayAgeInvalid();
  } else {
    getMonthValue();
    getAge();
    displayAgeValid();
  }
});
inputDay.addEventListener("input", () => {
  checkInputValidity();
  if (
    inputDay.className === "invalid-input" ||
    inputMonth.className === "invalid-input" ||
    inputYear.className === "invalid-input"
  ) {
    displayAgeInvalid();
  } else {
    getDayValue();
    getAge();
    displayAgeValid();
  }
});
inputYear.addEventListener("input", () => {
  checkInputValidity();
  if (
    inputDay.className === "invalid-input" ||
    inputMonth.className === "invalid-input" ||
    inputYear.className === "invalid-input"
  ) {
    displayAgeInvalid();
  } else {
    getYearValue();
    getAge();
    displayAgeValid();
  }
});

function displayAgeValid() {
  const yearsDisplayInfo = document.querySelector(".years-display__info");
  const monthsDisplayInfo = document.querySelector(".months-display__info");
  const daysDisplayInfo = document.querySelector(".days-display__info");

  yearsDisplayInfo.textContent = age.years;
  monthsDisplayInfo.textContent = age.months;
  daysDisplayInfo.textContent = age.days;
}

function displayAgeInvalid() {
  const yearsDisplayInfo = document.querySelector(".years-display__info");
  const monthsDisplayInfo = document.querySelector(".months-display__info");
  const daysDisplayInfo = document.querySelector(".days-display__info");

  yearsDisplayInfo.textContent = "- -";
  monthsDisplayInfo.textContent = "- -";
  daysDisplayInfo.textContent = "- -";
}

function getAge() {
  newDate = new Date(enteredYear, enteredMonth, enteredDay);
  const currentDate = new Date();
  age = intervalToDuration({ start: newDate, end: currentDate });
}

// function testPromise(xPromise, yPromise) {
//   return Promise.all( [xPromise, yPromise])

//   .then( function(values)  {
//     return values[1];
// })
// }

// function getX() {
//   let x = prompt("enter x", 1);
//   return +x;
// }

// function getY() {
//   let y = prompt("enter Y", 2);
//   return +y;
// }

// testPromise(getX(), getY())
// .then( function(result) {
//   return result;
// })

// function tryPromise (trial) {
//   return new Promise( function(resolve, reject) {
//     resolve(trial * 3);
//   })
// }

// let checkPromise = tryPromise(23);

// function tryPromiseFunction(trialPromise) {
//   trialPromise.then(
//     function() {
//       console.log(trialPromise);
//     },
//     function() {
//       console.log("this is a reject");
//     }
//   );
// }

// tryPromiseFunction(checkPromise);

// const trial = Promise.resolve( 11 );
// trial.then(
//   null,
//   function rejected(err) {
//     console.log(err);
//   }
// )

// function add(xPromise, yPromise) {
//   return new Promise ( function(resolve, reject){
//     foo();
//     resolve( [xPromise, yPromise] );
//   })
// }

// function getX() {
//   const xValue = prompt("enter X", 2);
//   return +xValue;
// }

// function getY() {
//   const yValue = prompt("enter Y", 3);
//   return +yValue;
// }

// add(getX(), getY())
// .then (function fulfilled(value){
  
// const result2 = value[0] + value[1];
// console.log(result2);
// }, 
// function rejected(error){
//   console.log(error);
// })