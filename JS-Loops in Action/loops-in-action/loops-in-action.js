// First Example: Sum Numbers

const calculateSumButtonElement = document.querySelector("#calculator button");
const inputNumberElement = document.getElementById("user-number");
const outputNumber = document.getElementById("calculated-sum");

function calculateTheSum() {
  // targeting the netered value
  const enteredNumber = inputNumberElement.value;
  let newValue = 0;
  for (let i = 0; i <= enteredNumber; i++) {
    newValue = newValue + i;
  }
  //   for testing
  //   return newValue;

  outputNumber.style.display = "block";
  outputNumber.textContent = newValue;
}

//  -------------
// testing out the function

// let testValue = calculateTheSum(5);
// console.log(testValue);
//  ---------------

//  adding the event listener

calculateSumButtonElement.addEventListener("click", calculateTheSum);

// --------- Second Example: Highlight Links

// const firstLink = document.getElementById("link-1");
// const secondLink = document.getElementById("link-2");
// const thirdLink = document.getElementById("link-3");

const highlightButton = document.getElementById("highlighter");

// const linkList = [firstLink, secondLink, thirdLink];

function linkHighlighter() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const link of anchorElements) {
    link.classList.add("highlight");
  }
}

// for (const link of linkList) {
//   link.classList.add("highlight");
// }

highlightButton.addEventListener("click", linkHighlighter);

//  --------- Third Example: Display User Info

const displayButton = document.querySelector("#user-data button");

const userDetails = {
  name: "Mandula",
  age: 25,
  isAdmin: true,
};

function displayUserData() {
  const listElement = document.getElementById("output-user-data");

  listElement.innerHTML = "";

  for (const propertyName in userDetails) {
    const newListItem = document.createElement("li");
    const outputText =
      propertyName.toUpperCase() + ": " + userDetails[propertyName];
    newListItem.textContent = outputText;

    listElement.append(newListItem);
  }
}

displayButton.addEventListener("click", displayUserData);

// --------- Fourth Example: Roll the Dice

// const rollDiceButton = document.querySelector("#statistics button");

// function rollDice() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// function deriveNumberofDiceRolls() {
//   const targetNumberElement = document.getElementById("user-target-number");
//   const diceRollsListElement = document.getElementById("dice-rolls");

//   const enteredNumber = targetNumberElement.value;
//   diceRollsListElement.innerHTML = "";

//   let hasRolledTargetNumber = false;
//   let numberOfRolls = 0;

//   while (!hasRolledTargetNumber) {
//     const rolledNumber = rollDice();
//     // if (rolledNumber == enteredNumber)
//     //     hasRolledTargetNumber = true
//     // }

//     numberOfRolls++; // numberOfRolls = numberOfRolls + 1
//     const newRollListElement = document.createElement("li");
//     const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
//     newRollListElement.textContent = outputText;
//     diceRollsListElement.append(newRollListElement);
//     hasRolledTargetNumber = (rolledNumber == enteredNumber);
//   }

//   const outputTotalRollsElement = document.getElementById("output-total-rolls");
//   const outputTargetNumberElement = document.getElementById(
//     "output-target-number"
//   );

//   outputTargetNumberElement.textContent = enteredNumber;
//   outputTotalRollsElement.textContent = numberOfRolls;
// }

// rollDiceButton.addEventListener("click", deriveNumberofDiceRolls);

// --------- Fourth Example: Roll the Dice (by myself)

// locating the elment button
const rollTheDiceButton = document.querySelector("#statistics button");

// creating the functino that spits out numbers between 1-6

function rollDiceOutput() {
  const rolledNumber = Math.floor(Math.random() * 6) + 1;
  return rolledNumber;
}

function numberOfDiceRolls() {
  const inputNumber = document.getElementById("user-target-number").value;
  const outputList = document.getElementById("dice-rolls");

  let rollCount = 0;
  let numberMatch = false;

  outputList.innerHTML = "";

  while (!numberMatch) {
    rollCount = rollCount + 1;
    const rolledValue = rollDiceOutput();
    const newListItem = document.createElement("li");
    const outputText = "Roll " + rollCount + " output:" + rolledValue;
    newListItem.textContent = outputText;

    outputList.append(newListItem);

    numberMatch = rolledValue == inputNumber;
  }

  attemptsCount = document.getElementById("output-total-rolls");
  targetNumber = document.getElementById("output-target-number");

  attemptsCount.textContent = rollCount;
  targetNumber.textContent = inputNumber;
}

// adding the event listener
rollTheDiceButton.addEventListener("click", numberOfDiceRolls);
