
export class SpiralMatrix {

  static ofSize(size) {
    const matrix = Array.from(Array(size), () => Array(size).fill());
    let num = 1;
    let top = 0, bottom = size - 1;
    let left = 0, right = size - 1;

    while (true) {
      if (left > right) break;
      for (let i = left; i <= right; i++) matrix[top][i] = num++;
      top++;

      if (top > bottom) break;
      for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
      right--;

      if (left > right) break;
      for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
      bottom--;

      if (top > bottom) break;
      for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
      left++;
    }

    return matrix;
  }
}
