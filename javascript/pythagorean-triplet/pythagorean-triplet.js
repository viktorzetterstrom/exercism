
export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return this.a < this.b < this.c
      && this.a ** 2 + this.b ** 2 === this.c ** 2;
  }

  static where({ minFactor = 1, maxFactor, sum = null }) {
    const triplets = [];
    for (let a = minFactor; a <= maxFactor; a++) {
      for (let b = a + 1; b <= maxFactor; b++) {
        for (let c = b + 1; c <= maxFactor; c++) {
          const triplet = new Triplet(a, b, c);

          if (triplet.isPythagorean() 
            && (sum === null || triplet.sum() === sum)) {
              triplets.push(triplet);
            }
        }
      }
    }

    return triplets;
  }
}
