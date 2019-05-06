var value = 10;
// console.log(value + 2);
// console.log(value - 2);
// console.log(value * 2);
// console.log(value / 2);
//
// console.log(++value);
//
// // var newValue = value++
// // console.log(newValue);
//
// console.log(--value)

// +=
// -+
// *=
// /=

// var inputNumber = prompt("Please give me a number")
// if(inputNumber > 6){
//     console.log(inputNumber + " is greater than 6")
// } else {
//   console.log(inputNumber + " is less than 6")
// }

// >
// <
// >=
// <=

// =
// ==
// ===

// !=
// !==

// var randomNumber = prompt("Please enter the number 6")
// if(randomNumber == 6){
//   console.log("Well done, you listened")
// } else {
//     console.log("You put in the wrong number")
// }

// var greaterThan = prompt("Please give me a number")
// if(greaterThan > 5){
//   console.log(greaterThan + " is greater than 5")
// } else {
//     console.log(greaterThan + " is less than 5")
// }
//
// var lessThan = prompt("Give a number less than 7")
// if(lessThan < 7){
//   console.log("Correct! "+lessThan+" is less than 7")
// } else{
//     console.log("Try again "+lessThan"+" is not less than 7")
// }
//
// var greaterOrEqual = prompt()

// var overFive = prompt("How old is your child?")
// if(overFive > 5){
//   console.log("That will be $3 thank you :)")
// } else{
//     console.log("You good fam go on thru")
// }

// var mark = prompt("What was your grade?")
// if(mark > 100){
//   console.log("error")
// } else if (mark > 90) {
//   console.log("You got an A")
// } else if(mark > 80){
//   console.log("You got a B")
// } else if(mark > 70){
//   console.log("You got a C")
// } else if(mark > 60){
//   console.log("You got a D")
// } else if(mark > 0) {
//   console.log("You failed")
// } else{
//   console.log("error")
// }

var mealCost1 = prompt("How much is your meal?");
console.log("Meal one is $"+mealCost1);
var mealCost2 = prompt("How much is your meal?");
console.log("Meal two is $"+mealCost2);
var mealCost3 = prompt("How much is your meal?");
console.log("Meal three is $"+mealCost3);
var mealTotalCharge = parseInt(mealCost1)  + parseInt(mealCost2) + parseInt(mealCost3);
var serviceCharge = mealTotalCharge * 0.10;
if (mealTotalCharge < 100) {
  console.log("Your total is $"+mealTotalCharge+". You need to pay a service charge of $"+serviceCharge);
} else{
  console.log("Your total comes to $"+mealTotalCharge)
};
