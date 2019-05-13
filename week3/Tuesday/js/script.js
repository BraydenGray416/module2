var movies = [
  {
    id: 1,
    title: "The Amazing Spider-Man",
    year: 2012,
    directors: ["Marc Webb"],
    bio: "Peter was abandoned at a young age and has to stop a doctor from being lizard man",
    length: 153,
    poster: "spiderman1.jpeg"
  },
  {
    id: 2,
    title: "The Amazing Spider-Man 2",
    year: 2014,
    directors: ["Marc Webb"],
    bio: "Peter has to fight and help electric man",
    length: 142,
    poster: "spiderman2.jpg"
  },
  {
    id: 3,
    title: "Spider-Man: Homecoming",
    year: 2017,
    directors: ["Jon Watts"],
    bio: "Peter has to fight his new girlfriends dad",
    length: 133,
    poster: "spiderman3.jpg"
  },
  {
    id: 4,
    title: "Spider-Man: Far From Home",
    year: 2019,
    directors: ["Jon Watts"],
    bio: "Peter goes to europe and something about the multiverse (TBC)",
    length: 135,
    poster: "spiderman4.jpeg"
  },
  {
    id: 5,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    directors: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
    bio: "Many spider men intro to Miles ",
    length: 116,
    poster: "spiderman5.png"
  }
]
console.log(movies);
var moviesList = document.getElementById("moviesList");

for (var i = 0; i < movies.length; i++) {
    // console.log(movies[i]);
    var movie = movies[i];
    // console.log(movie.title);
    // document.getElementById("moviesList").innerHTML += "<p>"+movie.title+"</p>"

    // // Way #1
    // moviesList.innerHTML += '<div class="col-12 col-sm-6 col-md-4">';
    //     moviesList.innerHTML += '<div class="card">';
    //
    //     moviesList.innerHTML += '</div>'
    // moviesList.innerHTML +='</div>'

    // // Way #2
    // var movieCard = '<div class="col-12 col-sm-6 col-md-4">';
    //     movieCard += '<div class="card">';
    //         movieCard += '<div class="card-body">';
    //             movieCard += '<h5 class="card-title">'+movie.title+'</h5>'
    //         movieCard +='</div>'
    //     movieCard += '</div>'
    // movieCard += '</div>';

    // console.log(movieCard);
    // moviesList.innerHTML += movieCard;

    // // Way #3
    var columns = document.createElement('div');
    var columnsAttr = document.createAttribute("class");
    columnsAttr.value = 'col-12 col-sm-6 col-md-4';
    columns.setAttributeNode(columnsAttr);

    var card = document.createElement('div');
    var cardAttr = document.createAttribute('class');
    cardAttr.value = 'card';
    card.setAttributeNode(cardAttr);

    var cardBody = document.createElement('div')
    var cardBodyAttr = document.createAttribute('class');
    cardBodyAttr.value = 'card-body';
    cardBody.setAttributeNode(cardBodyAttr);

    var cardTitle = document.createElement('h5');
    var cardTitleAttr = document.createAttribute('class');
    cardTitleAttr.value = 'card-title';
    cardTitle.setAttributeNode(cardTitleAttr);
    var cardTitleText = document.createTextNode(movie.title);

    cardTitle.appendChild(cardTitleText);
    cardBody.appendChild(cardTitle);
    card.appendChild(cardBody);
    columns.appendChild(card);

    moviesList.appendChild(columns);





}
