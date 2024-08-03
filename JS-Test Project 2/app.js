// creating variables out of the input field and remaining characters field

const productNameInput = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

//  to find out what properties your html elements have
// console.dir(productNameInput);

// to find out what the maximum amount of characters is from the html itself
// without having to hardcode the value 60
const maxAllowedChars = productNameInput.maxLength;

// create the function that will update the remaining characters
//  "event" is a automatically generated object of JS
function updateRemainingChars(event) {
  //   console.log(event);
  // method 1 - use the assigned variable without using the event object
  //   let enteredText = productNameInput.value;

  //   method 2 - use the event object to get access to the variable
  //    we assigned baove to access the input

  const enteredText = event.target.value;

  //   get the number of characters in a string
  const enteredTextLength = enteredText.length;

  //   find the remainig characters
  const remainingChars = maxAllowedChars - enteredTextLength;

  //   change the text content of that HTML element to the remaining characters
  remainingCharsElement.textContent = remainingChars;
}

productNameInput.addEventListener("input", updateRemainingChars);
