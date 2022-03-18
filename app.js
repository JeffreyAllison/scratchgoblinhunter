// import functions and grab DOM elements
import { renderGoblinEl } from './render-utils.js';

const goblinsListEl = document.getElementById('goblins-list');
const goblinsDefeatedEl = document.getElementById('defeated-goblins');
const playerHealthEl = document.getElementById('player-hp');
const goblinNameInputEl = document.getElementById('goblin-name-input');
const goblinAddButtonEl = document.getElementById('add-goblin-button');


// let state

let playerHealth = 10;
let goblinsDefeated = 0;
const goblins = [
  { name: 'Guts', hp: 3 },
  { name: 'Uggs the Goblin', hp: 2 }
];



// set event listeners 
// get user input
// use user input to update state
// update DOM to reflect the new state
goblinAddButtonEl.addEventListener('click', () => {

  goblinNameInputEl.textContent = '';

  const newGoblin = {
    name: goblinNameInputEl.value,
    hp: Math.ceil(Math.random() * 3),
  };
  goblins.unshift(newGoblin);
  goblinNameInputEl.value = '';
  displayGoblins();

});

function displayGoblins() {
  goblinsListEl.textContent = '';

  for (let goblin of goblins) {
    const goblinEl = renderGoblinEl(goblins);

    goblinEl.addEventListener('click', () => {
      if (Math.random() > .5) {
        goblin.hp--;
        alert('you hit ' + goblin.name);
      } else {
        alert('you missed');
      }
      if (Math.random() > .33) {
        playerHealth--;
        playerHealthEl.textContent = `You have ${playerHealth} health remaining`;
        alert(goblin.name + ' hit you');
      } else {
        alert(goblin.name + ' missed you');
      }
      if (goblin.hp === 0) {
        goblinsDefeated++;
        goblinsDefeatedEl.textContent = `You defeated ${goblinsDefeated} goblins!`;
      }
      if (playerHealth === 0) {
        alert('You were defeated by goblins!');
      }
      displayGoblins();
    });
    goblinsListEl.append(goblinEl);
  }
}
