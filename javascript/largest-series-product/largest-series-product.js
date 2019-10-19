
export const largestProduct = (series, size) => {
  if (/\D/.test(series) || size < 0) throw new Error('Invalid input.');
  if (size > series.length) throw new Error('Slice size is too big.');
  if (series === '' && size === 0) return 1;

  const numberSeries = [...series].map(Number);
  return numberSeries
    .filter((_, i) => i < series.length - size + 1)
    .map((_, i) =>  numberSeries
      .slice(i, i + size)
      .reduce((acc, curr) => acc * curr, 1))
    .reduce((largest, curr) => curr > largest
      ? curr
      : largest, 0);
};
