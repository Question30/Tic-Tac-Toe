//Grabbing h2
let h2 = document.getElementById('prompt');

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
const cells = [cellA1, cellA2,  cellA3,
cellB1, cellB2, cellB3, 
cellC1, cellC2, cellC3]

//Getting the Grid
const grid = document.getElementById("grid");

//player class
class Player {
    constructor (name, computer){
        this.name = name;
        this.isComputer = computer; //TODO:: add computer functions play random cell
        this.isWinner = false;
    }

    computerPlay(){
        if(this.isComputer === true){
            const tempCells = [];
            
        }
    }

    //Calls checkCell then places x or o in cell
    play(cell){
      if(checkCell(cell) === true){
        cell.textContent = this.name;
      }else{
        return;
      }
    }
}



//Game functions
    //End the Game, deactivates all active cells
    function endGame(state){
        for (const cell of cells) {
            if(cell.classList.contains('is-active')){
                cell.classList.remove('is-active');
                cell.classList.add('is-deactivated');
            }
        }
        if(state === "player1"){
            h2.textContent = "Player 1 Wins!!";
            h2.style.color ="red";
        }else if(state === "player2"){
            h2.textContent = "Player 2 Wins!!";
            h2.style.color ="Green";
        }else{
            h2.textContent = "It's a Tie!!";
            h2.style.color ="blue";
        }
    }

    //Checks wether the cell is active returns a boolean
    function checkCell(cell){
        if(cell.classList.contains('is-active')){
            console.log("cell is available"); 
            cell.classList.remove('is-active');
            cell.classList.add('is-deactivated');
            return true;
        }else{
            console.log("cell is not available");
            return false;
        }
    }

    //Resets the game board
    function  resetBoard(){
        for (const cell of cells) {
            //removes all text, sets the cells back to active, resets number of turns, and player 
            cell.textContent = " ";
            cell.classList.remove('is-deactivated');
            cell.classList.add('is-active');
            player1.isWinner = false;
            player2.isWinner = false;
            playerTurn = 0;
            turns = 0;
            h2.style.color = "black";
        }
        console.log("reseting board");
    }

    //Checks for every winning condition on both players, and also checks for a tie
    function checkForwinner(){
        if(player1.isWinner === false){
            console.log('we made it');
            if(cellA1.textContent === 'X' && cellA2.textContent === 'X' && cellA3.textContent ==='X'){
                console.log('Player1 is the winner!');
                player1.isWinner = true;
                endGame("player1");
            }else if(cellB1.textContent == 'X' && cellB2.textContent === 'X' && cellB3.textContent ==='X'){
                console.log('Player1 is the winner!');
                player1.isWinner = true;
                endGame("player1");
            }else if(cellC1.textContent == 'X' && cellC2.textContent === 'X' && cellC3.textContent ==='X'){
                console.log('Player1 is the winner!');
                player1.isWinner = true;
                endGame("player1");
            }else if(cellA1.textContent == 'X' && cellB1.textContent === 'X' && cellC1.textContent ==='X'){
                console.log('Player1 is the winner!');
                player1.isWinner = true;
                endGame("player1");
            }else if(cellA2.textContent == 'X' && cellB2.textContent === 'X' && cellC2.textContent ==='X'){
                console.log('Player1 is the winner!');
                player1.isWinner = true;
                endGame("player1");
            }else if(cellA3.textContent == 'X' && cellB3.textContent === 'X' && cellC3.textContent==='X'){
                console.log('Player1 is the winner!');
                player1.isWinner = true;
                endGame("player1");
            }else if(cellA1.textContent == 'X' && cellB2.textContent === 'X' && cellC3.textContent ==='X'){
                console.log('Player1 is the winner!');
                player1.isWinner = true;
                endGame("player1");
            }else if(cellA3.textContent == 'X' && cellB2.textContent === 'X' && cellC1.textContent ==='X'){
                console.log('Player1 is the winner!');
                player1.isWinner = true;
                endGame("player1");
            }else{
                player1.isWinner = false;
            }
        }
        if(player2.isWinner === false){
            if(cellA1.textContent == 'O' && cellA2.textContent === 'O' && cellA3.textContent ==='O'){
                cconsole.log('player2 is the winner!');
                player2.isWinner = true;
                endGame("player2");
            }else if(cellB1.textContent == 'O' && cellB2.textContent === 'O' && cellB3.textContent ==='O'){
                console.log('player2 is the winner!');
                player2.isWinner = true;
                endGame("player2");
            }else if(cellC1.textContent == 'O' && cellC2.textContent === 'O' && cellC3.textContent ==='O'){
                console.log('player2 is the winner!');
                player2.isWinner = true;
                endGame("player2");
            }else if(cellA1.textContent == 'O' && cellB1.textContent === 'O' && cellC1.textContent ==='O'){
                console.log('player2 is the winner!');
                player2.isWinner = true;
                endGame("player2");
            }else if(cellA2.textContent == 'O' && cellB2.textContent === 'O' && cellC2.textContent ==='O'){
                console.log('player2 is the winner!');
                player2.isWinner = true;
                endGame("player2");
            }else if(cellA3.textContent == 'O' && cellB3.textContent === 'O' && cellC3.textContent ==='O'){
                console.log('player2 is the winner!');
                player2.isWinner = true;
                endGame("player2");
            }else if(cellA1.textContent ==- 'O' && cellB2.textContent === 'O' && cellC3.textContent ==='O'){
                console.log('player2 is the winner!');
                player2.isWinner = true;
                endGame("player2");
            }else if(cellA3.textContent === 'O' && cellB2.textContent === 'O' && cellC1.textContent ==='O'){
                console.log('player2 is the winner!');
                player2.isWinner = true;
                endGame("player2");
            }else{
                player2.isWinner = false;
            }
        }

        checkForTie();
    }

    //Check for a tie if exceeding max number of rounds and no winner yet
    function checkForTie(){
        if(turns > 9){
            if(player1.isWinner === false && player2.isWinner === false){
                console.log('Game is a tie');
                endGame("tie");
            }
        }
    }
//Player instances
const player1 = new Player('X', false);
const player2 = new Player('O', false);

let playerTurn = 0; // 0 = player 1, 1 = player 2
let turns = 1;
h2.textContent = "Player 1(X)'s turn";
//Game
grid.addEventListener("click", function(event){
    if(playerTurn === 0){
        h2.textContent = "Player 2(O)'s turn";
        if(event.target.classList.contains('is-active')){
        console.log("Player 1 turn");
        player1.play(event.target);
        playerTurn = 1;
        turns++;
        checkForwinner("player1");
        }else{
            console.log("Try again");
        }
    }else{
        h2.textContent = "Player 1(X)'s turn"
        if(event.target.classList.contains('is-active')){
        console.log("Player 2 turn");
        player2.play(event.target);
        event.target.style.color ="green";
       playerTurn = 0;
       turns++;
       checkForwinner("player2");
    }else{
        console.log("Try again");
    }
    }
}
)


document.getElementById('reset').addEventListener('click', () => resetBoard());






