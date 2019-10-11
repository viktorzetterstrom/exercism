
export class Palindromes {
  constructor(palindromes) {
    this.palindromes = palindromes;
  }

  get smallest() {
    return this.palindromes.reduce((min, curr) => min.value === null || curr.value < min.value
      ? curr 
      : min, { value: null, factors: [] });
  }

  get largest() {
    return this.palindromes.reduce((max, curr) => max.value === null || curr.value > max.value 
      ? curr 
      : max, { value: null, factors: [] });
  }

  static generate({ minFactor, maxFactor }) {
    if (minFactor > maxFactor) throw new Error('min must be <= max');

    const isPalindrome = n => n.toString() === n.toString().split('').reverse().join('');

    const factors = {};
    for (let a = minFactor; a <= maxFactor; a++) {
      for (let b = a; b <= maxFactor; b++) {
        const value = a * b;
        if (isPalindrome(value)) factors[value] = factors[value] !== undefined
          ? [ ...factors[value], [a, b] ]
          : [ [a, b] ];
      }
    }
    return new Palindromes(
      Object.entries(factors).reduce((palindromes, [value, factors]) => 
        [ ...palindromes, { value: Number(value), factors } ]
      , [])
    );
  }
}
