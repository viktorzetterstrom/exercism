// Dumb solution but runs all tests in 1s on my MBP2018
export const primeFactors = num => {
  const factors = [];

  let rest = num;
  let divisor = 2;
  while (rest !== 1) {
    if (rest % divisor === 0) {
      factors.push(divisor);
      rest /= divisor;
    } else {
      divisor++;
    }
  }

  return factors;
};
