const FOOD = Object.freeze([
  {
    type: "fly",
    comment: "I don't know why she swallowed the fly. Perhaps she'll die.",
  },
  {
    type: "spider",
    comment: "It wriggled and jiggled and tickled inside her.",
    extra: "that wriggled and jiggled and tickled inside her",
  },
  {
    type: "bird",
    comment: "How absurd to swallow a bird!",
  },
  {
    type: "cat",
    comment: "Imagine that, to swallow a cat!",
  },
  {
    type: "dog",
    comment: "What a hog, to swallow a dog!",
  },
  {
    type: "goat",
    comment: "Just opened her throat and swallowed a goat!",
  },
  {
    type: "cow",
    comment: "I don't know how she swallowed a cow!",
  },
  {
    type: "horse",
    comment: "She's dead, of course!",
  },
]);

const swallowFirst = ({ type }) =>
  `I know an old lady who swallowed a ${type}.`;

const swallow = (current, previous, includeExtra) => {
  let str = `She swallowed the ${previous.type} to catch the ${current.type}`;
  if (includeExtra && current.extra) str += ` ${current.extra}`;
  str += ".";
  return str;
};

export class Song {
  verse(verseNumber) {
    if (verseNumber < 1 || 8 < verseNumber) {
      throw new Error("Invalid verse number");
    }
    if (verseNumber === 8) {
      const horse = FOOD[verseNumber - 1];
      return `${swallowFirst(horse)}\n${horse.comment}\n`;
    }

    const food = FOOD.slice(0, verseNumber).reverse();
    let lines = [];
    const firstFood = food[0];
    lines.push(swallowFirst(firstFood));
    lines.push(firstFood.comment);

    for (let i = 1; i < food.length; i++) {
      const currentFood = food[i];
      const previousFood = food[i - 1];
      const includeExtra = i > 0;
      lines.push(swallow(currentFood, previousFood, includeExtra));
    }

    if (verseNumber !== 1) {
      lines.push(food[food.length - 1].comment);
    }

    lines.push(""); // Has to end with empty line
    return lines.join("\n");
  }

  verses(from, to) {
    return (
      Array.from(new Array(to - from + 1), (_, i) => i + from)
        .map(this.verse)
        .join("\n") + "\n"
    );
  }
}
