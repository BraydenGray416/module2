var movies = [
  {
    id: 1,
    title: "The Amazing Spider-Man",
    year: 2012,
    directors: ["Marc Webb"],
    bio: "Abandoned by his parents and raised by an aunt and uncle, teenager Peter Parker (Andrew Garfield), AKA Spider-Man, is trying to sort out who he is and exactly what his feelings are for his first crush, Gwen Stacy (Emma Stone). When Peter finds a mysterious briefcase that was his father's, he pursues a quest to solve his parents' disappearance. His search takes him to Oscorp and the lab of Dr. Curt Connors (Rhys Ifans), setting him on a collision course with Connors' alter ego, the Lizard.",
    movieLength: 153,
    poster: "spiderman1.jpeg",
    genre: ["Action", "Thriller", "Fantasy", "Superhero", "Science fiction", "Action/Adventure", "Adventure", "Drama"],
    actors: ["Andrew Garfield"]
  },
  {
    id: 2,
    title: "The Amazing Spider-Man 2",
    year: 2014,
    directors: ["Marc Webb"],
    bio: "Confident in his powers as Spider-Man, Peter Parker (Andrew Garfield) embraces his new role as a hero and spends time with Gwen Stacy (Emma Stone) in between protecting New York from criminals. However, his greatest battle yet is about to begin. With the emergence of Electro (Jamie Foxx), Peter must confront an enemy far more powerful than he is. And when his old friend Harry Osborn (Dane DeHaan) returns, Peter comes to realize that all his enemies have one thing in common: Oscorp.",
    movieLength: 142,
    poster: "spiderman2.jpg",
    genre: ["Action", "Superhero", "Fantasy", "Adventure", "Science fiction"],
    actors: ["Andrew Garfield"]
  },
  {
    id: 3,
    title: "Spider-Man: Homecoming",
    year: 2017,
    directors: ["Jon Watts"],
    bio: "Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.",
    movieLength: 133,
    poster: "spiderman3.jpg",
    genre: ["Action", "Superhero", "Science fiction", "Comedy", "Adventure", "Fantasy"],
    actors: ["Tom Holland"]
  },
  {
    id: 4,
    title: "Spider-Man: Far From Home",
    year: 2019,
    directors: ["Jon Watts"],
    bio: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    movieLength: 135,
    poster: "spiderman4.jpeg",
    genre: ["Superhero", "Comedy", "Fantasy", "Science fiction", "Adventure"],
    actors: ["Tom Holland"]
  },
  {
    id: 5,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    directors: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
    bio: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from another dimensions to stop a threat for all realities.",
    movieLength: 116,
    poster: "spiderman5.png",
    genre: ["Animation", "Adventure", "Science fiction", "Action", "Animated cartoon", "Comic science fiction", "Comedy", "Fantasy", "Superhero", "Family"],
    actors: ["Jake Johnson", "Shameik Moore", "Hailee Steinfeld", "John Mulaney", "Nicolas Cage", "Kimiko Glenn", "Chris Pine"]
  },
  {
    id: 6,
    title: "Spider-Man",
    year: 2002,
    directors: ["Sam Raimi"],
    bio: '"Spider-Man" centers on student Peter Parker (Tobey Maguire) who, after being bitten by a genetically-altered spider, gains superhuman strength and the spider-like ability to cling to any surface. He vows to use his abilities to fight crime, coming to understand the words of his beloved Uncle Ben: "With great power comes great responsibility."',
    movieLength: 121,
    poster: "spiderman6.jpg",
    genre: ["Action", "Adventure", "Fantasy", "Superhero", "Science fiction"],
    actors: ["Tobey Maguire"]
  },
  {
    id: 7,
    title: "Spider-Man 2",
    year: 2004,
    directors: ["Sam Raimi"],
    bio: "When a failed nuclear fusion experiment results in an explosion that kills his wife, Dr. Otto Octavius (Alfred Molina) is transformed into Dr. Octopus, a cyborg with deadly metal tentacles. Doc Ock blames Spider-Man (Tobey Maguire) for the accident and seeks revenge. Meanwhile, Spidey's alter ego, Peter Parker, faces fading powers and self-doubt. Complicating matters are his best friend's (James Franco) hatred for Spider-Man and his true love's (Kirsten Dunst) sudden engagement to another man.",
    movieLength: 135,
    poster: "spiderman7.jpg",
    genre: ["Action", "Adventure", "Superhero", "Science fiction"],
    actors: ["Tobey Maguire"]
  },
  {
    id: 8,
    title: "Spider-Man 3",
    year: 2007,
    directors: ["Sam Raimi"],
    bio: "Peter Parker (Tobey Maguire) and M.J. (Kirsten Dunst) seem to finally be on the right track in their complicated relationship, but trouble looms for the superhero and his lover. Peter's Spider-Man suit turns black and takes control of him, not only giving Peter enhanced power but also bringing out the dark side of his personality. Peter must overcome the suit's influence as two supervillains, Sandman and Venom, rise up to destroy him and all those he holds dear.",
    movieLength: 156,
    poster: "spiderman8.jpg",
    genre: ["Action", "Adventure", "Science fiction", "Superhero", "Thriller"],
    actors: ["Tobey Maguire"]
  },
  {
    id: 9,
    title: "Venom",
    year: 2018,
    directors: ["Ruben Fleischer"],
    bio: "Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.",
    movieLength: 140,
    poster: "spiderman9.png",
    genre: ["Action", "Thriller", "Science fiction", "Horror", "Superhero"],
    actors: ["There ain't none fam"]
  },
  {
    id: 10,
    title: "Captain America: Civil War",
    year: 2016,
    directors: ["Joe Russo", "Anthony Russo"],
    bio: "Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side.",
    movieLength: 148,
    poster: "spiderman10.jpg",
    genre: ["Action", "Adventure", "Thriller", "Superhero", "Science fiction"],
    actors: ["Tom Holland"]
  },
  {
    id: 11,
    title: "Avengers: Infinity War",
    year: 2018,
    directors: ["Joe Russo", "Anthony Russo"],
    bio: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
    movieLength: 160,
    poster: "spiderman11.jpg",
    genre: ["Action", "Superhero", "Fantasy", "Adventure", "Science fiction"],
    actors: ["Tom Holland"]
  },
  {
    id: 12,
    title: "Avengers: Endgame",
    year: 2019,
    directors: ["Joe Russo", "Anthony Russo"],
    bio: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
    movieLength: 182,
    poster: "spiderman12.jpg",
    genre: ["Action", "Adventure", "Fantasy", "Superhero", "Science fiction"],
    actors: ["Tom Holland"]
  }
];

var maxNumberOnScreen = 8;
var currentTab = 'Movies';

var pageTabs = $('.page-tab');
pageTabs.click(function(){
    pageTabs.removeClass('active');
    $(this).addClass('active');
    console.log($(this).text());
    changeTabs($(this).text());
})

function changeTabs(tabName){
      if (currentTab === tabName) {

      }else {
        currentTab = tabName;
        $('#pageContainer').html('');

        $('#pageContainer').html("<h1>"+currentTab+"</h1>");
      }
}



// var pageTabs = document.getElementsByClassName('page-tab');
// for (var i = 0; i < pageTabs.length; i++) {
//   pageTabs[i].onclick = function(){
//     // console.log("you have clicked on a tab");
//     for (var j = 0; j < pageTabs.length; j++) {
//         if(pageTabs[j].classList.contains('active')){
//             pageTabs[j].classList.remove('active');
//             break;
//         }
//     }
//     if(!this.classList.contains('active')){
//         this.classList.add('active');
//     }
//     changeTab(this.innerText)
//   }
// }
