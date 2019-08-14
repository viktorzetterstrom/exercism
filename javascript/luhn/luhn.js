export class Luhn {
  constructor(sequence) {
    const numbers = sequence
      .replace(/ /g, '')
      .split('')
      .map(Number)

    const luhnSum = numbers
      .reverse()
      .map((val, i) => {
        if (i % 2 !== 0) val = val * 2;
        return val > 9
          ? val - 9
          : val;
      })
      .reduce((acc, curr) => acc + curr)

    this._valid = (luhnSum % 10 === 0) && (numbers.length > 1);
  }

  get valid() {
    return this._valid;
  }
}