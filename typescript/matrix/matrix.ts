type MatrixString = string;

class Matrix {
  readonly rows: number[][];

  constructor(matrix: MatrixString) {
    this.rows = this.createRows(matrix);
  }

  get columns(): number[][] {
    return this.transpose(this.rows);
  }

  private createRows(matrix: MatrixString): number[][] {
    return matrix.split("\n").map((row) => row.split(" ").map(Number));
  }

  private transpose(matrix: number[][]): number[][] {
    return matrix[0].map((_, index) => matrix.map((row) => row[index]));
  }
}

export default Matrix;
