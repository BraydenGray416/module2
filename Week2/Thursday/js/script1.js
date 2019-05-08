var birthYear = parseInt(prompt("What year were you born?"));
var currentYear = 2019;
var age = currentYear - birthYear;

// console.log("You are "+ age +" years old this year")

if (age >= 18) {
  console.log("You are " + age + " and old enough to purchase alcohol")
} else {
  console.log("You are not old enough to purchase alcohol")
}
