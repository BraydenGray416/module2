var pokemon = [
  {
    id: 001,
    name: "Bulbasaur",
    sprite: "250px-001Bulbasaur.png"
  },
  {
    id: 002,
    name: "Ivysaur",
    sprite: "250px-002Ivysaur.png"
  },
  {
    id: 003,
    name: "Venusaur",
    sprite: "250px-003Venusaur.png"
  },
  {
    id: 004,
    name: "Charmander",
    sprite: "250px-004Charmander.png"
  },
  {
    id: 005,
    name: "Charmeleon",
    sprite: "250px-005Charmeleon.png"
  },
  {
    id: 006,
    name: "Charizard",
    sprite: "250px-006Charizard.png"
  },
  {
    id: 007,
    name: "Squirtle",
    sprite: "250px-007Squirtle.png"
  },
  {
    id: 008,
    name: "Wartortle",
    sprite: "250px-008Wartortle.png"
  },
  {
    id: 009,
    name: "Blastoise",
    sprite: "250px-009Blastoise.png"
  },
  {
    id: 010,
    name: "Caterpie",
    sprite: "250px-010Caterpie.png"
  },
  {
    id: 011,
    name: "Metapod",
    sprite: "250px-011Metapod.png"
  },
  {
    id: 012,
    name: "Butterfree",
    sprite: "250px-012Butterfree.png"
  },
  {
    id: 013,
    name: "Weedle",
    sprite: "250px-013Weedle.png"
  },
  {
    id: 014,
    name: "Kakuna",
    sprite: "250px-014Kakuna.png"
  },
  {
    id: 015,
    name: "Beedrill",
    sprite: "250px-015Beedrill.png"
  },
  {
    id: 016,
    name: "Pidgey",
    sprite: "250px-016Pidgey.png"
  },
  {
    id: 017,
    name: "Pidgeotto",
    sprite: "250px-017Pidgeotto.png"
  },
  {
    id: 018,
    name: "Pidgeot",
    sprite: "250px-018Pidgeot.png"
  },
  {
    id: 019,
    name: "Rattata",
    sprite: "250px-019Rattata.png"
  },
  {
    id: 020,
    name: "Raticate",
    sprite: "250px-020Raticate.png"
  },
  {
    id: 021,
    name: "Spearow",
    sprite: "250px-021Spearow.png"
  },
];
var pageContainer = document.getElementById('pageContainer');


function showPokemon() {

pageContainer.innerHTML += '<div id="pokemonList" class="row border border-danger text-center"></div>';


  for (var i = 0; i < pokemon.length; i++) {
    var pokeList = pokemon[i];

    var pokeCard = '<div class="col-12 col-sm-6 col-md-2 mb-3 text-center">';
            pokeCard += '<div class="movieThumb movieThumb2 card h-100 border-dark">';
                pokeCard += '<div class="card-body">'
                    pokeCard += '<img src="assets/'+pokeList.sprite+'" class="card-img-top" alt""';
                    pokeCard += '<h5 class="card-title">'+pokeList.name+'</h5>'
                pokeCard += '</div>';
            pokeCard += '</div>';
        pokeCard += '</div>';

        document.getElementById('pokemonList').innerHTML += pokeCard;
  }


}

showPokemon();
