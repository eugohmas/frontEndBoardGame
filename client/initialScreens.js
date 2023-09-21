export function setInitialPlayerNumber(boardElem) {
  let inputElem = document.createElement("input");
  inputElem.type = "text";
  inputElem.id = "numOfPlayers";
  let labelElem = document.createElement("label");
  labelElem.id = "numOfPlayersLabel";
  labelElem.for = "numOfPlayers";
  labelElem.innerText = "How many players?";
  let buttonElem = document.createElement("button");
  buttonElem.innerText = "submit";
  buttonElem.id = "submitPlayerNumber";
  boardElem.appendChild(inputElem);
  boardElem.appendChild(labelElem);
  boardElem.appendChild(buttonElem);
}

//I hate this function the most!!!!
export function getInitialPlayerInfo(numOfPlayers, boardElem) {
  //for loop that loops through number of players and adds name, color (should be a drop down), and type (should be a drop down with human or computer)
  for (let i = 1; i <= numOfPlayers; i++) {
    let cellElem = document.createElement("label");
    cellElem.innerText = `name of player ${i}`;
    cellElem.id = `nameLabel${i}`;
    let cellElem2 = document.createElement("input");
    cellElem2.type = "text";
    cellElem2.id = `nameInput${i}`;
    //now we need two drop downs
    //just have an array of colors and loop through the array to add them all
    let cellElem3 = document.createElement("label");
    cellElem3.innerText = `color of player ${i}`;
    cellElem3.id = `colorLabel${i}`;
    let cellElem4 = document.createElement("select");
    cellElem4.id = `colorSelection${i}`;
    let optionElem1 = document.createElement("option");
    optionElem1.text = "red";
    cellElem4.add(optionElem1, null);
    let optionElem2 = document.createElement("option");
    optionElem2.text = "orange";
    cellElem4.add(optionElem2, null);
    let optionElem3 = document.createElement("option");
    optionElem3.text = "yellow";
    cellElem4.add(optionElem3, null);
    let optionElem4 = document.createElement("option");
    optionElem4.text = "green";
    cellElem4.add(optionElem4, null);
    let optionElem5 = document.createElement("option");
    optionElem5.text = "blue";
    cellElem4.add(optionElem5, null);
    let optionElem6 = document.createElement("option");
    optionElem6.text = "indigo";
    cellElem4.add(optionElem6, null);
    let optionElem7 = document.createElement("option");
    optionElem7.text = "violet";
    cellElem4.add(optionElem7, null);

    let cellElem5 = document.createElement("label");
    cellElem5.innerText = `type of player ${i}`;
    cellElem5.id = `typeLabel${i}`;
    let cellElem6 = document.createElement("select");
    cellElem6.id = `typeSelection${i}`;
    let optionElem8 = document.createElement("option");
    optionElem8.text = "Human";
    cellElem6.add(optionElem8, null);
    let optionElem9 = document.createElement("option");
    optionElem9.text = "Computer";
    cellElem6.add(optionElem9, null);

    boardElem.appendChild(cellElem);
    boardElem.appendChild(cellElem2);
    boardElem.appendChild(cellElem3);
    boardElem.appendChild(cellElem4);
    boardElem.appendChild(cellElem5);
    boardElem.appendChild(cellElem6);
  }

  let cellElem = document.createElement("button");
  cellElem.innerText = "submit";
  cellElem.id = "submitPlayerInfo";
  boardElem.appendChild(cellElem);
  return;
}

export function checkPlayerInfo() {
  return true; //I will just assume that all player info is valid for now
}
