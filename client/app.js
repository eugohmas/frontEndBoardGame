//ok so now I need to make a local boardgame. Then I will do a PR with Rach and see how I did.
import initializeBoard from "./initializeBoard.js";
import {
  setInitialPlayerNumber,
  getInitialPlayerInfo,
  checkPlayerInfo,
} from "./initialScreens.js";
import { setInitialPlayerInfo } from "./initializePlayers.js";
import {
  initializeOTBDeck,
  initializeFarmersFateDeck,
} from "./decksOfCards.js";
//*******************STATE************************** */
let state = {};
const boardElem = document.getElementById("board");
const playerInfoElem = document.getElementById("playerInfo");

function removeBoard() {
  while (boardElem.firstChild) {
    boardElem.removeChild(boardElem.firstChild);
  }
  while (playerInfoElem.firstChild) {
    playerInfoElem.removeChild(playerInfoElem.firstChild);
  }
  return;
}

function renderBoard() {
  for (let i = 0; i < state.board.length; i++) {
    let position = state.board[i];
    let cellElem = document.createElement("div");
    let cellElem2 = document.createElement("span");
    let cellElem3 = document.createElement("span");
    let cellElem4 = document.createElement("span");
    cellElem2.innerText = position.value;
    cellElem3.innerText = position.description;
    cellElem4.innerText = position.playersHere;
    //cellElem.innerText = position.value;
    cellElem.classList.add("cell");
    cellElem.dataset.index = i;
    cellElem.appendChild(cellElem2);
    cellElem.appendChild(cellElem3);
    cellElem.appendChild(cellElem4);
    boardElem.appendChild(cellElem);
  }
  return;
}

function renderActions() {
  let buttonElem = document.createElement("button");
  buttonElem.innerText = "roll";
  buttonElem.id = "rollButton";
  playerInfoElem.appendChild(buttonElem);
  //I need a paragraph that tells you what is happening on your turn
}

function renderPlayers(whoseTurn) {
  //first we need to clear each player location on the board
  let board = state.board;
  for (let i = 0; i < board.length; i++) {
    let playersHere = state.board[i].playersHere;
    if (playersHere.length > 0) {
      while (playersHere.length > 0) {
        state.board[i].playersHere.pop();
      }
    }
  }
  //then we need to set each player on the board
  let players = state.players;
  for (let i = 0; i < players.length; i++) {
    state.board[players[i].playerLocation].playersHere.push(players[i].name);
  }
  console.log(players);
}

function rollDice() {
  let dice = 1; //Math.floor(Math.random() * 6);
  // if (dice === 0) {
  //   dice = 1;
  // }
  return dice;
}
function movePlayer(amount) {
  let players = state.players;
  let currTurn = 1000000;
  for (let i = 0; i < players.length; i++) {
    if (players[i].isMyTurn) {
      //here is where I wrap around
      if (players[i].playerLocation + amount > state.board.length - 1) {
        state.players[i].playerLocation =
          players[i].playerLocation + amount - state.board.length;
      } else {
        state.players[i].playerLocation += amount;
      }
      //now I need to run the act function of the space I am on
      if (state.board[state.players[i].playerLocation].hasOwnProperty("act")) {
        state.board[state.players[i].playerLocation].act(i); //state.players[i].playerLocation
      }
      if (i + 1 === players.length) {
        currTurn = 0;
      } else {
        currTurn = i + 1;
      }
      state.players[i].isMyTurn = false;
    }
  }
  state.players[currTurn].isMyTurn = true;
  return;
}

boardElem.addEventListener("click", function (event) {
  if (event.target.id === "submitPlayerNumber") {
    let numOfPlayers = Number(document.getElementById("numOfPlayers").value);
    if (Number.isInteger(numOfPlayers)) {
      removeBoard();
      getInitialPlayerInfo(numOfPlayers, boardElem);
    } else {
      let cellElem = document.getElementById("numOfPlayersLabel");
      cellElem.innerText = "enter a number you goof ball";
    }
  }
  //then when the players are submitted, we call the function set player info
  if (event.target.id === "submitPlayerInfo") {
    if (checkPlayerInfo()) {
      setInitialPlayerInfo(state);
      removeBoard();
      initializeOTBDeck(state);
      initializeFarmersFateDeck(state);
      initializeBoard(state);
      renderPlayers();
      renderBoard();
      renderActions();
    } else {
      //tell them to correct the info
    }
  }
});
playerInfoElem.addEventListener("click", function (event) {
  if (event.target.id === "rollButton") {
    let diceNum = rollDice();
    movePlayer(diceNum);
    removeBoard();
    renderPlayers();
    renderBoard();
    renderActions();
  }
});

setInitialPlayerNumber(boardElem);

//so there are a couple things here.
//we need the board to act upon the player based on the square that the player is in. So there will be functions on the board that act on the player. when the player moves, they will call the function on that board space

//let's map this out. there are really 3 processes that occur:
//1) when I move on the board, I land on spaces. these spaces can cost me money or give me money. they can also cause me to draw a farmers fate or gain an otb. these are board functions. the board holds these functions based on my location. ok, i got it to call the board function in movePlayer. now I need to fix each function on the board. I will also end up having to create the farmers fate deck and the otb deck here as well. I created the otb deck because it is the easiest. next I need to have the farmers fate deck. this will be a deck of functions that execute when drawn. So I need to write all the functions, then shuffle the deck and then check that each function works and does exactly what I want it to.

//2) I can buy things based on my OTB list and if my position is less than spring planting. this occurs as a function of move player, if that player exists in a position between 0 and spring planting, there is a buy button

//3) finally there is a harvest process, this allows me to harvest and get an operating expense based on my location. I think this should be a function of move player. Also this function should execute before the board functions. and harvest should occur before the operating expense.

//I will have to have a function that deals with "not enough money" at some point.... but for now, I think we can ignore that. we assume that the player always has enough money.

//there is a function for passing go, where it doesn't matter where you land, if you pass go, you get 5k

//I should also probably add the footer to my html and then put the player info in the footer

//setTimeout(function, amountOfMilliseconds) this allows you to wait to do something.
