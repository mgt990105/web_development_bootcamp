function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // +'1' --> 1
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutput.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    // enteredPlayerName === ''
    event.target.firstElementChild.classList.add("error");
    errorOutput.textContent = "Please enter a valid name!";
    return;
  }
  const updatedPLayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPLayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
