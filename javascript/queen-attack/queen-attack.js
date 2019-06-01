class QueenAttack {
  constructor(coords) {
    this.white = coords
      ? coords.white
      : [0, 3];
    this.black = coords
      ? coords.black
      : [7, 3];

    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
      throw new Error('Queens cannot share the same space');
    }
  }

  toString() {
    const row = '_ _ _ _ _ _ _ _';
    const lastRow = '_ _ _ _ _ _ _ _\n';
    let board = new Array(7).fill(row);
    board.push(lastRow);
    board = placeQueen(board, this.white, 'W');
    board = placeQueen(board, this.black, 'B');
    return board.join('\n');
  }

  canAttack() {
    if (this.white[0] === this.black[0]) return true;
    if (this.white[1] === this.black[1]) return true;
    const dy = Math.abs(this.white[0] - this.black[0]);
    const dx = Math.abs(this.white[1] - this.black[1]);
    if (dx === dy) return true;

    return false;
  }
}

function placeQueen(board, coords, char) {
  board[coords[0]] = board[coords[0]].substr(0, coords[1] * 2) + char + board[coords[1]].substr(coords[1] * 2 + 1);
  return board;
}

module.exports = { QueenAttack };
