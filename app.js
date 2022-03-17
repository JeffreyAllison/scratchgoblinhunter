// import functions and grab DOM elements

const formEl = document.querySelector('form');
const goblinsListEl = document.querySelector('goblins-list');
const goblinsDefeatedEl = document.querySelector('goblins-defeated');
const playerStatsEl = document.querySelector('player-stats');

// let state

let playerStats = 10;
let goblinsDefeated = 0;
const goblins = [
  { name: 'Guts', hp: 3 },
  { name: 'Uggs the Goblin', hp: 2 }
];

// set event listeners 
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
