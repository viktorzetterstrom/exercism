export const isValid = (candidate) => {
  const numbers = candidate.split("").reduce((acc, char, i) => {
    const isCheckDigit = char === "X" && i === candidate.length - 1;
    if (isCheckDigit) return [...acc, 10];
    if (/\d/.test(char)) return [...acc, char];
    return acc;
  }, []);

  if (numbers.length !== 10) {
    return false;
  }

  let isbnSum = numbers.reduceRight((sum, curr, i) => sum + curr * (i + 1), 0);
  return isbnSum % 11 === 0;
};
