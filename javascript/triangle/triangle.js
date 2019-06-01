class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c
  }

  kind() {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0)
      throw new Error('Sides have to be greater than 0');

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b) throw new Error('Impossible triangle');

    if (this.a === this.b && this.b === this.c) return 'equilateral';

    if (this.a === this.b
      || this.b === this.c
      || this.a === this.c) return 'isosceles';

    return 'scalene';
  }
}

module.exports = { Triangle };
