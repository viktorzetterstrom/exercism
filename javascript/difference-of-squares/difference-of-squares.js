export class Squares {
  constructor(num) {
    this._numbers = [...Array(num)].map((_, i) => i + 1);
  }

  get sumOfSquares() {
    return this._numbers.reduce((sum, n) => sum += n ** 2, 0);
  }

  get squareOfSum() {
    return this._numbers.reduce((sum, n) => sum += n, 0) ** 2
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
