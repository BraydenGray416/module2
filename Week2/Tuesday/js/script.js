var shoppingList = ["Apples", "Bananas", "Pears", "Kiwi Fruit", "Oranges", "Dates"];

document.write("<h1>This is my shopping list </h1>");

// document.write("<ul>");
//     document.write("<li>"+shoppingList[0]+"</li>");
//     document.write("<li>"+shoppingList[1]+"</li>");
//     document.write("<li>"+shoppingList[2]+"</li>");
//     document.write("<li>"+shoppingList[3]+"</li>");
//     document.write("<li>"+shoppingList[4]+"</li>");
// document.write("</ul>");

document.write("<ul>");
    for (var i = 0; i < shoppingList.length; i++) {
        document.write("<li>"+shoppingList[i]+"</li>")
    };
document.write("</ul>");

var days = ["Monday", "Tuesday", "Wednesday"]
var tasks = [
  ["Cleaning", "Shopping"],
  ["Homework", "something else"],
  ["Work", "Gym"]
]
console.log(days);
console.log(tasks);

document.write("<h2>Daily Tasks</h2>");
document.write("<ul>");
    for (var i = 0; i < days.length; i++) {
      document.write("<li>" + days[i] + "</li>");
      console.log(tasks[i]);
    }
    document.write("</ul>");
