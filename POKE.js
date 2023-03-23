"use strict";

window.addEventListener("load", start);

async function start() {
  const pokemon = await getMudkip("https://raw.githubusercontent.com/buan0001/pokemon-data/main/mudkip.json");
  // console.log(pokemon);

  showMudkip(pokemon);
}

async function getMudkip(muddy) {
  const response = await fetch(muddy);
  const data = await response.json();
  // console.log(data);
  return data;
}

// const mudkip = {
//   name: "Mudkip",
//   description:
//     "The fin on Mudkip’s head acts as highly sensitive radar.Using this fin to sense movements of water and air, this Pokémon can determine what is taking place around it without using its eyes.",
//   ability: "Torrent",
//   image: "https://img.pokemondb.net/artwork/avif/mudkip.avif",
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

// mudkip.statsSpeed = 4;

function showMudkip(mudkip) {
  console.log(mudkip.image);
  const myPokemon =
    /*html*/
    `<article>
    <img src="${mudkip.image}">
    <li>Name: ${mudkip.name}</li>
  <li>Description: ${mudkip.description} </li>  
  <li>Ability: ${mudkip.ability} </li>
  <li>Footprint: <img src="${mudkip.footprint}"> </li>
  <li>Dexindex: ${mudkip.dexindex} </li>
  <li>Type: ${mudkip.type}</li> 
  <li>Subtype: ${mudkip.subtype}</li>
  <li>Weakness: ${mudkip.weaknesses} </li> 

  <li>Attack: ${mudkip.statsAttack}</li>  
  <li>Defence: ${mudkip.statsDefence} </li> 
  <li>Special attack: ${mudkip.statsSpecialAttack}</li>
  <li>Special defence: ${mudkip.statsSpecialDefence} </li>
  <li>Speed: ${mudkip.statsSpeed} </li>
  </article>`;
  document.querySelector("#mudkip").insertAdjacentHTML("beforeend", myPokemon);
  document.querySelector("#mudkip article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    clickMudkip(mudkip);
  }
}

function clickMudkip(mudkip) {
  console.log("????????");
  console.log(mudkip);

  const newPokemon =
    /*html*/
    `<article>
    <img src="${mudkip.image}">
    <li>Name: ${mudkip.name}</li>
  <li>Description: ${mudkip.description} </li>  
  <li>Ability: ${mudkip.ability} </li>
  <li>Footprint: <img src="${mudkip.footprint}"> </li>
  <li>Dexindex: ${mudkip.dexindex} </li>
  <li>Type: ${mudkip.type}</li> 
  <li>Subtype: ${mudkip.subtype}</li>
  <li>Weakness: ${mudkip.weaknesses} </li> 
  <li>Gender: ${mudkip.gender} </li>
  <li>Weight: ${mudkip.weight} </li> 
  <li>Height: ${mudkip.height} </li> 
  <li>Generation: ${mudkip.generation} </li> 
  <li>Game version: ${mudkip.spilversion}</li>
  <li>Evolves?: ${mudkip.canEvolve}</li>  
  <li>HP: ${mudkip.statsHP}</li>
  <li>Attack: ${mudkip.statsAttack}</li>  
  <li>Defence: ${mudkip.statsDefence} </li> 
  <li>Special attack: ${mudkip.statsSpecialAttack}</li>
  <li>Special defence: ${mudkip.statsSpecialDefence} </li>
  <li>Speed: ${mudkip.statsSpeed} </li>
  </article>`;
  // document.querySelector("#details").innerHTML = newPokemon;
  document.querySelector("#details").insertAdjacentHTML("beforeend",newPokemon);
  document.querySelector("#details").showModal();
}

  // <form method="dialog">
  // <button>Close</button>
  // </form>