//Grabbing h1 element
let h1 = document.getElementById("head");

//Getting the cell
let cellA1 = document.getElementById("a1");
let cellA2 = document.getElementById("a2");
let cellA3 = document.getElementById("a3");
let cellB1 = document.getElementById("b1");
let cellB2 = document.getElementById("b2");
let cellB3 = document.getElementById("b3");
let cellC1 = document.getElementById("c1");
let cellC2 = document.getElementById("c2");
let cellC3 = document.getElementById("c3");

//Adding cells to an array
const cells = [
  cellA1,
  cellA2,
  cellA3,
  cellB1,
  cellB2,
  cellB3,
  cellC1,
  cellC2,
  cellC3,
];

//Getting Home Screen
const homeScreen = document.getElementById("home-screen");

//Getting the Game Board
const game = document.getElementById("game");

//Getting ScoreBoard
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
console.log(score1);

//Player colors
const player2Color = "#F9D949";
const player1Color = "#F45050";

//player class
class Player {
  constructor(name) {
    this.name = name;
    this.isComputer = false;
    this.score = 0;
    this.isWinner = false;
  }

  //Computer plays in a random active cell
  computerPlay() {
    if (this.isComputer === true) {
      const tempCells = [];
      for (const cell of cells) {
        if (checkCell(cell) === true) {
          tempCells.push(cell);
        }
      }
      let randNum = Math.floor(Math.random() * tempCells.length);
      this.play(tempCells[randNum]);
    }
  }

  //Calls checkCell then places x or o in cell
  play(cell) {
    if (checkCell(cell) === true) {
      if (playerTurn === 0) {
        cell.style.color = player1Color;
      } else {
        cell.style.color = player2Color;
      }
      cell.textContent = this.name;
      cell.classList.remove("is-active");
      cell.classList.add("is-deactivated");
    } else {
      return;
    }
  }
}

//Game functions
//End the Game, deactivates all active cells
function endGame(state) {
  for (const cell of cells) {
    if (cell.classList.contains("is-active")) {
      cell.classList.remove("is-active");
      cell.classList.add("is-deactivated");
    }
  }
  if (state === "player1") {
    h1.textContent = "Player 1 Wins!!";
    h1.style.color = player1Color;
    player1.isWinner = true;
    player1.score++;
    console.log(player1.score);
    drawTally(player1.score, score1);
  } else if (state === "player2") {
    h1.textContent = "Player 2 Wins!!";
    h1.style.color = player2Color;
    player2.isWinner = true;
    player2.score++;
    drawTally(player2.score, score2);
  } else {
    h1.textContent = "It's a Tie!!";
    h1.style.color = 'white';
  }
}

//Checks wether the cell is active returns a boolean
function checkCell(cell) {
  if (cell === undefined) {
    return;
  }
  if (cell.classList.contains("is-active")) {
    // console.log("cell is available " + cell.id);
    return true;
  } else {
    // console.log("cell is not available " + cell.id);
    return false;
  }
}

//Resets the game board
function resetBoard() {
  for (const cell of cells) {
    //removes all text, sets the cells back to active, resets number of turns, and player
    cell.textContent = " ";
    cell.classList.remove("is-deactivated");
    cell.classList.add("is-active");
    player1.isWinner = false;
    player2.isWinner = false;
    playerTurn = 0;
    turns = 0;
    h1.style.color = "white";
    h1.textContent = "Player 1(X)'s turn";
  }
  console.log("reseting board");
}

//Checks for every winning condition on both players, and also checks for a tie
function checkForwinner() {
  if (player1.isWinner === false) {
    if (
      cellA1.textContent === "X" &&
      cellA2.textContent === "X" &&
      cellA3.textContent === "X"
    ) {
      console.log("Player1 is the winner!");
      endGame("player1");
    } else if (
      cellB1.textContent == "X" &&
      cellB2.textContent === "X" &&
      cellB3.textContent === "X"
    ) {
      console.log("Player1 is the winner!");

      endGame("player1");
    } else if (
      cellC1.textContent == "X" &&
      cellC2.textContent === "X" &&
      cellC3.textContent === "X"
    ) {
      console.log("Player1 is the winner!");

      endGame("player1");
    } else if (
      cellA1.textContent == "X" &&
      cellB1.textContent === "X" &&
      cellC1.textContent === "X"
    ) {
      console.log("Player1 is the winner!");

      endGame("player1");
    } else if (
      cellA2.textContent == "X" &&
      cellB2.textContent === "X" &&
      cellC2.textContent === "X"
    ) {
      console.log("Player1 is the winner!");

      endGame("player1");
    } else if (
      cellA3.textContent == "X" &&
      cellB3.textContent === "X" &&
      cellC3.textContent === "X"
    ) {
      console.log("Player1 is the winner!");

      endGame("player1");
    } else if (
      cellA1.textContent == "X" &&
      cellB2.textContent === "X" &&
      cellC3.textContent === "X"
    ) {
      console.log("Player1 is the winner!");

      endGame("player1");
    } else if (
      cellA3.textContent == "X" &&
      cellB2.textContent === "X" &&
      cellC1.textContent === "X"
    ) {
      console.log("Player1 is the winner!");

      endGame("player1");
    } else {
      player1.isWinner = false;
    }
  }
  if (player2.isWinner === false) {
    if (
      cellA1.textContent == "O" &&
      cellA2.textContent === "O" &&
      cellA3.textContent === "O"
    ) {
      cconsole.log("player2 is the winner!");

      endGame("player2");
    } else if (
      cellB1.textContent == "O" &&
      cellB2.textContent === "O" &&
      cellB3.textContent === "O"
    ) {
      console.log("player2 is the winner!");

      endGame("player2");
    } else if (
      cellC1.textContent == "O" &&
      cellC2.textContent === "O" &&
      cellC3.textContent === "O"
    ) {
      console.log("player2 is the winner!");

      endGame("player2");
    } else if (
      cellA1.textContent == "O" &&
      cellB1.textContent === "O" &&
      cellC1.textContent === "O"
    ) {
      console.log("player2 is the winner!");

      endGame("player2");
    } else if (
      cellA2.textContent == "O" &&
      cellB2.textContent === "O" &&
      cellC2.textContent === "O"
    ) {
      console.log("player2 is the winner!");

      endGame("player2");
    } else if (
      cellA3.textContent == "O" &&
      cellB3.textContent === "O" &&
      cellC3.textContent === "O"
    ) {
      console.log("player2 is the winner!");

      endGame("player2");
    } else if (
      cellA1.textContent == -"O" &&
      cellB2.textContent === "O" &&
      cellC3.textContent === "O"
    ) {
      console.log("player2 is the winner!");

      endGame("player2");
    } else if (
      cellA3.textContent === "O" &&
      cellB2.textContent === "O" &&
      cellC1.textContent === "O"
    ) {
      console.log("player2 is the winner!");

      endGame("player2");
    } else {
      player2.isWinner = false;
    }
  }

  checkForTie();
}

//Check for a tie if exceeding max number of rounds and no winner yet
function checkForTie() {
  if (turns >= 9) {
    if (player1.isWinner === false && player2.isWinner === false) {
      // console.log("Game is a tie");
      endGame("tie");
    }
  }
}

//Scoreboard Fucntion creates tally marks
function drawTally(num, playerSide){
  let tally = "";
  let newNum;
  if(num === 0){
      return;
  }
  if(playerSide.hasChildNodes){
    playerSide.innerHTML = " ";
  }
  if(num < 5){
      for(let i = 0; i < num; i++){
          tally +='|';
      }
      let p = document.createElement('p');
      p.textContent = tally;
      playerSide.append(p);
  }else{
      if(num % 5 === 0){
          newNum = num / 5;
          for(let i = 0; i < newNum; i++){
              tally +='||||';
              let p = document.createElement('p');
              p.textContent = tally;
              p.style.textDecoration = 'line-through';
              playerSide.append(p);
              tally = "";
          }
      }else{
          newNum = Math.floor(num / 5);
          for(let i = 0; i < newNum; i++){
              tally +='||||';
              let p = document.createElement('p');
              p.textContent = tally;
              p.style.textDecoration = 'line-through';
              playerSide.append(p);
              tally = "";
      }
        newNum = num % 5;
        for(let i = 0; i < newNum; i++){
          tally +='|';
      }
      let p = document.createElement('p');
      p.textContent = tally;
      playerSide.append(p);
  }

}
}

//Player instances
const player1 = new Player("X");
const player2 = new Player("O");

let playerTurn = 0; // 0 = player 1, 1 = player 2
let turns = 1;
h1.textContent = "Player 1(X)'s turn";

game.style.display = "none";
//Starting Menu
homeScreen.addEventListener("click", function (event) {
  if (event.target === document.getElementById("single")) {
    resetBoard();
    player2.isComputer = true;
    homeScreen.style.display = "none";
    game.style.removeProperty("display");
  } else if (event.target === document.getElementById("double")) {
    resetBoard();
    player2.isComputer = false;
    homeScreen.style.display = "none";
    game.style.removeProperty("display");
  }
});

//Game
game.addEventListener("click", function (event) {
  if (playerTurn === 0) {
    if (event.target.classList.contains("is-active")) {
      h1.textContent = "Player 2(O)'s turn";
      console.log("Player 1 turn");
      player1.play(event.target);
      playerTurn = 1;
      turns++;
      console.log(turns);
      checkForwinner("player1");
      if (player2.isComputer === true) {
        player2.computerPlay();
        playerTurn = 0;
        turns++;
        // console.log(turns);
        checkForwinner("player2");
      }
    } else {
      console.log("Try again");
    }
  } else {
    if (player2.isComputer === false) {
      if (event.target.classList.contains("is-active")) {
        h1.textContent = "Player 1(X)'s turn";
        console.log("Player 2 turn");
        player2.play(event.target);
        playerTurn = 0;
        turns++;
        console.log(turns);
        checkForwinner("player2");
      } else {
        console.log("Try again");
      }
    }
  }
});

//Resets the board on clicking the reset button
document.getElementById("reset").addEventListener("click", () => resetBoard());

//Returns to the home screen when clicked and clears the scoreboard
document.getElementById("home").addEventListener("click", function () {
  player2.isComputer = false;
  game.style.display = "none";
  homeScreen.style.removeProperty("display");
  score1.innerHTML =" ";
  score2.innerHTML =" ";
  player1.score = 0;
  player2.score2 = 0;
});

