const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

const colorVal = (color) => {
  const value = COLORS.indexOf(color);
  if (value === -1) {
    throw new Error("invalid color");
  }
  return value;
};

export class ResistorColorTrio {
  constructor([first, second, third]) {
    const zeros = Array(colorVal(third)).fill(0);
    this.value = [colorVal(first), colorVal(second), ...zeros].join("");
  }

  get label() {
    if (this.value > 1000) {
      return `Resistor value: ${this.value / 1000} kiloohms`;
    } else {
      return `Resistor value: ${this.value} ohms`;
    }
  }
}
