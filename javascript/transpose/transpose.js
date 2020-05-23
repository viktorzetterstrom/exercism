
export const transpose = (matrix) => {
  const formattedMatrix = matrix
    .map(row => {
      const maxRowLength = Math.max(...matrix.map(row => row.length))
      return row.padEnd(maxRowLength, ' ');
    });

  const transposed = [...formattedMatrix[0]]
    .map((_, i) => formattedMatrix.map((row) => row[i]))
    .map(row => row.join(''));

  transposed[transposed.length - 1] = transposed[transposed.length - 1].trimEnd();
  return transposed;
}