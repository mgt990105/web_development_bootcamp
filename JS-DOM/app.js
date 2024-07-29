let paragraphElement = document.querySelector("p");

function changeText(event) {
  paragraphElement.textContent = "Clicked!";
  console.log(event);
}

paragraphElement.addEventListener("click", changeText);

let searchBox = document.querySelector("input");

function retrieveUserInput(event) {
  //   let enteredText = searchBox.value;
  let enteredText = event.target.value; // --> "event.target" gives "searchBox"
  //   let enteredText = event.data; --> this is different

  console.log(enteredText);
  //   console.log(event);
}

searchBox.addEventListener("input", retrieveUserInput);
