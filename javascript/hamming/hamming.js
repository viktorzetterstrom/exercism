
export const compute = (dna, compare) => {
  if (dna.length === 0 && compare.length !== 0) throw new Error('left strand must not be empty');
  if (dna.length !== 0 && compare.length === 0) throw new Error('right strand must not be empty');
  if (dna.length !== compare.length) throw new Error('left and right strands must be of equal length');

  return dna
  .split('')
  .reduce((acc, curr, i) =>
    acc + (curr !== compare[i] ? 1 : 0), 0);
}
