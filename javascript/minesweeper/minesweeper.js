const MINE = '*'

function annotate(board) {

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === MINE) continue;

      let mineCount = 0;

      if (board[y - 1]) {
        if (board[y - 1][x - 1] === MINE) mineCount++;
        if (board[y - 1][x] === MINE) mineCount++;
        if (board[y - 1][x + 1] === MINE) mineCount++;
      }

      if (board[y][x + 1] === MINE) mineCount++;
      if (board[y][x - 1] === MINE) mineCount++;

      if (board[y + 1]) {
        if (board[y + 1][x - 1] === MINE) mineCount++;
        if (board[y + 1][x] === MINE) mineCount++;
        if (board[y + 1][x + 1] === MINE) mineCount++;
      }

      if (mineCount > 0) {
        board[y] = board[y].substr(0, x) + mineCount + board[y].substr(x + 1);
      }
    }
  }

  return board;
}

module.exports = { annotate };
