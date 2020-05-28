const CORNER = "+";
const VERTICAL = "|";
const HORIZONTAL = "-";

const isValidVertical = (point) => point === CORNER || point === VERTICAL;
const isValidHorizontal = (point) => point === CORNER || point === HORIZONTAL;

const isValidColumn = (col, row1, row2, matrix) => {
  for (let i = row1; i < row2; i++) {
    if (!isValidVertical(matrix[i][col])) {
      return false;
    }
  }
  return true;
};

export class Rectangles {
  static count(rows) {
    const matrix = rows.map((row) => [...row]);
    if (matrix.length === 0 || matrix[0].length === 0) return 0;

    const pairs = [];
    const rowsLength = matrix.length;
    const columnsLength = matrix[0].length;
    for (let row = 0; row < rowsLength; row++) {
      for (let start = 0; start < columnsLength; start++) {
        if (matrix[row][start] === CORNER) {
          for (let end = start + 1; end < columnsLength; end++) {
            if (!isValidHorizontal(matrix[row][end])) {
              break;
            }
            if (matrix[row][end] === CORNER) {
              pairs.push({ row, start, end });
            }
          }
        }
      }
    }

    let rectangleCount = 0;
    for (let i = 0; i < pairs.length; i++) {
      for (let j = i + 1; j < pairs.length; j++) {
        if (
          pairs[i].row !== pairs[j].row &&
          pairs[i].start === pairs[j].start &&
          pairs[i].end === pairs[j].end &&
          isValidColumn(pairs[i].start, pairs[i].row, pairs[j].row, matrix) &&
          isValidColumn(pairs[i].end, pairs[i].row, pairs[j].row, matrix)
        ) {
          rectangleCount++;
        }
      }
    }

    return rectangleCount;
  }
}
