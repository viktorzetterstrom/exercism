const oneTheWall = (bottles) => {
  if (bottles > 1) {
    return `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`;
  }
  if (bottles === 1) {
    return `1 bottle of beer on the wall, 1 bottle of beer.`;
  }
  if (bottles === 0) {
    return "No more bottles of beer on the wall, no more bottles of beer.";
  }
  throw new Error("Bad input");
};

const takeOneDown = (bottles) => {
  if (bottles > 2) {
    return `Take one down and pass it around, ${
      bottles - 1
    } bottles of beer on the wall.`;
  }
  if (bottles === 2) {
    return "Take one down and pass it around, 1 bottle of beer on the wall.";
  }
  if (bottles === 1) {
    return "Take it down and pass it around, no more bottles of beer on the wall.";
  }
  if (bottles === 0) {
    return "Go to the store and buy some more, 99 bottles of beer on the wall.";
  }
  throw new Error("Bad input");
};

export const recite = (initialBottlesCount, takeDownCount) => {
  let song = [];
  const endBottlesCount = initialBottlesCount - takeDownCount + 1;
  for (let i = initialBottlesCount; i >= endBottlesCount; i--) {
    song.push(oneTheWall(i), takeOneDown(i));
    if (i > endBottlesCount) {
      song.push("");
    }
  }
  return song;
};
