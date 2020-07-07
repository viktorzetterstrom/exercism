class RobotName {
  private static usedNames = new Set();
  private readonly A_CHARCODE = 62;
  private readonly Z_CHARCODE = 90;
  public name: string;

  constructor() {
    this.name = this.generateName();
  }

  public resetName(): void {
    this.name = this.generateName();
  }

  private generateName(): string {
    let uniqueName = false;
    let name = "";
    while (!uniqueName) {
      const letters = this.generateRandomLetter() + this.generateRandomLetter();
      const numbers = this.generateRandomNumber(0, 999);
      name = letters + String(numbers).padStart(3, "0");
      uniqueName = !RobotName.usedNames.has(name);
    }

    RobotName.usedNames.add(name);
    return name;
  }

  private generateRandomLetter(): string {
    const charCode = this.generateRandomNumber(
      this.A_CHARCODE,
      this.Z_CHARCODE
    );
    return String.fromCharCode(charCode);
  }

  // Generates number between: min <= digit <= max
  private generateRandomNumber(min: number, max: number): number {
    const difference = max - min;
    return min + Math.floor(Math.random() * difference + 1);
  }
}

export default RobotName;
