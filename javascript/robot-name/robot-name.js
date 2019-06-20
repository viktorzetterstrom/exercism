const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randLet = () => letters.charAt(Math.floor(Math.random() * letters.length));
const numbers = '0123456789';
const randNum = () => numbers.charAt(Math.floor(Math.random() * numbers.length));



export class Robot {
  constructor() {
    this._name = Robot.generateName();
  }

  reset() {
    this._name = Robot.generateName();
  }

  get name() {
    return this._name;
  }

  set name(_) {
    throw new Error();
  }

  static generateName() {
    let name = randLet() + randLet() + randNum() + randNum() + randNum();
    while (Robot.usedNames.has(name)) {
      name = randLet() + randLet() + randNum() + randNum() + randNum();
    }
    Robot.usedNames.add(name);
    return name;
  }
}

Robot.usedNames = new Set();

Robot.releaseNames = () => { Robot.usedNames = new Set() };
