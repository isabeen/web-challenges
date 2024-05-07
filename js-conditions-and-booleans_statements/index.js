console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";
if (receivedPassword == SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}
// Part 2: Even / Odd
const number = 6;
if (number % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 100;
if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (5 <= numberOfHotdogs < 100) {
  console.log("1.50 euro per hotdog");

  // something is wrong in this part
} else if (100 <= numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else if (1000000 <= numberOfHotdogs) {
  console.log("0.10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 18;
let statement = "";
if (currentHour < 17) {
  statement = "Still need to learn...";
} else if ((currentHour) => 17) {
  statement = "Partytime!!!";
}
console.log(statement);

// Part 5: Greeting
// something is wrong in this part
const userName = "Archibald";
const newName = "Sabeen";
let greeting = "";
if (newName == userName) {
  greeting = "Hello " + "Coach" + "!";
} else {
  greeting = "Hello " + newName + "!";
}
console.log(greeting);
