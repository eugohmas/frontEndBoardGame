const initializeBoard = (state) => {
  state.board = [
    {
      value: "Christmas Vacation",
      description: "collect 6k as you pass",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
        state.players[player].money += 6000;
      },
    },
    {
      value: "January wk 1",
      description: "pay 10% interest on bank notes",
      playersHere: [],
      act: function (player) {
        console.log(
          `player ${player} loses 10% interest on bank notes. What a loser!`
        );
        state.players[player].money =
          state.players[player].money - 0.1 * state.players[player].debt;
      },
    },
    {
      value: "January wk 2",
      description: "Draw OTB",
      playersHere: [],
      act: function (player) {
        console.log(`player ${player} gets an OTB! BOOOOOOOOM!!!`);
        const otb = state.cardsOTB.pop();
        state.players[player].otbs.push(otb);
      },
    },
    {
      value: "January wk 3",
      description: "Pay 500 if you own cows",
      playersHere: [],
      act: function (player) {
        console.log(
          `If player ${player} owns cows, they are going to lose 500!`
        );
        if (
          state.players[player].localCows > 0 ||
          state.players[player].rentedCows > 0
        ) {
          state.players[player].money -= 500;
        }
      },
    },
    {
      value: "January wk 4",
      description: "Double hay harvest this year",
      playersHere: [],
      act: function (player) {
        console.log(
          `I am going to double the hay harvest of player ${player} this year!`
        );
        //HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP I DON'T Know how I am going to handle hay harvest doubling
      },
    },
    {
      value: "February wk 1",
      description: "collect 1000",
      playersHere: [],
      act: function (player) {
        console.log(`you get a 1000 but not everybody gets a 1000.`);
        state.players[player].money += 1000;
      },
    },
    {
      value: "February wk 2",
      description: "Draw Farmers Fate",
      playersHere: [],
      act: function (player) {
        console.log(
          `player ${player} gets a farmers fate. Welcome to the lottery of life!`
        );
        const ff = state.cardsFF.pop();
        ff[0].act(player);
      },
    },
    {
      value: "February wk 3",
      description: "Go directly to spring planting",
      playersHere: [],
      act: function (player) {
        console.log(
          `player ${player} you are allowed to go to spring planting. May the odds serve you well`
        );
        //THIS IS REALLY TOUGH BECAUSE I AM ALREADY INSIDE THE MOVEPLAYER FUNCTION... SO WHAT DO I DO? I PROBABLY SHOULD RE-WRITE THE MOVE FUNCTION IN THIS FUNCTION SO THAT IT ACTS ON THE PLAYER. OTHERWISE WE HAVE TOO MANY FUNCTIONS CALLING OTHER FUNCTIONS
      },
    },
    {
      value: "February wk 4",
      description: "Draw OTB",
      playersHere: [],
      act: function (player) {
        console.log(`player ${player} gets an OTB! BOOOOOOOOM!!!`);
        const otb = state.cardsOTB.pop();
        state.players[player].otbs.push(otb);
      },
    },
    {
      value: "March wk 1",
      description: "Pay 2000 to replant wheat",
      playersHere: [],
      act: function (player) {
        console.log(
          `I lit your wheat fields on fire, now player ${player} must pay 2000 to replant`
        );
        state.players[player].money -= 2000;
      },
    },
    {
      value: "March wk 2",
      description: "pay 500",
      playersHere: [],
      act: function (player) {
        console.log(
          `I am going to take 500 from player ${player} just because I don't like their attitude`
        );
        state.players[player].money -= 500;
      },
    },
    {
      value: "March wk 3",
      description: "Go back to second week of January",
      playersHere: [],
      act: function (player) {
        console.log(
          `player ${player}, you are not a real farmer yet. Go back to the second week of January`
        );
        //THIS IS REALLY TOUGH BECAUSE I AM ALREADY INSIDE THE MOVEPLAYER FUNCTION... SO WHAT DO I DO? I PROBABLY SHOULD RE-WRITE THE MOVE FUNCTION IN THIS FUNCTION SO THAT IT ACTS ON THE PLAYER. OTHERWISE WE HAVE TOO MANY FUNCTIONS CALLING OTHER FUNCTIONS
      },
    },
    {
      value: "March wk 4",
      description: "pay 2000 if you own fruit",
      playersHere: [],
      act: function (player) {
        console.log(
          `I destroyed player ${player}'s fruit because you should eat meat. pay 2000 to replant`
        );
        if (state.players[player].fruit > 0) {
          state.player[player].money -= 2000;
        }
      },
    },
    {
      value: "April wk 1",
      description: "Draw OTB",
      playersHere: [],
      act: function (player) {
        console.log(`player ${player} gets an OTB! BOOOOOOOOM!!!`);
        const otb = state.cardsOTB.pop();
        state.players[player].otbs.push(otb);
      },
    },
    {
      value: "Spring Planting",
      description: "Double corn for the year",
      playersHere: [],
      act: function (player) {
        console.log(
          `I am going to double the corn harvest of player ${player} this year!`
        );
        //HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP I DON'T Know how I am going to handle hay harvest doubling
      },
    },
    {
      value: "April wk 2",
      description: "pay 500",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to take 500 from player ${player}`);
        state.players[player].money -= 500;
      },
    },
    {
      value: "April wk 3",
      description: "pay 1000",
      playersHere: [],
      act: function (player) {
        console.log(`player ${player}, you lose 1000`);
        state.players[player].money -= 1000;
      },
    },
    {
      value: "May wk 1",
      description: "collect 500",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 500`);
        state.players[player].money += 500;
      },
    },
    {
      value: "May wk 2",
      description: "pay 500",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to take 500 from player ${player}`);
        state.players[player].money -= 500;
      },
    },
    {
      value: "May wk 3",
      description: "Harvest hay, collect 1000",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 1000`);
        state.players[player].money += 1000;
      },
    },
    {
      value: "May wk 4",
      description: "Harvest hay, draw OTB",
      playersHere: [],
      act: function (player) {
        console.log(`player ${player} gets an OTB! BOOOOOOOOM!!!`);
        const otb = state.cardsOTB.pop();
        state.players[player].otbs.push(otb);
      },
    },
    {
      value: "June wk 1",
      description: "Harvest hay, cut your hay check in half",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "June wk 2",
      description: "Harvest hay, collect 500",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "June wk 3",
      description: "Harvest cherry, cut your check in half",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "June wk 4",
      description: "Harvest cherry, draw farmers fate",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "Independence Day Bash",
      description: "Harvest Cherry",
      playersHere: [],
      act: function (player) {
        console.log(`Nothing unusual going on here`);
      },
    },
    {
      value: "July wk 1",
      description: "Harvest Hay, double your harvest",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "July wk 2",
      description: "Harvest Hay, draw OTB",
      playersHere: [],
      act: function (player) {
        console.log(`player ${player} gets an OTB! BOOOOOOOOM!!!`);
        const otb = state.cardsOTB.pop();
        state.players[player].otbs.push(otb);
      },
    },
    {
      value: "July wk 3",
      description: "Harvest Hay, go to harvest moon",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "July wk 4",
      description: "Harvest Wheat, add 50 per acre to harvest check",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "August wk 1",
      description:
        "Harvest wheat, go to 4th week of February and collect your 5k",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "August wk 2",
      description: "Harvest Wheat, collect 1000 if you have a harvester",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "August wk 3",
      description: "Harvest Wheat, collect 500",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "August wk 4",
      description: "Harvest wheat, lose 50 per acre",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "September wk 1",
      description:
        "Harvest Hay, if you own a tractor go to third week of november",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "September wk 2",
      description: "Harvest hay, draw OTB",
      playersHere: [],
      act: function (player) {
        console.log(`player ${player} gets an OTB! BOOOOOOOOM!!!`);
        const otb = state.cardsOTB.pop();
        state.players[player].otbs.push(otb);
      },
    },
    {
      value: "Harvest Moon",
      description: "Harvest cows, collect 500",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "September wk 3",
      description: "Harvest Cows, cut check in half",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "September wk 4",
      description: "Harvest cows, pay 2000 if you own fruit",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "October wk 1",
      description: "Harvest cows, collect 500",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "October wk 2",
      description: "Harvest Hay, draw farmer's fate",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "October wk 3",
      description: "Harvest Hay, draw OTB",
      playersHere: [],
      act: function (player) {
        console.log(`player ${player} gets an OTB! BOOOOOOOOM!!!`);
        const otb = state.cardsOTB.pop();
        state.players[player].otbs.push(otb);
      },
    },
    {
      value: "October wk 4",
      description: "Harvest Apples, draw farmers fate",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "November wk 1",
      description: "Harvest Apples, draw OTB",
      playersHere: [],
      act: function (player) {
        console.log(`player ${player} gets an OTB! BOOOOOOOOM!!!`);
        const otb = state.cardsOTB.pop();
        state.players[player].otbs.push(otb);
      },
    },
    {
      value: "November wk 2",
      description: "Harvest Apples, collect 500",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "November wk 3",
      description: "Harvest Apples, collect 1000",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "November wk 4",
      description: "Harvest Corn, pay 1000 if you own fruit",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "December wk 1",
      description: "Harvest Corn, collect 500",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
    {
      value: "December wk 2",
      description: "Harvest Corn, draw farmer's fate",
      playersHere: [],
      act: function (player) {
        console.log(`I am going to give player ${player} 6000`);
      },
    },
  ];
  return;
};

export default initializeBoard;
