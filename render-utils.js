export function renderGoblinEl(goblin) {
  const div = document.createElement('div');
  const emojiEl = document.createElement('p');
  const nameEl = document.createElement('p');
  const hpEL = document.createElement('p');

  div.classList.add('goblin');
  //emojiEl.classlist.add('emoji');
  //nameEl.classlist.add('name');
  //hpEL.classList.add('hp');

  nameEl.textContent = goblin.name;
  hpEL.textContent = goblin.hp;

  if (goblin.hp === 3) {
    emojiEl.textContent = '👹';
  }
  if (goblin.hp === 1 || goblin.hp === 2) {
    emojiEl.textContent = '👺';
  }
  if (goblin.hp < 1) {
    emojiEl.textContent = '☠';
  }
  div.append(emojiEl, nameEl, hpEL);
  return div;
}