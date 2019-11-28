
export const saddlePoints = matrix => {
  const saddlePoints = [];
  matrix.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      const column = matrix.map((r) => r[colIndex]);
      if (Math.max(...row) === value
        && Math.min(...column) === value) {
        saddlePoints.push({
          row: rowIndex + 1,
          column: colIndex + 1,
        });
      }
    });
  });
  return saddlePoints;
}
