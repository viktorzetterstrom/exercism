export const toRna = str => {
  const toRnaMap = new Map([['C', 'G'], ['G', 'C'], ['T', 'A'], ['A', 'U']]);
  return str
    .split('')
    .map(char => toRnaMap.get(char))
    .join('');
};
