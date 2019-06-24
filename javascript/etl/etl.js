export const transform = old => {
  let transformed = {};
  for (let points in old)
    for (let letter of old[points])
      transformed[letter.toLowerCase()] = Number.parseInt(points);

  return transformed;
};
