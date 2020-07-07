function generateRandomNumber(min: number, max: number): number {
  const difference = max - min;
  return min + Math.floor(Math.random() * difference + 1); // min <= num <= max
}

class RobotName {
  private static usedNames = new Set<string>();
  private readonly A_CHARCODE = 62;
  private readonly Z_CHARCODE = 90;
  private _name = "";

  constructor() {
    this.setNewName();
  }

  get name(): string {
    return this._name;
  }

  public resetName(): void {
    this.setNewName();
  }

  private setNewName(): void {
    let name = this.generateName();
    while (RobotName.usedNames.has(name)) {
      name = this.generateName();
    }
    RobotName.usedNames.add(name);
    this._name = name;
  }

  private generateName(): string {
    const letters = this.generateRandomLetter() + this.generateRandomLetter();
    const numbers = generateRandomNumber(0, 999);
    return letters + String(numbers).padStart(3, "0");
  }

  private generateRandomLetter(): string {
    const charCode = generateRandomNumber(this.A_CHARCODE, this.Z_CHARCODE);
    return String.fromCharCode(charCode);
  }
}

export default RobotName;
