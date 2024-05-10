console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting(time) {
  // Code here
  if (time < 12) {
    return "Good Morning";
  } else if (time < 18) {
    return "Good Afternoon";
  } else if (time < 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor(day) {
  // Code here
  if (day == 1) {
    return "darkgrey";
  } else if (day < 6) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

let currentTime = new Date();
let hours = currentTime.getHours();
console.log(hours);

let currentDay = new Date();
let day = currentTime.getDay();
console.log(day);

display.textContent = getGreeting(hours);
document.body.style.backgroundColor = getDayColor(day);
