var gameBoard = {};

var tool = {};
tool.currentTool = "shovel";

gameBoard.createContainerAndRow = function createContainerAndRow() {
  var body = document.getElementsByTagName("body");
  var container = document.createElement("div");
  container.classList.add(
    "container",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  var row = document.createElement("div");
  row.classList.add(
    "row",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  var gameBoard = document.createElement("div");
  gameBoard.classList.add("col-12");
  body[0].prepend(container);
  container.prepend(row);
  row.prepend(gameBoard);

  // delete -- this is just for initial building and testing
  var dirtSquare = document.createElement("span");
  dirtSquare.classList.add("dirt");
  dirtSquare.addEventListener("click", changeToSky);
  // delete -- this is just for initial building and testing
  var skySquare = document.createElement("span");
  skySquare.classList.add("sky");
  skySquare.addEventListener("click", changeToSky);
  // delete -- this is just for initial building and testing
  var selectShovel = document.createElement("span");
  selectShovel.id = "shovel";
  selectShovel.classList.add("shovel");
  selectShovel.addEventListener("click", tool.selectTool);
  // delete -- this is just for initial building and testing
  var selectPicaxe = document.createElement("span");
  selectPicaxe.id = "picaxe";
  selectPicaxe.classList.add("picaxe");
  selectPicaxe.addEventListener("click", tool.selectTool);

  row.append(dirtSquare, skySquare, selectShovel, selectPicaxe);
};

tool.selectTool = function selectTool(e) {
  tool.currentTool = e.target.id;
  console.log(tool.currentTool);
};

function changeToSky(e) {
  if (tool.currentTool === "shovel" && e.target.classList.contains("dirt")) {
    console.log(e.target);
    gameBoard.removeDirt();
  } else if (
    tool.currentTool === "picaxe" &&
    e.target.classList.contains("rock")
  ) {
    console.log(e.target);
    // remove rock class
    // add sky class
  }
}

gameBoard.removeDirt = function removeDirt() {
  // remove dirt class
  // add sky class
};

gameBoard.createContainerAndRow();
