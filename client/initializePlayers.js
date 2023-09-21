export function setInitialPlayerInfo(state) {
  state.players = [];
  let i = 1;
  while (document.getElementById(`nameInput${i}`)) {
    let nameElem = document.getElementById(`nameInput${i}`).value;
    let colorElem = document.getElementById(`colorSelection${i}`).value;
    let typeElem = document.getElementById(`typeSelection${i}`).value;
    let myTurn = true;
    if (i - 1 > 0) {
      myTurn = false;
    }
    state.players[i - 1] = {
      name: nameElem,
      color: colorElem,
      type: typeElem,
      isMyTurn: myTurn,
      playerLocation: 0,
      hay: 10,
      wheat: 10,
      fruit: 10,
      localCows: 10,
      rentedCows: 10,
      money: 20000,
      debt: 20000,
      otbs: [],
    };
    i++;
  }
  return;
}
