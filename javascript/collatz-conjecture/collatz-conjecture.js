function steps(num) {
  if (num <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  const evenCollatzCalc = n => n / 2;
  const oddCollatzCalc = n => 3 * n + 1;

  let steps = 0;
  while (num !== 1) {
    if (num % 2 === 0) num = evenCollatzCalc(num);
    else num = oddCollatzCalc(num);
    steps++;
  }
  return steps;
}

module.exports = { steps };
