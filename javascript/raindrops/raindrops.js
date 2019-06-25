export const convert = num => {
  const factors = [...Array(num).keys()]
    .map(n => n + 1)
    .reduce((factors, candidate) => {
      if (num % candidate === 0) factors.push(candidate);
      return factors;
    }, [])

  let sound = '';
  if (factors.includes(3)) sound += 'Pling';
  if (factors.includes(5)) sound += 'Plang';
  if (factors.includes(7)) sound += 'Plong';
  return sound || String(num);
};
