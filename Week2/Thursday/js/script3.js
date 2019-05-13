var bigElementFinder = [1, 5, 2000, 300, 80, 3500];
var biggestElement = 0;
function addNumberBtn(){
  var newNumber = parseInt(prompt("Add a big number"));
  if (newNumber > 0) {
        bigElementFinder.push(newNumber);
  } else {
      console.log("Please make sure you input a value");
  }
 for (var i = 0; i < bigElementFinder.length; i++) {
    if (biggestElement < bigElementFinder[i]) {
      biggestElement = bigElementFinder[i];
    };
 };
 console.log(biggestElement);
}
