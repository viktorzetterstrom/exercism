export class Matrix {
  constructor(matrixStr) {
    this._matrix = matrixStr
      .split('\n')
      .map(row => row
        .split(' ')
        .map(n => Number.parseInt(n)));
  }

  get rows() {
    return this._matrix;
  }

  get columns() {
    return this._matrix[0]
      .map((_, i) => this._matrix.map(row => row[i]));
  }
}
