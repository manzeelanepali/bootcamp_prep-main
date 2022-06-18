// YOUR CODE BELOW

let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  move: function (char, row, column) {
    if (this.board[row][column] === null) {
      this.board[row][column] = char;
    }
    return this.board;
  },
  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    return this.board;
  },
};
