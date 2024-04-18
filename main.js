let currentSwitch = undefined;

const initialStrikers = ["Mallis", "Jones"];
const initialMidfield = ["Lincoln", "Tom Wadland", "Jarrah", "Jake"];
const initialDefence = ["Batu", "Harry G", "Jack", "Edmo"];
const initialKeeper = ["Jamie"];
const initialSubbed = ["Louis", "McEvoy", "Dan", "Ryan"];

const onButtonClick = (playerButton, player) => {
  if (!currentSwitch) {
    currentSwitch = playerButton;
    currentSwitch.style.backgroundColor = "red";
  } else {
    const oldText = playerButton.textContent;
    playerButton.textContent = currentSwitch.textContent;
    currentSwitch.textContent = oldText;
    currentSwitch.style.backgroundColor = "buttonface";
    currentSwitch = undefined;
  }
};

const addPlayers = (position, players) => {
  const positionWrapper = document.getElementById(position);
  players.forEach((player) => {
    const playerButton = document.createElement("button");
    positionWrapper.appendChild(playerButton);
    playerButton.textContent = player;
    playerButton.onclick = () => onButtonClick(playerButton, player);
  });
};

const addToClick = (newPos) => {
  if (!currentSwitch) {
    return;
  }
  currentSwitch.remove();
  document.getElementById(newPos).appendChild(currentSwitch);
  currentSwitch = undefined;
};

addPlayers("strikers", initialStrikers);
addPlayers("midfield", initialMidfield);
addPlayers("defence", initialDefence);
addPlayers("keeper", initialKeeper);
addPlayers("bench", initialSubbed);

const strikerButton = document.getElementById("strikerAdd");
strikerButton.onclick = () => addToClick("strikers");

const midfieldButton = document.getElementById("midfieldAdd");
midfieldButton.onclick = () => addToClick("midfield");

const defenceAdd = document.getElementById("defenceAdd");
defenceAdd.onclick = () => addToClick("defence");

const keeperButton = document.getElementById("keeperAdd");
keeperButton.onclick = () => addToClick("keeper");

const benchButton = document.getElementById("benchAdd");
benchButton.onclick = () => addToClick("bench");

const sickAdd = document.getElementById("sickAdd");
sickAdd.onclick = () => addToClick("sick");
