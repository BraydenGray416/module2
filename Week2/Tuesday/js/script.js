var shoppingList = ["Apples", "Bananas", "Pears", "Kiwi Fruit", "Oranges", "Dates"];
console.log(shoppingList);

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
        console.log(shoppingList[i]);
        document.write("<li>"+shoppingList[i]+"</li>")
    };



document.write("</ul>");
