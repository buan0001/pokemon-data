"use strict";

const mudkip = {
  name: "Mudkip",
  description:
    "The fin on Mudkip’s head acts as highly sensitive radar.Using this fin to sense movements of water and air, this Pokémon can determine what is taking place around it without using its eyes.",
  ability: "Torrent",
  image: "https://img.pokemondb.net/artwork/avif/mudkip.avif",
  footprint: "https://archives.bulbagarden.net/media/upload/1/1e/F0258.png",
  dexindex: "0258",
  type: "Water",
  subtype: "Mud Fish",
  weaknesses: "Electric, Grass",
  gender: "87.5% male, 12.5% female",
  weight: "7600",
  height: "40",
  generation: "3-9",
  spilversion: "Ruby, Sapphire, Emerald",
  canEvolve: true,
  statsHP: 5,
  statsAttack: 7,
  statsDefence: 5,
  statsSpecialAttack: 5,
  statsSpecialDefence: 5,
  //   statsSpeed: 4,
};

mudkip.statsSpeed = 4;

showMudkip(mudkip);

function showMudkip(mudkip) {
  console.log(mudkip.image);
  const myPokemon =
    /*html*/
    `<article>
    <image src="${mudkip.image}">
    <li>Name: ${mudkip.name}</li>
  <li>Description: ${mudkip.description} </li>  
  <li>Ability: ${mudkip.ability} </li>
  <li>Footprint: <image src="${mudkip.footprint}"> </li>
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
  document.querySelector("#mudkip").insertAdjacentHTML("beforeend", myPokemon);
  document.querySelector("#mudkip article:last-child").addEventListener("click", clickMudkip);

  function clickMudkip() {
    document.querySelector("#details-image").src = mudkip.image;
    document.querySelector("#details-name").textContent = "Name: " + mudkip.name;
    document.querySelector("#details-house").textContent = "House: " + mudkip.house;
    document.querySelector("#details-birthday").textContent = "Birthday: " + mudkip.dateOfBirth;
    document.querySelector("#details-gender").textContent = "Gender: " + mudkip.gender;
    document.querySelector("#details-ancestry").textContent = "Ancestry: " + mudkip.ancestry;
    document.querySelector("#details-hairColour").textContent = "Hair colour: " + mudkip.hairColour;
    document.querySelector("#details-patronus").textContent = "Patronus: " + mudkip.patronus;
    document.querySelector("#details-actor").textContent = "Actor: " + mudkip.actor;

    document.querySelector("#details").showModal();
  }
}
