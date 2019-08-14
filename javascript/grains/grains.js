import bigInt from './lib/big-integer';

export class Grains {
  square(index) {
    return bigInt(2)
      .pow(index - 1)
      .toString();
  }

  total() {
    return bigInt(2)
      .pow(64)
      .minus(1)
      .toString();
  }
}
