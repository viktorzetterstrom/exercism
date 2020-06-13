const ColorValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

type Color = keyof typeof ColorValues;

export class ResistorColor {
  private colors: Color[];
  constructor(colors: Color[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors.slice(0, 2);
  }

  value = (): number => {
    const first = ColorValues[this.colors[0]];
    const second = ColorValues[this.colors[1]];
    return first * 10 + second;
  };
}
