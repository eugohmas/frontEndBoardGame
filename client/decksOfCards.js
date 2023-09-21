export function initializeOTBDeck(state) {
  const cardsOTB = [
    { name: "fruit", value: 25000, amount: 5 },
    { name: "fruit", value: 25000, amount: 5 },
    { name: "fruit", value: 25000, amount: 5 },
    { name: "fruit", value: 25000, amount: 5 },
    { name: "fruit", value: 25000, amount: 5 },
    { name: "fruit", value: 25000, amount: 5 },
    { name: "hay", value: 20000, amount: 10 },
    { name: "hay", value: 20000, amount: 10 },
    { name: "hay", value: 20000, amount: 10 },
    { name: "hay", value: 20000, amount: 10 },
    { name: "hay", value: 20000, amount: 10 },
    { name: "grain", value: 20000, amount: 10 },
    { name: "grain", value: 20000, amount: 10 },
    { name: "grain", value: 20000, amount: 10 },
    { name: "grain", value: 20000, amount: 10 },
    { name: "grain", value: 20000, amount: 10 },
    { name: "cows", value: 5000, amount: 10 },
    { name: "cows", value: 5000, amount: 10 },
    { name: "cows", value: 5000, amount: 10 },
    { name: "cows", value: 5000, amount: 10 },
    { name: "cows", value: 5000, amount: 10 },
    { name: "cows", value: 5000, amount: 10 },
    { name: "tractor", value: 10000, amount: 1 },
    { name: "tractor", value: 10000, amount: 1 },
    { name: "tractor", value: 10000, amount: 1 },
    { name: "harvester", value: 10000, amount: 1 },
    { name: "harvester", value: 10000, amount: 1 },
    { name: "harvester", value: 10000, amount: 1 },
    { name: "rent cascade range", value: 40000, amount: 40 },
    { name: "rent cascade range", value: 40000, amount: 40 },
    { name: "rent cascade range", value: 40000, amount: 40 },
    { name: "rent rattlesnake ridge", value: 30000, amount: 30 },
    { name: "rent rattlesnake ridge", value: 30000, amount: 30 },
    { name: "rent rattlesnake ridge", value: 30000, amount: 30 },
    { name: "rent toppenish ridge", value: 50000, amount: 50 },
    { name: "rent toppenish ridge", value: 50000, amount: 50 },
    { name: "rent toppenish ridge", value: 50000, amount: 50 },
    { name: "rent ahtanum ridge", value: 20000, amount: 20 },
    { name: "rent ahtanum ridge", value: 20000, amount: 20 },
    { name: "rent ahtanum ridge", value: 20000, amount: 20 },
  ];
  //ok so now we need to shuffle these cards somehow.\
  const shuffledCardsOTB = [];
  const length = cardsOTB.length;
  for (let i = 0; i < length; i++) {
    let randoNum = Math.floor(Math.random() * cardsOTB.length);
    let card = cardsOTB.splice(randoNum, 1);
    shuffledCardsOTB.push(card);
  }
  //this works now I need to add them to my state in state.cardsOTB
  state.cardsOTB = shuffledCardsOTB;
}

function initializeOperatingExpenseDeck() {
  //unfortunately, this should probably just be a deck of functions because when they are drawn, they act out the function
  cardsOperatingExpense = [
    { desctiption: "fertilizer bill due", value: 100, condition: "per acre" },
    {
      desctiption: "Custom hire bill due",
      value: 2000,
      condition: "no harvester",
    },
    { desctiption: "Seed bill due", value: 3000, condition: "none" },
    { desctiption: "Monthly electric bill due", value: 500, condition: "none" },
    {
      desctiption: "Farm real estate taxes due",
      value: 1500,
      condition: "none",
    },
    { desctiption: "Equipment in the shop", value: 1000, condition: "none" },
    {
      desctiption: "Custom hire bill due",
      value: 2000,
      condition: "no tractor",
    },
    { desctiption: "Feed bill due", value: 500, condition: "per cow" },
    { desctiption: "Parts bill due", value: 500, condition: "none" },
    {
      desctiption: "Semi-annual interest due",
      value: 0.1,
      condition: "10% of debt",
    },
    { desctiption: "Equipment breakdown", value: 500, condition: "none" },
    { desctiption: "Seed bill due", value: 3000, condition: "none" },
    { desctiption: "Vet bill", value: 500, condition: "if cows" },
    { desctiption: "Equipment in the shop", value: 1000, condition: "none" },
    { desctiption: "Fuel bill due", value: 1000, condition: "none" },
    { desctiption: "Fertilizer bill due", value: 100, condition: "per acre" },
    { desctiption: "custom hire bill", value: 2000, condition: "no harvester" },
    { desctiption: "Fuel bill due", value: 1000, condition: "none" },
    { desctiption: "parts bill due", value: 500, condition: "none" },
    {
      desctiption: "Semi-annual interest due",
      value: 0.1,
      condition: "10% of debt",
    },
    { desctiption: "Farmer's insurance due", value: 1500, condition: "none" },
    { desctiption: "Equipment breakdown", value: 500, condition: "none" },
    {
      desctiption: "Custom hire bill due",
      value: 2000,
      condition: "no tractor",
    },
    {
      desctiption: "Wire worm infects grain acreage",
      value: 100,
      condition: "per grain acre",
    },
  ];
}

//I am not sure if I will have to pass state to each of the internal functions or not.
export function initializeFarmersFateDeck(state) {
  const cardsFarmersFate = [
    {
      description:
        "your production cowboy does really well with your cows but instead of giving him a raise, you take the money! Receive a 50% bonus after you roll for your Livestock harvest for each of the next two years",
      value: 0.5,
      condition: "for cows",
      act: function (player) {
        console.log(
          `your production cowboy does really well with your cows but instead of giving him a raise, you take the money! Receive a 50% bonus after you roll for your Livestock harvest for each of the next two years. YEAH, I AM NOT DOING THIS ONE YET`
        );
        //yeah, I am not doing this one yet
      },
    },
    {
      description:
        "Russia Ukraine war boosts wheat prices. You make a ton of money off of other peoples hardships. Collect 2000",
      value: 2000,
      condition: "none",
      act: function (player) {
        console.log(`I am going to give player ${player} 2000`);
        state.players[player].money += 2000;
      },
    },
    {
      description:
        "You are not very good at farming. Go back to 2nd week of january and do not collect your 5000",
      value: 0,
      condition: "2nd week of jan no wage",
      act: function (player) {
        console.log(`go back to the second week of January`);
        state.players[player].playerLocation = 2;
        //might need to have them draw an otb here too.
      },
    },
    {
      description:
        "vegetarian ninja warriors attack in the night and slaughter all of your cows on your farm, They didn't get to your rented cows",
      value: 0,
      condition: "lose farm cows",
      act: function (player) {
        console.log(`lose all cows on your farm`);
        state.players[player].localCows = 0;
      },
    },
    {
      description:
        "you accidentally mis-gendered your bank representative. Pay 10% of outstanding debt as additional interest.",
      value: 0.1,
      condition: "10% of debt",
      act: function (player) {
        console.log(
          `player ${player} you accidentally mis-gendered their bank representative. Pay 10% of outstanding debt as additional interest.`
        );
        state.players[player].money -= 0.1 * state.players[player].debt;
      },
    },
    {
      description: "Custom hire bill due. pay 3000 if you have no tractor",
      value: 3000,
      condition: "no tractor",
      act: function (player) {
        console.log(`Custom hire bill due. pay 3000 if you have no tractor`);
        !state.players[player].tractor
          ? (state.players[player].money -= 3000)
          : state.players[player].money;
      },
    },
    {
      description:
        "Californians bought the land next to you. They have horses but have no idea how to take care of them. They pay you 100 per hay acre for your hay",
      value: 100,
      condition: "per hay acre",
      act: function (player) {
        console.log(
          `Californians bought the land next to you. They have horses but have no idea how to take care of them. They pay you 100 per hay acre for your hay`
        );
        state.players[player].money += state.players[player].hay * 100;
      },
    },
    {
      description:
        "Cut worms eat sprouting fruit buds. EPA bans control spray, pay 300 per fruit acre",
      value: 300,
      condition: "per fruit acre",
      act: function (player) {
        console.log(
          `Cut worms eat sprouting fruit buds. EPA bans control spray, pay 300 per fruit acre`
        );
        state.players[player].money -= state.players[player].fruit * 300;
      },
    },
    {
      description:
        "Russia nukes the US. Thankfully, you are out in BFE so your hay jumps in price. collect 500 per hay acre. Other players have to roll to see if they are ok. odd = escaped, even = pay 100 per acre (all acres) to clean up the mess",
      value: 500,
      condition: "per hay acre",
      act: function (player) {
        console.log(
          `Russia nukes the US. Thankfully, you are out in BFE so your hay jumps in price. collect 500 per hay acre. Other players have to roll to see if they are ok. odd = escaped, even = pay 100 per acre (all acres) to clean up the mess. YEAH, I AM NOT DOING THIS ONE YET`
        );
        //yeah, I am not doing this one yet
      },
    },
    {
      description: "income taxes due",
      value: 7000,
      condition: "none",
      act: function (player) {
        console.log(`income taxes due, pay 7000`);
        state.players[player].money -= 7000;
      },
    },
    {
      description:
        "your uncle died. you can buy his 10 acres of hay for 10,000",
      value: 10000,
      condition: "none",
      act: function (player) {
        console.log(
          `your uncle died. you can buy his 10 acres of hay for 10,000. YEAH, I AM NOT DOING THIS ONE YET`
        );
        //yeah, I am not doing this one yet
      },
    },
    {
      description: "your calves look fat!",
      value: 2000,
      condition: "if cows",
      act: function (player) {
        console.log(`your calves look fat! Gain 2000`);
        if (
          state.players[player].localCows > 0 ||
          state.players[player].rentedCows > 0
        ) {
          state.players[player].money += 2000;
        }
      },
    },
    {
      description:
        "the owners of the local brewery set your orchard on fire, pay 500 per fruit acre",
      value: 500,
      condition: "per fruit acre",
      act: function (player) {
        console.log(
          `the owners of the local brewery set your orchard on fire, pay 500 per fruit acre`
        );
        state.players[player].money -= state.players[player].fruit * 500;
      },
    },
    {
      description:
        "You are bad at farming, but the conservatives still give you subsities, collect 100 per grain acre",
      value: 100,
      condition: "per grain acre",
      act: function (player) {
        console.log(
          `You are bad at farming, but the conservatives still give you subsities, collect 100 per grain acre`
        );
        state.players[player].money += state.players[player].wheat * 100;
      },
    },
    {
      description: "you struck oil on your farm! gain 100 per acre",
      value: 100,
      condition: "per acre",
      act: function (player) {
        console.log(`you struck oil on your farm! gain 100 per acre`);
        state.players[player].money += state.players[player].hay * 100;
        state.players[player].money += state.players[player].wheat * 100;
        state.players[player].money += state.players[player].fruit * 100;
      },
    },
    {
      description:
        "media makes a fuss about the dangers of your fruit and how it is processed, cut your cherry crop in half this year",
      value: 0.5,
      condition: "for cherries",
      act: function (player) {
        console.log(
          `media makes a fuss about the dangers of your fruit and how it is processed, cut your cherry crop in half this year. YEAH, I AM NOT DOING THIS ONE YET`
        );
        //yeah, I am not doing this one yet
      },
    },
    {
      description:
        "The president slaps on a grain embargo while you are waiting for your hired harvester, pay 2500 if you don't own a harvester",
      value: 2500,
      condition: "no harvester",
      act: function (player) {
        console.log(
          `The president slaps on a grain embargo while you are waiting for your hired harvester, pay 2500 if you don't own a harvester`
        );
        !state.players[player].harvester
          ? (state.players[player].money -= 2500)
          : state.players[player].money;
      },
    },
    {
      description: "market goes up, collect 1000",
      value: 1000,
      condition: "none",
      act: function (player) {
        console.log(`market goes up, collect 1000`);
        state.players[player].money += 1000;
      },
    },
    {
      description:
        "Trucker strike delays fruit in transport, lots of spoilage, pay 1000 per fruit acre",
      value: 1000,
      condition: "per fruit acre",
      act: function (player) {
        console.log(
          `Trucker strike delays fruit in transport, lots of spoilage, pay 1000 per fruit acre`
        );
        state.players[player].money -= state.players[player].fruit * 1000;
      },
    },
    {
      description:
        "your lazy bum forgot to spray for weeds, cut your wheat crop in half this year",
      value: 0.5,
      condition: "for wheat",
      act: function (player) {
        console.log(
          `your lazy bum forgot to spray for weeds, cut your wheat crop in half this year. YEAH, I AM NOT DOING THIS ONE YET`
        );
        //yeah, I am not doing this one yet
      },
    },
    {
      description: "Custom hire bill due. If you have no tractor, pay 3000",
      value: 3000,
      condition: "no tractor",
      act: function (player) {
        console.log(`Custom hire bill due. If you have no tractor, pay 3000`);
        !state.players[player].tractor
          ? (state.players[player].money -= 3000)
          : state.players[player].money;
      },
    },
    {
      description:
        "lend out your harvester, If you have a harvester, collect 2000 from those who do not",
      value: 2000,
      condition: "per player",
      act: function (player) {
        console.log(
          `lend out your harvester, If you have a harvester, collect 2000 from those who do not. YEAH, I AM NOT DOING THIS ONE YET`
        );
        //yeah, I am not doing this one yet
      },
    },
    {
      description:
        "Drought year, go to second week of January, do not collect 5000",
      value: 0,
      condition: "go to 2nd week of jan, no money",
      act: function (player) {
        console.log(
          `Drought year, go to second week of January, do not collect 5000`
        );
        state.players[player].playerLocation = 2;
        //might need to have them draw an otb here too.
      },
    },
    {
      description:
        "IRS garnishes your income after finding errors on your tax return. For the rest of the year, draw operating expense cards during harvest but do not roll for harvest check",
      value: 0.5,
      condition: "for cows",
      act: function (player) {
        console.log(
          `IRS garnishes your income after finding errors on your tax return. For the rest of the year, draw operating expense cards during harvest but do not roll for harvest check. YEAH, I AM NOT DOING THIS ONE YET`
        );
        //yeah, I am not doing this one yet
      },
    },
  ];

  //ok so now we need to shuffle these cards somehow.\
  const shuffledCardsFF = [];
  const length = cardsFarmersFate.length;
  for (let i = 0; i < length; i++) {
    let randoNum = Math.floor(Math.random() * cardsFarmersFate.length);
    let card = cardsFarmersFate.splice(randoNum, 1);
    shuffledCardsFF.push(card);
  }
  //this works now I need to add them to my state in state.cardsOTB
  state.cardsFF = shuffledCardsFF;
}
