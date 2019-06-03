var ingredients = [
  {
    id: 1,
    ingredient: "Bottom bun 1",
    image: "bun1-bottom.png"
  },
  {
    id: 2,
    ingredient: "Top bun 1",
    image: "bun1-top.png"
  },
  {
    id: 3,
    ingredient: "Bottom bun 2",
    image: "bun2-bottom.png"
  },
  {
    id: 4,
    ingredient: "Top bun 2",
    image: "bun2-top.png"
  },
  {
    id: 5,
    ingredient: "Bottom bun 3",
    image: "bun3-bottom.png"
  },
  {
    id: 6,
    ingredient: "Top bun 3",
    image: "bun3-top.png"
  },
  {
    id: 7,
    ingredient: "Cheese 1",
    image: "cheese1.png"
  },
  {
    id: 8,
    ingredient: "Cheese 2",
    image: "cheese2.png"
  },
  {
    id: 9,
    ingredient: "Cheese 3",
    image: "cheese3.png"
  },
  {
    id: 10,
    ingredient: "Lettuce",
    image: "lettuce.png"
  },
  {
    id: 11,
    ingredient: "Meat 1",
    image: "meat1.png"
  },
  {
    id: 12,
    ingredient: "Meat 1",
    image: "meat2.png"
  },
  {
    id: 13,
    ingredient: "Meat 3",
    image: "meat3.png"
  },
  {
    id: 14,
    ingredient: "Onion",
    image: "onion.png"
  },
  {
    id: 15,
    ingredient: "Tomato",
    image: "tomato.png"
  }
];

function showIngredients(){
  // console.log("showIngredients");
  for (var i = 0; i < ingredients.legth; i++) {
      var food = ingredients[i];


      $('#ingredientsList').innerHTML += food;

    }
};

showIngredients();
