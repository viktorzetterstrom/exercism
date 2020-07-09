function range(to: number, from: number = 0): number[] {
  return Array.from({ length: to - from + 1 }, (_, i) => i + from);
}

function sumOfRange(range: number[]) {
  return range.reduce((acc, curr) => acc + curr, 0);
}

function square(num: number): number {
  return Math.pow(num, 2);
}

class Squares {
  constructor(private num: number) {}

  get squareOfSum(): number {
    const sum = sumOfRange(range(this.num));
    return square(sum);
  }

  get sumOfSquares(): number {
    const squares = range(this.num).map(square);
    return sumOfRange(squares);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;
