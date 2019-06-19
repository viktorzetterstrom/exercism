const generateNextRow = (row) => {
  const nextRow = [row[0]];
  for (let i = 0; i < row.length - 1; i++) nextRow.push(row[i] + row[i + 1]);
  nextRow.push(row.slice(-1).pop());

  return nextRow;
}

export class Triangle {
  constructor(nRows) {
    this._rows = [[1]];
    for (let row = 1; row < nRows; row++) {
      this._rows[row] = generateNextRow(this._rows[row - 1]);
    }
  }

  get lastRow() {
    return this._rows.slice(-1).pop();
  }

  get rows() {
    return this._rows;
  }
q