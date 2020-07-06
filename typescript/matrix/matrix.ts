type MatrixString = string;

class Matrix {
  constructor(private matrixString: MatrixString) {}

  get rows(): number[][] {
    return this.parseRows(this.matrixString);
  }

  get columns(): number[][] {
    return this.transpose(this.rows);
  }

  private parseRows(matrixString: MatrixString): number[][] {
    return matrixString.split("\n").map((row) => row.split(" ").map(Number));
  }

  private transpose(matrix: number[][]): number[][] {
    return matrix[0].map((_, index) => matrix.map((row) => row[index]));
  }
}

export default Matrix;
