const ALLERGIES = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats'
];

export class Allergies {
  constructor(num) {
    const allergySelectorArray = (num % 256)
      .toString(2)
      .split('')
      .reverse()
      .map(Number);

    this.allergic = ALLERGIES
      .filter((_, i) => allergySelectorArray[i] === 1);
  }

  list() {
    return this.allergic;
  }

  allergicTo(item) {
    return this.allergic.indexOf(item) !== -1;
  }
}
