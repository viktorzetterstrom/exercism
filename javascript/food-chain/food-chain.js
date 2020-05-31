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

export class Song {
  verse(nr) {
    const food = nr !== 8 ? FOOD.slice(0, nr).reverse() : FOOD.slice(7, 8);

    let verse = "";
    for (let i = 0; i < food.length; i++) {
      const currentFood = food[i];
      const previousFood = food[i - 1];

      let foodLine = !previousFood
        ? `I know an old lady who swallowed a ${currentFood.type}`
        : `She swallowed the ${previousFood.type} to catch the ${currentFood.type}`;
      foodLine += i > 0 && currentFood.extra ? ` ${currentFood.extra}` : "";
      foodLine += ".";

      const lines = [foodLine];
      if (i === 0 || i === nr - 1) {
        lines.push(currentFood.comment);
      }
      lines.push(""); // Has to end with empty line

      verse += lines.join("\n");
    }
    return verse;
  }

  verses(from, to) {
    return (
      Array.from(new Array(to - from + 1), (_, i) => i + from)
        .map(this.verse)
        .join("\n") + "\n"
    );
  }
}
