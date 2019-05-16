var movies = [
  {
    id: 1,
    title: "The Amazing Spider-Man",
    year: 2012,
    directors: ["Marc Webb"],
    bio: "Abandoned by his parents and raised by an aunt and uncle, teenager Peter Parker (Andrew Garfield), AKA Spider-Man, is trying to sort out who he is and exactly what his feelings are for his first crush, Gwen Stacy (Emma Stone). When Peter finds a mysterious briefcase that was his father's, he pursues a quest to solve his parents' disappearance. His search takes him to Oscorp and the lab of Dr. Curt Connors (Rhys Ifans), setting him on a collision course with Connors' alter ego, the Lizard.",
    movieLength: 153,
    poster: "spiderman1.jpeg",
    genre: ["Action", "Thriller", "Fantasy", "Superhero", "Science fiction", "Action/Adventure", "Adventure", "Drama"]
  },
  {
    id: 2,
    title: "The Amazing Spider-Man 2",
    year: 2014,
    directors: ["Marc Webb"],
    bio: "Confident in his powers as Spider-Man, Peter Parker (Andrew Garfield) embraces his new role as a hero and spends time with Gwen Stacy (Emma Stone) in between protecting New York from criminals. However, his greatest battle yet is about to begin. With the emergence of Electro (Jamie Foxx), Peter must confront an enemy far more powerful than he is. And when his old friend Harry Osborn (Dane DeHaan) returns, Peter comes to realize that all his enemies have one thing in common: Oscorp.",
    movieLength: 142,
    poster: "spiderman2.jpg",
    genre: ["Action", "Superhero", "Fantasy", "Adventure", "Science fiction"]
  },
  {
    id: 3,
    title: "Spider-Man: Homecoming",
    year: 2017,
    directors: ["Jon Watts"],
    bio: "Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.",
    movieLength: 133,
    poster: "spiderman3.jpg",
    genre: ["Action", "Superhero", "Science fiction", "Comedy", "Adventure", "Fantasy"]
  },
  {
    id: 4,
    title: "Spider-Man: Far From Home",
    year: 2019,
    directors: ["Jon Watts"],
    bio: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    movieLength: 135,
    poster: "spiderman4.jpeg",
    genre: ["Superhero", "Comedy", "Fantasy", "Science fiction", "Adventure"]
  },
  {
    id: 5,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    directors: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
    bio: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from another dimensions to stop a threat for all realities.",
    movieLength: 116,
    poster: "spiderman5.png",
    genre: ["Animation", "Adventure", "Science fiction", "Action", "Animated cartoon", "Comic science fiction", "Comedy", "Fantasy", "Superhero", "Family"]
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
    var genreClass = getGenreColour(movie.genre[0]);
    // console.log(movie.genre[0]);
    // if (movie.genre[0] === "Action") {
    //   genreClass = "border-danger"
    // } else if (movie.genre[0] === "Superhero") {
    //   genreClass = "border-primary"
    // } else if (movie.genre[0] === "Animation") {
    //   genreClass = "border-dark"
    // } else {
    //   genreClass = "border-secondary"
    // }


    var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
        movieCard += '<div class="movieThumb card border-' + genreClass + ' " onclick="showMoreMovie('+movie.id+');">';
        // movieCard += '<div class="movieThumb movieThumb2 card ' + genreClass + ' " data-id="'+movie.id+'"">';
            movieCard += '<img src="images/posters/'+movie.poster+'" class="card-img-top" alt="">'
            movieCard += '<div class="card-body">';
                movieCard += '<h5 class="card-title">'+movie.title+'</h5>'
            movieCard +='</div>'
        movieCard += '</div>'
    movieCard += '</div>';

    // console.log(movieCard);
    moviesList.innerHTML += movieCard;

    // // Way #3
    // var columns = document.createElement('div');
    // var columnsAttr = document.createAttribute("class");
    // columnsAttr.value = 'col-12 col-sm-6 col-md-4';
    // columns.setAttributeNode(columnsAttr);
    //
    // var card = document.createElement('div');
    // var cardAttr = document.createAttribute('class');
    // cardAttr.value = 'card';
    // card.setAttributeNode(cardAttr);
    //
    // var cardBody = document.createElement('div')
    // var cardBodyAttr = document.createAttribute('class');
    // cardBodyAttr.value = 'card-body';
    // cardBody.setAttributeNode(cardBodyAttr);
    //
    // var cardTitle = document.createElement('h5');
    // var cardTitleAttr = document.createAttribute('class');
    // cardTitleAttr.value = 'card-title';
    // cardTitle.setAttributeNode(cardTitleAttr);
    // var cardTitleText = document.createTextNode(movie.title);
    //
    // cardTitle.appendChild(cardTitleText);
    // cardBody.appendChild(cardTitle);
    // card.appendChild(cardBody);
    // columns.appendChild(card);
    //
    // moviesList.appendChild(columns);




}


function showMoreMovie(movieNumber){
  var sungleMovie;
  // console.log("You have clicked on a movie");
  for (var i = 0; i < movies.length; i++) {
      if (movies[i].id === movieNumber){
        singleMovie = movies[i];
        break;
      }
  }
  document.getElementById('posterImage').src = 'images/posters/'+singleMovie.poster;
  document.getElementById('movieTitle').innerText = singleMovie.title;
  document.getElementById('movieYear').innerText = singleMovie.year;
  document.getElementById('movieDirectors').innerHTML = '';
  for (var i = 0; i < singleMovie.directors.length; i++) {
      document.getElementById('movieDirectors').innerHTML += '<li class="list-inline-item">'+singleMovie.directors[i]+'</li>';
  }
  document.getElementById('movieBio').innerText = singleMovie.bio;
  document.getElementById('movieLength').innerText = singleMovie.movieLength;
  document.getElementById('movieGenre').innerHTML = '';
  var genreColour;
  for (var i = 0; i < singleMovie.genre.length; i++) {
    var genreColour = getGenreColour(singleMovie.genre[i]);
    // if (singleMovie.genre[i] === 'Animation') {
    //   genreColour = 'badge-danger';
    // } else if (singleMovie.genre[i] === 'Adventure') {
    //   genreColour = 'badge-primary';
    // }else if (singleMovie.genre[i] === 'Science fiction') {
    //   genreColour = 'badge-secondary';
    // }else if (singleMovie.genre[i] === 'Action') {
    //   genreColour = 'badge-success';
    // }
    // else if (singleMovie.genre[i] === 'Animated cartoon') {
    //   genreColour = 'badge-warning';
    // }
    // else if (singleMovie.genre[i] === 'Comic science fiction') {
    //   genreColour = 'badge-info';
    // }
    // else if (singleMovie.genre[i] === 'Comedy') {
    //   genreColour = 'badge-dark';
    // }
    // else if (singleMovie.genre[i] === 'Fantasy') {
    //   genreColour = 'badge-light';
    // }
    // else if (singleMovie.genre[i] === 'Superhero') {
    //   genreColour = 'badge-purple';
    // }else if (singleMovie.genre[i] === 'Family') {
    //   genreColour = 'badge-pink';
    // }else {
    //   genreColour = 'badge-orange';
    // }
      document.getElementById('movieGenre').innerHTML += '<span class="badge badge-pill badge-'+genreColour+'">'+singleMovie.genre[i]+'</span>';
  }







  document.getElementById('moviePopUp').style.display= "flex";
  document.body.style.overflow = "hidden";
}

var movieThumbnails = document.getElementsByClassName('movieThumb2');
for (var i = 0; i < movieThumbnails.length; i++) {
  // console.log(movieThumbnails[i]);
  // console.log(movieThumbnails[i].dataset.id);
  // movieThumbnails[i].onclick = showMoreMovie;
var id = parseInt(movieThumbnails[i].dataset.id);
  // console.log(id);
  movieThumbnails[i].onclick = function(){
      var id = parseInt(this.dataset.id);
    showMoreMovie(id);
  };

}

document.getElementById('close').onclick = function(){
  document.getElementById('moviePopUp').style.display= "none";
  document.body.style.overflow = "scroll";
};





function getGenreColour(genre){
  if (genre === 'Animation') {
    return 'dark';
  } else if (genre === 'Adventure') {
    return 'success';
  }else if (genre === 'Science fiction') {
    return 'secondary';
  }else if (genre === 'Action') {
    return 'danger';
  }
  else if (genre === 'Animated cartoon') {
    return 'warning';
  }
  else if (genre === 'Comic science fiction') {
    return 'info';
  }
  else if (genre === 'Comedy') {
    return 'purple';
  }
  else if (genre === 'Fantasy') {
    return 'light';
  }
  else if (genre === 'Superhero') {
    return 'primary';
  }else if (genre === 'Family') {
    return 'pink';
  }else {
    return 'orange';
  }
}
