// import functions and grab DOM elements
import { renderGoblinEl } from './render-utils.js';

const goblinsListEl = document.getElementById('goblins-list');
const playerImgEl = document.getElementById('player-img');
const goblinsDefeatedEl = document.getElementById('defeated-goblins');
const playerHealthEl = document.getElementById('player-hp');
const goblinNameInputEl = document.getElementById('goblin-name-input');
const goblinFormEl = document.querySelector('form');


// let state

let playerHealth = 10;
let goblinsDefeated = 0;
const goblins = [
  { name: 'Guts', hp: 3 },
  { name: 'Uggs the Goblin', hp: 2 }
];

// set event listeners 
// get user input
// use user input to update stat
// update DOM to reflect the new state
goblinFormEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const newGoblin = {
    name: goblinNameInputEl.value || 'grunt goblin',
    hp: 3,
  };
  goblins.unshift(newGoblin);
  goblinNameInputEl.value = '';
  displayGoblins();
});

function displayGoblins() {
  goblinsListEl.textContent = '';

  for (let goblin of goblins) {
    const goblinEl = renderGoblinEl(goblin);

    //goblinsListEl.append(goblinEl);

    if (goblin.hp > 0) {
      goblinEl.addEventListener('click', () => {

        if (playerHealth <= 0) {
          playerImgEl.classList.add('game-over');
          alert('Beaten by goblins,refresh to restart');
          return;
        }
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
          goblinsDefeatedEl.textContent = `${goblinsDefeated}`;
        }
        if (playerHealth <= 0) {
          playerImgEl.classList.add('game-over');
          alert('Beaten by goblins, refresh to restart');
        } displayGoblins();
      });
    }
    goblinsListEl.append(goblinEl);
  }
}
displayGoblins();
