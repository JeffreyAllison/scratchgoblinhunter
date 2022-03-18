export function renderGoblinEl(goblin) {
  const div = document.createElement('div');
  const goblinFaceEl = document.createElement('p');
  const nameEl = document.createElement('p');
  const hpEL = document.createElement('p');

  nameEl.textContent = goblin.name;
  hpEL.textContent = goblin.hp;
  if (goblin.hp === 3) {
    goblinFaceEl.textContent = '👹';
  }
  if (goblin.hp === 1 || goblin.hp === 2) {
    goblinFaceEl.textContent = '👺';
  }
  if (goblin.hp < 1) {
    goblinFaceEl.textContent = '☠';
  }
  div.append(nameEl, hpEL, goblinFaceEl);
  return div;
}