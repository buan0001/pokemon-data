"use strict";

window.addEventListener("load", start);

async function start() {
  const pokemons = await getPokemons("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
  // const pokemon = await getMudkip("https://raw.githubusercontent.com/buan0001/pokemon-data/main/mudkip.json");
  // const pokemon = await getPokemon("mudkip.json");

  // LOOP!
  // pokemons.forEach(showPokemon)

  pokemons.sort(compareDexIndex);

  for (const pokemon of pokemons) {
    showPokemon(pokemon);
  }
}

function compareDexIndex(pokemonA, pokemonB) {
  return pokemonA.dexindex - pokemonB.dexindex;
}

async function getPokemons(pokemon) {
  const response = await fetch(pokemon);
  const data = await response.json();
  return data;
}

function showPokemon(pokemon) {
  let pokemonType;
  if (pokemon.type.constructor === Array) {
    pokemonType = pokemon.type[0].toLowerCase();
  } else if (pokemon.type.includes(",")) {
    pokemonType = pokemon.type.toLowerCase().split(",")[0];
  } else if (pokemon.type.includes("/")) {
    pokemonType = pokemon.type.toLowerCase().split("/")[0];
  } else if (pokemon.type.includes("+")) {
    pokemonType = pokemon.type.toLowerCase().split(" ")[0];}
  else {
    pokemonType = pokemon.type.toLowerCase();
  }

  const myPokemon =
    /*html*/
    `<article class="grid-item ${pokemonType}">
    <img src="${pokemon.image}">
    <li>Name: ${pokemon.name}</li>
    <li>Dexindex: ${pokemon.dexindex} </li>
    <li>Type: ${pokemon.type.substring(0, 1).toUpperCase() + pokemon.type.substring(1)}</li> 
  </article>`;

  document.querySelector("#pokemon").insertAdjacentHTML("beforeend", myPokemon);
  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);
  document.querySelector("#pokemon article:last-child").addEventListener("mouseenter", giveEnterAnimation);
  document.querySelector("#pokemon article:last-child").addEventListener("mouseleave", giveLeaveAnimation);

  function pokemonClicked() {
    clickPokemon(pokemon);
  }

  function clickPokemon() {
    pokemonPretty(pokemon);
    
    const newPokemon =
      /*html*/
      `<article class=>
    <img src="${pokemon.image}">
    <li>Name: ${pokemon.name}</li>
  <li>Description: ${pokemon.description} </li>  
  <li>Ability: ${pokemon.ability} </li>
  <li>Footprint: <img id="footprint" src="${pokemon.footprint}"> </li>
  <li>Dexindex: ${pokemon.dexindex} </li>
  <li>Type: ${pokemon.type.substring(0, 1).toUpperCase() + pokemon.type.substring(1)}</li> 
  <li>Subtype: ${pokemon.subtype}</li>
  <li>Weakness: ${pokemon.weaknesses} </li> 
  <li>Gender: ${pokemon.gender} </li>
  <li>Weight: ${pokemon.weight} </li> 
  <li>Height: ${pokemon.height} </li> 
  <li>Generation: ${pokemon.generation} </li> 
  <li>Game version: ${pokemon.spilversion}</li>
  <li>Evolution: ${pokemon.canEvolve}</li>  
  <li>HP: ${pokemon.statsHP}</li>
  <li>Attack: ${pokemon.statsAttack}</li>  
  <li>Defence: ${pokemon.statsDefence} </li> 
  <li>Special attack: ${pokemon.statsSpecialAttack}</li>
  <li>Special defence: ${pokemon.statsSpecialDefence} </li>
  <li>Speed: ${pokemon.statsSpeed} </li>
  </article>
  <form method="dialog">
  <button>Close</button>
  </form>`;
    document.querySelector("#details").showModal();
    document.querySelector("#details").innerHTML = newPokemon;
    removeType();
    document.querySelector("#details").classList.add(pokemonType);
    document.querySelector("#details").scrollTo({ top: 0 });
  }

  function giveLeaveAnimation() {
    // console.log(this)
    this.classList.remove("onHover");
    this.offsetLeft;
    this.classList.add("offHover");
  }
  function giveEnterAnimation() {
    console.log(pokemonType);
    this.classList.remove("offHover");
    this.offsetLeft;
    this.classList.add("onHover");
  }
}

function pokemonPretty(pokemon) {
  if (pokemon.canEvolve) {
    pokemon.canEvolve = "This pokemon can evolve!";
  } else {
    pokemon.canEvolve = "This pokemon can't evolve :(";
  }
  if ((pokemon.subtype = "null")) {
    pokemon.subtype = "None";
  }
  if (pokemon.gender = "undefined"){pokemon.gender = "Unknown"}

  return pokemon.canEvolve, pokemon.subtype;
}

function removeType() {
  const type = document
    .querySelector("#details")
    .classList.remove("water", "fighting", "normal", "psychich", "grass", "sun", "dragon", "electric", "ground", "fire", "ghost", "psychic", "dark", "bug", "fairy");
  return type;
}
