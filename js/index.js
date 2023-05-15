let users = ["Jim", "Mike", "Dave", "Josh", "Tim", "Jane", "Susan", "Haley", "Matthew", "John", "Spencer", "Stephan", "Mable", "Steve", "Jacob", "Ruby", "Adam", "Bruce"];
let stevePresent = false;

if (users.includes("Steve")) {
  stevePresent = true;
}

if (stevePresent) {
  console.log("Yes, Steve is present");
} else {
  console.log("No, Steve is not present");
}


let computers = [600, 1000, 400, 300, 600, 200, 100, 400, 500];
let requiredPower = 3500;
let totalPower = 0;

for (let i = 0; i < computers.length; i++) {
  totalPower += computers[i];
}

if (totalPower >= requiredPower) {
  console.log("There is enough power!");
} else {
  console.log("There is not enough power!");
}

let marks = [23, 45, 67, 55, 80, 90, 45, 60, 56, 30, 31];

// Calculate the average
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
let average = sum / marks.length;

console.log("The Average is", average);

// Check if userOne name is Josh AND that this user is older than 18
let ageOne = 23;
let userOne = "Josh";
if (userOne === "Josh" && ageOne > 18) {
  console.log("User and Age Match");
} else {
  console.log("User and Age Do Not Match");
}

// Check if userTwo name is Peter OR that this user is younger than 18
let ageTwo = 16;
let userTwo = "Jacob";
if (userTwo === "Peter" || ageTwo < 18) {
  console.log("User is Younger than 18 or is Peter");
} else {
  console.log("User is Younger than 18 and is Not Peter");
}