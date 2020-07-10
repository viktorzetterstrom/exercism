export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  public checkValidity() {
    const [side1, side2, side3] = this.sides;
    const hasZeroSide = side1 === 0 && side2 === 0 && side3 === 0;
    const hasNegativeSide = side1 < 0 || side2 < 0 || side3 < 0;

    if (hasZeroSide || hasNegativeSide || !this.hasValidDimensions()) {
      throw new Error("Invalid triangle dimensions");
    }
  }

  public hasValidDimensions() {
    const [shortestSide, middleSide, longestSide] = this.sides.sort(
      (a, b) => a - b
    );
    return shortestSide + middleSide >= longestSide;
  }

  public isEquilateral() {
    const [side1, side2, side3] = this.sides;
    return side1 === side2 && side2 === side3;
  }

  public isIsosceles() {
    const [side1, side2, side3] = this.sides;
    return (
      !this.isEquilateral() &&
      (side1 === side2 || side1 === side3 || side2 === side3)
    );
  }

  public isScalene() {
    return !this.isEquilateral() && !this.isIsosceles();
  }

  kind() {
    this.checkValidity();

    if (this.isEquilateral()) return "equilateral";
    if (this.isIsosceles()) return "isosceles";
    if (this.isScalene()) return "scalene";
  }
}
