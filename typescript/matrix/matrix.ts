type MatrixString = string;

class Matrix {
  readonly rows: number[][];

  constructor(matrix: MatrixString) {
    this.rows = matrix.split("\n").map((row) => row.split(" ").map(Number));
  }

  get columns(): number[][] {
    return this.rows[0].map((_, colIndex) =>
      this.rows.map((row) => row[colIndex])
    );
  }
}

export default Matrix;
