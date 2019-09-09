// imports
const GridController = require('./controllers/GridController.js');
let readline = require('readline-sync');

console.log('--------------------');
console.log('Welcome to tictactoe');
console.log('Basic 3x3 drawing\n');

let gridCtl = new GridController();
gridCtl.drawGrid();

let turn;
for (let i = 1; i < 10; i++) {
  // set player turn
  if (i % 2 === 0) {
    turn = 'O';
  } else {
    turn = 'X';
  }

  // find the position
  let position;
  let validInp = false;
  while (!validInp) {
    try {
      position = readline.questionInt(`${turn}'s turn. Enter the square you would like to play (0-8): `);
      if (gridCtl.getGridPosVal(position) === ' ') {
        validInp = true;
      } else {
        console.log(`Position ${position} is full. Pick an empty square!`);
      }
    } catch (error) {
      console.log(`Invalid position input (must be number (0-8))!`);
    }
  }
  // add move to grid
  gridCtl.addToGrid(turn, Number(position));
  // print grid
  gridCtl.drawGrid();
  // check for winner
  if (gridCtl.winner()) {
    console.log(`Player ${turn} won!`);
    break;
  } else if (i === 9) { // draw
    console.log('Game is a draw.');
  }
}
console.log(`Game Over!`);
