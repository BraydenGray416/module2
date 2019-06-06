var pokemon = [
  {
    id: 1,
    name: "Bulbasaur",
    sprite: "250px-001Bulbasaur.png",
    type: ["Grass", "Poison"],
    bio: "Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32. Along with Charmander and Squirtle, Bulbasaur is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen."
  },
  {
    id: 2,
    name: "Ivysaur",
    sprite: "250px-002Ivysaur.png",
    type: ["Grass", "Poison"]
  },
  {
    id: 3,
    name: "Venusaur",
    sprite: "250px-003Venusaur.png",
    type: ["Grass", "Poison"]
  },
  {
    id: 4,
    name: "Charmander",
    sprite: "250px-004Charmander.png",
    type: ["Fire"]
  },
  {
    id: 5,
    name: "Charmeleon",
    sprite: "250px-005Charmeleon.png",
    type: ["Fire"]
  },
  {
    id: 6,
    name: "Charizard",
    sprite: "250px-006Charizard.png",
    type: ["Fire", "Flying"]
  },
  {
    id: 7,
    name: "Squirtle",
    sprite: "250px-007Squirtle.png",
    type: ["Water"]
  },
  {
    id: 8,
    name: "Wartortle",
    sprite: "250px-008Wartortle.png",
    type: ["Water"]
  },
  {
    id: 9,
    name: "Blastoise",
    sprite: "250px-009Blastoise.png",
    type: ["Water"]
  },
  {
    id: 10,
    name: "Caterpie",
    sprite: "250px-010Caterpie.png",
    type: ["Bug"]
  },
  {
    id: 11,
    name: "Metapod",
    sprite: "250px-011Metapod.png",
    type: ["Bug"]
  },
  {
    id: 12,
    name: "Butterfree",
    sprite: "250px-012Butterfree.png",
    type: ["Bug", "Flying"]
  },
  {
    id: 13,
    name: "Weedle",
    sprite: "250px-013Weedle.png",
    type: ["Bug", "Poison"]
  },
  {
    id: 14,
    name: "Kakuna",
    sprite: "250px-014Kakuna.png",
    type: ["Bug", "Poison"]
  },
  {
    id: 15,
    name: "Beedrill",
    sprite: "250px-015Beedrill.png",
    type: ["Bug", "Poison"]
  },
  {
    id: 16,
    name: "Pidgey",
    sprite: "250px-016Pidgey.png",
    type: ["Normal", "Flying"]
  },
  {
    id: 17,
    name: "Pidgeotto",
    sprite: "250px-017Pidgeotto.png",
    type: ["Normal", "Flying"]
  },
  {
    id: 18,
    name: "Pidgeot",
    sprite: "250px-018Pidgeot.png",
    type: ["Normal", "Flying"]
  },
  {
    id: 19,
    name: "Rattata",
    sprite: "250px-019Rattata.png",
    type: ["Normal"]
  },
  {
    id: 20,
    name: "Raticate",
    sprite: "250px-020Raticate.png",
    type: ["Normal"]
  },
  {
    id: 21,
    name: "Spearow",
    sprite: "250px-021Spearow.png",
    type: ["Normal", "Flying"]
  },
  {
    id: 22,
    name: "Fearow",
    sprite: "250px-022Fearow.png",
    type: ["Normal", "Flying"]
  },
  {
    id: 23,
    name: "Ekans",
    sprite: "250px-023Ekans.png",
    type: ["Poison"]
  },
  {
    id: 24,
    name: "Arbok",
    sprite: "250px-024Arbok.png",
    type: ["Poison"]
  },
  {
    id: 25,
    name: "Pikachu",
    sprite: "250px-025Pikachu.png",
    type: ["Electric"]
  },
  {
    id: 26,
    name: "Raichu",
    sprite: "250px-026Raichu.png",
    type: ["Electric"]
  },
  {
    id: 27,
    name: "Sandshrew",
    sprite: "250px-027Sandshrew.png",
    type: ["Ground"]
  },
  {
    id: 28,
    name: "Sandslash",
    sprite: "250px-028Sandslash.png",
    type: ["Ground"]
  },
  {
    id: 29,
    name: "Nidoran",
    sprite: "250px-029Nidoran.png",
    type: ["Poison"]
  },
  {
    id: 30,
    name: "Nidorina",
    sprite: "250px-030Nidorina.png",
    type: ["Poison"]
  },
  {
    id: 31,
    name: "Nidoqueen",
    sprite: "250px-031Nidoqueen.png",
    type: ["Poison", "Ground"]
  },
  {
    id: 32,
    name: "Nidoran",
    sprite: "250px-032Nidoran.png",
    type: ["Poison"]
  },
  {
    id: 33,
    name: "Nidorino",
    sprite: "250px-033Nidorino.png",
    type: ["Poison"]
  },
  {
    id: 34,
    name: "Nidoking",
    sprite: "250px-034Nidoking.png",
    type: ["Poison", "Ground"]
  },
  {
    id: 35,
    name: "Clefairy",
    sprite: "250px-035Clefairy.png",
    type: ["Fairy"]
  },
  {
    id: 36,
    name: "Clefable",
    sprite: "250px-036Clefable.png",
    type: ["Fairy"]
  },
  {
    id: 37,
    name: "Vulpix",
    sprite: "250px-037Vulpix.png",
    type: ["Fire"]
  },
  {
    id: 38,
    name: "Ninetales",
    sprite: "250px-038Ninetales.png",
    type: ["Fire"]
  },
  {
    id: 39,
    name: "Jigglypuff",
    sprite: "250px-039Jigglypuff.png",
    type: ["Normal", "Fairy"]
  },
  {
    id: 40,
    name: "Wigglytuff",
    sprite: "250px-040Wigglytuff.png",
    type: ["Normal", "Fairy"]
  },
  {
    id: 41,
    name: "Zubat",
    sprite: "250px-041Zubat.png",
    type: ["Poison", "Flying"]
  },
  {
    id: 42,
    name: "Golbat",
    sprite: "250px-042Golbat.png",
    type: ["Poison", "Flying"]
  },
  {
    id: 43,
    name: "Oddish",
    sprite: "250px-043Oddish.png",
    type: ["Grass", "Poison"]
  },
  {
    id: 44,
    name: "Gloom",
    sprite: "250px-044Gloom.png",
    type: ["Grass", "Poison"]
  },
  {
    id: 45,
    name: "Vileplume",
    sprite: "250px-045Vileplume.png",
    type: ["Grass", "Poison"]
  },
  {
    id: 46,
    name: "Paras",
    sprite: "250px-046Paras.png",
    type: ["Bug", "Grass"]
  },
  {
    id: 47,
    name: "Parasect",
    sprite: "250px-047Parasect.png",
    type: ["Bug", "Grass"]
  },
  {
    id: 48,
    name: "Venonat",
    sprite: "250px-048Venonat.png",
    type: ["Bug", "Poison"]
  },
  {
    id: 49,
    name: "Venomoth",
    sprite: "250px-049Venomoth.png",
    type: ["Bug", "Poison"]
  },
  {
    id: 50,
    name: "Diglett",
    sprite: "250px-050Diglett.png",
    type: ["Ground"]
  },
  {
    id: 51,
    name: "Dugtrio",
    sprite: "250px-051Dugtrio.png",
    type: ["Ground"]
  },
  {
    id: 52,
    name: "Meowth",
    sprite: "250px-052Meowth.png",
    type: ["Normal"]
  },
  {
    id: 53,
    name: "Persian",
    sprite: "250px-053Persian.png",
    type: ["Normal"]
  },
  {
    id: 54,
    name: "Psyduck",
    sprite: "250px-054Psyduck.png",
    type: ["Water"]
  },
  {
    id: 55,
    name: "Golduck",
    sprite: "250px-055Golduck.png",
    type: ["Water"]
  },
  {
    id: 56,
    name: "Mankey",
    sprite: "250px-056Mankey.png"
  },
  {
    id: 57,
    name: "Primeape",
    sprite: "250px-057Primeape.png"
  },
  {
    id: 58,
    name: "Growlithe",
    sprite: "250px-058Growlithe.png"
  },
  {
    id: 59,
    name: "Arcanine",
    sprite: "250px-059Arcanine.png"
  },
  {
    id: 60,
    name: "Poliwag",
    sprite: "250px-060Poliwag.png",
    type: ["Water"]
  },
  {
    id: 61,
    name: "Poliwhirl",
    sprite: "250px-061Poliwhirl.png",
    type: ["Water"]
  },
  {
    id: 62,
    name: "Poliwrath",
    sprite: "250px-062Poliwrath.png"
  },
  {
    id: 63,
    name: "Abra",
    sprite: "250px-063Abra.png"
  },
  {
    id: 64,
    name: "Kadabra",
    sprite: "250px-064Kadabra.png"
  },
  {
    id: 65,
    name: "Alakazam",
    sprite: "250px-065Alakazam.png"
  },
  {
    id: 66,
    name: "Machop",
    sprite: "250px-066Machop.png"
  },
  {
    id: 67,
    name: "Machoke",
    sprite: "250px-067Machoke.png"
  },
  {
    id: 68,
    name: "Machamp",
    sprite: "250px-068Machamp.png"
  },
  {
    id: 69,
    name: "Bellsprout",
    sprite: "250px-069Bellsprout.png"
  },
  {
    id: 70,
    name: "Weepinbell",
    sprite: "250px-070Weepinbell.png"
  },
  {
    id: 71,
    name: "Victreebel",
    sprite: "250px-071Victreebel.png"
  },
  {
    id: 72,
    name: "Tentacool",
    sprite: "250px-072Tentacool.png"
  },
  {
    id: 73,
    name: "Tentacruel",
    sprite: "250px-073Tentacruel.png"
  },
  {
    id: 74,
    name: "Geodude",
    sprite: "250px-074Geodude.png"
  },
  {
    id: 75,
    name: "Graveler",
    sprite: "250px-075Graveler.png"
  },
  {
    id: 76,
    name: "Golem",
    sprite: "250px-076Golem.png"
  },
  {
    id: 77,
    name: "Ponyta",
    sprite: "250px-077Ponyta.png"
  },
  {
    id: 78,
    name: "Rapidash",
    sprite: "250px-078Rapidash.png"
  },
  {
    id: 79,
    name: "Slowpoke",
    sprite: "250px-079Slowpoke.png",
    type: ["Water"]
  },
  {
    id: 80,
    name: "Slowbro",
    sprite: "250px-080Slowbro.png"
  },
  {
    id: 81,
    name: "Magnemite",
    sprite: "250px-081Magnemite.png"
  },
  {
    id: 82,
    name: "Magneton",
    sprite: "250px-082Magneton.png"
  },
  {
    id: 83,
    name: "Farfetch'd",
    sprite: "250px-083Farfetch'd.png"
  },
  {
    id: 84,
    name: "Doduo",
    sprite: "250px-084Doduo.png"
  },
  {
    id: 85,
    name: "Dodrio",
    sprite: "250px-085Dodrio.png"
  },
  {
    id: 86,
    name: "Seel",
    sprite: "250px-086Seel.png",
    type: ["Water"]
  },
  {
    id: 87,
    name: "Dewgong",
    sprite: "250px-087Dewgong.png"
  },
  {
    id: 88,
    name: "Grimer",
    sprite: "250px-088Grimer.png"
  },
  {
    id: 89,
    name: "Muk",
    sprite: "250px-089Muk.png"
  },
  {
    id: 90,
    name: "Shellder",
    sprite: "250px-090Shellder.png",
    type: ["Water"]
  },
  {
    id: 91,
    name: "Cloyster",
    sprite: "250px-091Cloyster.png"
  },
  {
    id: 92,
    name: "Gastly",
    sprite: "250px-092Gastly.png"
  },
  {
    id: 93,
    name: "Haunter",
    sprite: "250px-093Haunter.png"
  },
  {
    id: 94,
    name: "Gengar",
    sprite: "250px-094Gengar.png"
  },
  {
    id: 95,
    name: "Onix",
    sprite: "250px-095Onix.png"
  },
  {
    id: 96,
    name: "Drowzee",
    sprite: "250px-096Drowzee.png"
  },
  {
    id: 97,
    name: "Hypno",
    sprite: "250px-097Hypno.png"
  },
  {
    id: 98,
    name: "Krabby",
    sprite: "250px-098Krabby.png",
    type: ["Water"]
  },
  {
    id: 99,
    name: "Kingler",
    sprite: "250px-099Kingler.png",
    type: ["Water"]
  },
  {
    id: 100,
    name: "Voltorb",
    sprite: "250px-100Voltorb.png",
    type: ["Electric"]
  },
  {
    id: 101,
    name: "Electrode",
    sprite: "250px-101Electrode.png",
    type: ["Electric"]
  },
  {
    id: 102,
    name: "Exeggcute",
    sprite: "250px-102Exeggcute.png"
  },
  {
    id: 103,
    name: "Exeggutor",
    sprite: "250px-103Exeggutor.png"
  },
  {
    id: 104,
    name: "Cubone",
    sprite: "250px-104Cubone.png"
  },
  {
    id: 105,
    name: "Marowak",
    sprite: "250px-105Marowak.png"
  },
  {
    id: 106,
    name: "Hitmonlee",
    sprite: "250px-106Hitmonlee.png"
  },
  {
    id: 107,
    name: "Hitmonchan",
    sprite: "250px-107Hitmonchan.png"
  },
  {
    id: 108,
    name: "Lickitung",
    sprite: "250px-108Lickitung.png"
  },
  {
    id: 109,
    name: "Koffing",
    sprite: "250px-109Koffing.png"
  },
  {
    id: 110,
    name: "Weezing",
    sprite: "250px-110Weezing.png"
  },
  {
    id: 111,
    name: "Rhyhorn",
    sprite: "250px-111Rhyhorn.png"
  },
  {
    id: 112,
    name: "Rhydon",
    sprite: "250px-112Rhydon.png"
  },
  {
    id: 113,
    name: "Chansey",
    sprite: "250px-113Chansey.png"
  },
  {
    id: 114,
    name: "Tangela",
    sprite: "250px-114Tangela.png"
  },
  {
    id: 115,
    name: "Kangaskhan",
    sprite: "250px-115Kangaskhan.png"
  },
  {
    id: 116,
    name: "Horsea",
    sprite: "250px-116Horsea.png",
    type: ["Water"]
  },
  {
    id: 117,
    name: "Seadra",
    sprite: "250px-117Seadra.png",
    type: ["Water"]
  },
  {
    id: 118,
    name: "Goldeen",
    sprite: "250px-118Goldeen.png",
    type: ["Water"]
  },
  {
    id: 119,
    name: "Seaking",
    sprite: "250px-119Seaking.png",
    type: ["Water"]
  },
  {
    id: 120,
    name: "Staryu",
    sprite: "250px-120Staryu.png"
  },
  {
    id: 121,
    name: "Starmie",
    sprite: "250px-121Starmie.png"
  },
  {
    id: 122,
    name: "Mr. Mime",
    sprite: "250px-122Mr._Mime.png"
  },
  {
    id: 123,
    name: "Scyther",
    sprite: "250px-123Scyther.png"
  },
  {
    id: 124,
    name: "Jynx",
    sprite: "250px-124Jynx.png"
  },
  {
    id: 125,
    name: "Electabuzz",
    sprite: "250px-125Electabuzz.png"
  },
  {
    id: 126,
    name: "Magmar",
    sprite: "250px-126Magmar.png"
  },
  {
    id: 127,
    name: "Pinsir",
    sprite: "250px-127Pinsir.png"
  },
  {
    id: 128,
    name: "Tauros",
    sprite: "250px-128Tauros.png"
  },
  {
    id: 129,
    name: "Magikarp",
    sprite: "250px-129Magikarp.png",
    type: ["Water"]
  },
  {
    id: 130,
    name: "Gyarados",
    sprite: "250px-130Gyarados.png",
    type: ["Water"]
  },
  {
    id: 131,
    name: "Lapras",
    sprite: "250px-131Lapras.png"
  },
  {
    id: 132,
    name: "Ditto",
    sprite: "250px-132Ditto.png"
  },
  {
    id: 133,
    name: "Eevee",
    sprite: "250px-133Eevee.png"
  },
  {
    id: 134,
    name: "Vaporeon",
    sprite: "250px-134Vaporeon.png",
    type: ["Water"]
  },
  {
    id: 135,
    name: "Jolteon",
    sprite: "250px-135Jolteon.png",
    type: ["Electric"]
  },
  {
    id: 136,
    name: "Flareon",
    sprite: "250px-136Flareon.png"
  },
  {
    id: 137,
    name: "Porygon",
    sprite: "250px-137Porygon.png"
  },
  {
    id: 138,
    name: "Omanyte",
    sprite: "250px-138Omanyte.png"
  },
  {
    id: 139,
    name: "Omastar",
    sprite: "250px-139Omastar.png"
  },
  {
    id: 140,
    name: "Kabuto",
    sprite: "250px-140Kabuto.png"
  },
  {
    id: 141,
    name: "Kabutops",
    sprite: "250px-141Kabutops.png"
  },
  {
    id: 142,
    name: "Aerodactyl",
    sprite: "250px-142Aerodactyl.png"
  },
  {
    id: 143,
    name: "Snorlax",
    sprite: "250px-143Snorlax.png"
  },
  {
    id: 144,
    name: "Articuno",
    sprite: "250px-144Articuno.png"
  },
  {
    id: 145,
    name: "Zapdos",
    sprite: "250px-145Zapdos.png"
  },
  {
    id: 146,
    name: "Moltres",
    sprite: "250px-146Moltres.png"
  },
  {
    id: 147,
    name: "Dratini",
    sprite: "250px-147Dratini.png"
  },
  {
    id: 148,
    name: "Dragonair",
    sprite: "250px-148Dragonair.png"
  },
  {
    id: 149,
    name: "Dragonite",
    sprite: "250px-149Dragonite.png"
  },
  {
    id: 150,
    name: "Mewtwo",
    sprite: "250px-150Mewtwo.png"
  },
  {
    id: 151,
    name: "Mew",
    sprite: "250px-151Mew.png"
  }
];
var pageContainer = document.getElementById('pageContainer');


function showPokemon() {

pageContainer.innerHTML += '<div id="pokemonList" class="row border border-danger text-center"></div>';


  for (var i = 0; i < pokemon.length; i++) {
    var pokeList = pokemon[i];

    var pokeCard = '<div class="col-12 col-sm-6 col-md-2 mb-3 mt-3 text-center">';
            pokeCard += '<div class="pokeThumb pokeThumb2 card h-100 border-dark" onclick="showMorePoke('+pokeList.id+');">';
                pokeCard += '<div class="card-body">'
                    pokeCard += '<img src="assets/'+pokeList.sprite+'" class="card-img-top" alt"">';
                    pokeCard += '<h5 class="card-title">'+pokeList.name+'</h5>'
                pokeCard += '</div>';
            pokeCard += '</div>';
        pokeCard += '</div>';

        document.getElementById('pokemonList').innerHTML += pokeCard;
  }


}

function showMorePoke(pokeNumber){
  var singlePoke;
  console.log("You have clicked on number ");
  for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].id === pokeNumber) {
      singlePoke = pokemon[i]
      break;
    }
  }
  document.getElementById('pokeImage').src = 'assets/'+singlePoke.sprite;
  document.getElementById('pokeName').innerText = singlePoke.name;
  document.getElementById('pokeId').innerText = singlePoke.id;
  document.getElementById('pokeBio').innerText = singlePoke.bio;
  document.getElementById('pokeType').innerHTML = '';
  var typeColour;
  for (var i = 0; i < singlePoke.type.length; i++) {
    // var typeColour = getTypeColour(singlePoke.type[i]);

      document.getElementById('pokeType').innerHTML += '<span class="badge badge-pill badge-danger">'+singlePoke.type[i]+'</span>';
  }

  document.getElementById('pokePopUp').style.display= "flex";
  document.body.style.overflow = "hidden";

  document.getElementById('close').onclick = function(){
  document.getElementById('pokePopUp').style.display= "none";
  document.body.style.overflow = "scroll";
}

}

function typeClick (pokemonType){
  document.getElementById('pokemonList').innerHTML = '';
  for (var a = 0; a < pokemon.length; a++) {
    var pokeList = pokemon[a];
    if (pokeList.type.includes(pokemonType)) {
        document.getElementById('pokemonList').innerHTML +=
            pokeCard = '<div class="col-12 col-sm-6 col-md-2 mb-3 mt-3 text-center">';
                pokeCard += '<div class="pokeThumb pokeThumb2 card h-100 border-dark" onclick="showMorePoke('+pokeList.id+')">';
                    pokeCard += '<div class="card-body">'
                        pokeCard += '<img src="assets/'+pokeList.sprite+'" class="card-img-top" alt"">';
                        pokeCard += '<h5 class="card-title">'+pokeList.name+'</h5>'
                    pokeCard += '</div>';
                pokeCard += '</div>';
            pokeCard += '</div>';

            document.getElementById('pokemonList').innerHTML += pokeCard;
    }
  }

}

function showAll(){
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon();
}




showPokemon();
