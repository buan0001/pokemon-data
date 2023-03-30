"use strict";

window.addEventListener("load", start);

async function start() {
  // Get and parse JSON data
  const pokemons = await getPokemons("https://cederdorff.github.io/dat-js/05-data/pokemons.json");

  // Sort data by dexindex
  pokemons.sort(compareDexIndex);

  // Add every pokemon from the array to the page
  for (const pokemon of pokemons) {
    showPokemon(pokemon);
  }
}

async function getPokemons(pokemon) {
  const response = await fetch(pokemon);
  const data = await response.json();
  return data;
}

function compareDexIndex(pokemonA, pokemonB) {
  return pokemonA.dexindex - pokemonB.dexindex;
}

function showPokemon(pokemon) {
  // Split pokemon type properly in order to add color classes later
  let pokemonType;
  if (pokemon.type.constructor === Array) {
    pokemonType = pokemon.type[0].toLowerCase();
  } else if (pokemon.type.includes(",")) {
    pokemonType = pokemon.type.toLowerCase().split(",")[0];
  } else if (pokemon.type.includes("/")) {
    pokemonType = pokemon.type.toLowerCase().split("/")[0];
  } else if (pokemon.type.includes("+")) {
    pokemonType = pokemon.type.toLowerCase().split(" ")[0];
  } else {
    pokemonType = pokemon.type.toLowerCase();
  }

  // Write and add HTML with pokemon type class
  const myPokemon =
    /*html*/
    `<article class="grid-item ${pokemonType}">
    <img src="${pokemon.image}">
    <li>Name: ${pokemon.name}</li>
    <li>Dexindex: ${pokemon.dexindex} </li>
    <li>Type: ${pokemon.type.substring(0, 1).toUpperCase() + pokemon.type.substring(1)}</li> 
  </article>`;

  document.querySelector("#pokemon").insertAdjacentHTML("beforeend", myPokemon);

  // Add eventlisteners for animations and modal
  document.querySelector("#pokemon article:last-child").addEventListener("click", clickPokemon);
  document.querySelector("#pokemon article:last-child").addEventListener("mouseenter", giveEnterAnimation);
  document.querySelector("#pokemon article:last-child").addEventListener("mouseleave", giveLeaveAnimation);

  function clickPokemon() {
    // Makes some data points more readable
    changeUnwantedText(pokemon);

    // Show full object data in a modal, with prettified text
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

    const details = document.querySelector("#details")
    details.showModal();
    details.innerHTML = newPokemon;
    details.scrollTo({ top: 0 });
    
    // Transfers the appropriate background color from the overview to the modal
    removeType();
     details.classList.add(pokemonType);
  }

  function giveLeaveAnimation() {
    this.classList.remove("onHover");
    this.offsetLeft;
    this.classList.add("offHover");
  }
  function giveEnterAnimation() {
    this.classList.remove("offHover");
    this.offsetLeft;
    this.classList.add("onHover");
  }
}

function changeUnwantedText(pokemon) {
  if (pokemon.canEvolve) {
    pokemon.canEvolve = "This pokemon can evolve!";
  } else {
    pokemon.canEvolve = "This pokemon can't evolve :(";
  }
  if ((pokemon.subtype = "null")) {
    pokemon.subtype = "None";
  }
  if ((pokemon.gender = "undefined")) {
    pokemon.gender = "Unknown";
  }
}

function removeType() {
  details.classList.remove("water", "fighting", "normal", "psychich", "grass", "sun", "dragon", "electric", "ground", "fire", "ghost", "psychic", "dark", "bug", "fairy");
}
