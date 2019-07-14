const calculateAliquotSum = num => [...Array(Math.ceil(num / 2))]
  .map((_, i) => i + 1)
  .reduce((sum, curr) => num % curr === 0
    ? sum += curr
    : sum
    , 0);

export const classify = num => {
  if (num <= 0) throw new Error('Classification is only possible for natural numbers.');

  const aliquotSum = calculateAliquotSum(num);
  if (aliquotSum < num || num <= 2) return 'deficient';
  if (aliquotSum > num) return 'abundant';
  if (aliquotSum === num) return 'perfect';
}
