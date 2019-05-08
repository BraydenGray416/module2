var items = [];

function addToList(){
  var newItem = prompt("What are you wanting to add to the list?");
  if (newItem.length > 0) {
        document.getElementById("List").innerHTML += "<li>" + newItem + "</li>";
        items.push(newItem);
        console.log(items);
  } else {
      console.log("Please make sure you input a value");
  }
};
