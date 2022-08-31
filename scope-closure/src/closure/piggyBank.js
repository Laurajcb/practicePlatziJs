// logic to create a pggybank

/*
function piggyBank(conins) {
    let savedCoins = 0;
    savedCoins += conins;
    console.log(`You have alredy: $${savedCoins} in you piggy bank!`);
}

piggyBank(5);
piggyBank(2);

*/

// piggyBank function working with closure 

function piggyBank() {
  let savedCoins = 0;
  return function countCoins(name, coins) {
    savedCoins += coins;
    console.log(`${name} You have alredy: $${savedCoins} in you piggy bank!`);
  }
}

const totalPiggyBank = piggyBank();

totalPiggyBank('Oscar', 5);
totalPiggyBank('Oscar', 2);
totalPiggyBank('Oscar', 15);

const anaPiggyBank = piggyBank();
anaPiggyBank('Ana', 10);
anaPiggyBank('Ana', 30);


// Function gifCard

function gifCard() {
  let gifCardValue = 200;
  return function purchasedGifCard(purchaseValue) {
    gifCardValue -= purchaseValue;
    console.log(`You spend $${purchaseValue}, your current balance is $${gifCardValue}`);
  }
}

const mariaGifCard = gifCard();
mariaGifCard(80);
mariaGifCard(20);

