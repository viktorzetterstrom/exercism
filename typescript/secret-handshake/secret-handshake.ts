type HandShakeAction = "wink" | "double blink" | "close your eyes" | "jump";

const handShakeActions: HandShakeAction[] = [
  "wink",
  "double blink",
  "close your eyes",
  "jump",
];

class HandShake {
  private actions: HandShakeAction[];

  constructor(code: number) {
    this.actions = this.createActions(code);
  }

  commands(): HandShakeAction[] {
    return this.actions;
  }

  private createActions(code: number): HandShakeAction[] {
    const binaryCode = code.toString(2);
    const binaryCodeArray = [...binaryCode].reverse(); // reverse for easier handling of digit positions

    const actions = handShakeActions.reduce<HandShakeAction[]>(
      (acc, action, index) =>
        this.binaryDigitIsSet(binaryCodeArray, index) ? [...acc, action] : acc,
      []
    );
    if (this.binaryDigitIsSet(binaryCodeArray, 4)) actions.reverse();

    return actions;
  }

  private binaryDigitIsSet(binaryCodeArray: string[], position: number) {
    return binaryCodeArray[position] === "1";
  }
}

export default HandShake;
