"use strict";

window.addEventListener("load", start);

async function start() {
  const pokemons = await getPokemon("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
  // const pokemon = await getMudkip("https://raw.githubusercontent.com/buan0001/pokemon-data/main/mudkip.json");
  // console.log(pokemon);

pokemons.forEach(showPokemon)
}

async function getPokemon(pokemon) {
  const response = await fetch(pokemon);
  const data = await response.json();
  // console.log(data);
  return data;
}

// const pokemon = {
//   name: "pokemon",
//   description:
//     "The fin on pokemon’s head acts as highly sensitive radar.Using this fin to sense movements of water and air, this Pokémon can determine what is taking place around it without using its eyes.",
//   ability: "Torrent",
//   image: "https://img.pokemondb.net/artwork/avif/pokemon.avif",
//   footprint: "https://archives.bulbagarden.net/media/upload/1/1e/F0258.png",
//   dexindex: "0258",
//   type: "Water",
//   subtype: "Mud Fish",
//   weaknesses: "Electric, Grass",
//   gender: "87.5% male, 12.5% female",
//   weight: "7600",
//   height: "40",
//   generation: "3-9",
//   spilversion: "Ruby, Sapphire, Emerald",
//   canEvolve: true,
//   statsHP: 5,
//   statsAttack: 7,
//   statsDefence: 5,
//   statsSpecialAttack: 5,
//   statsSpecialDefence: 5,
//   //   statsSpeed: 4,
// };

// pokemon.statsSpeed = 4;

function showPokemon(pokemon) {
  console.log(pokemon.image);
  const myPokemon =
    /*html*/
    `<article>
    <img src="${pokemon.image}">
    <li>Name: ${pokemon.name}</li>
    <li>Description: ${pokemon.description} </li>  
    <li>Ability: ${pokemon.ability} </li>
    <li>Footprint: <img src="${pokemon.footprint}"> </li>
  <li>Dexindex: ${pokemon.dexindex} </li>
  <li>Type: ${pokemon.type}</li> 
  <li>Subtype: ${pokemon.subtype}</li>
  <li>Weakness: ${pokemon.weaknesses} </li> 

  <li>Attack: ${pokemon.statsAttack}</li>  
  <li>Defence: ${pokemon.statsDefence} </li> 
  <li>Special attack: ${pokemon.statsSpecialAttack}</li>
  <li>Special defence: ${pokemon.statsSpecialDefence} </li>
  <li>Speed: ${pokemon.statsSpeed} </li>
  </article>`;
  document.querySelector("#pokemon").insertAdjacentHTML("beforeend", myPokemon);
  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    clickpokemon(pokemon);
  }
}

function clickpokemon(pokemon) {
  console.log("????????");
  console.log(pokemon);

  const newPokemon =
    /*html*/
    `<article>
    <img src="${pokemon.image}">
    <li>Name: ${pokemon.name}</li>
  <li>Description: ${pokemon.description} </li>  
  <li>Ability: ${pokemon.ability} </li>
  <li>Footprint: <img src="${pokemon.footprint}"> </li>
  <li>Dexindex: ${pokemon.dexindex} </li>
  <li>Type: ${pokemon.type}</li> 
  <li>Subtype: ${pokemon.subtype}</li>
  <li>Weakness: ${pokemon.weaknesses} </li> 
  <li>Gender: ${pokemon.gender} </li>
  <li>Weight: ${pokemon.weight} </li> 
  <li>Height: ${pokemon.height} </li> 
  <li>Generation: ${pokemon.generation} </li> 
  <li>Game version: ${pokemon.spilversion}</li>
  <li>Evolves?: ${pokemon.canEvolve}</li>  
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
  // document.querySelector("#details").innerHTML = newPokemon;
  document.querySelector("#details").innerHTML = newPokemon;
  document.querySelector("#details").showModal();
  document.querySelector("#details").scrollTo({top: 0});
}
