import Board from "./Board.js";

let board = new Board(4, 11);
board.birth();
board.birth();
board.birth();
board.birth();
board.birth();
board.birth();
board.birth();
console.log(board.toString());

board.left();
console.log(board.toString());

board.right();
console.log(board.toString());

board.up();
console.log(board.toString());

board.down();
console.log(board.toString());
