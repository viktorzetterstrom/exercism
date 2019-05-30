const formatError = new Error('Input has wrong format');
const inputBaseError = new Error('Wrong input base');
const outputBaseError = new Error('Wrong output base');

function isValidBase(base) {
  return (Number.isInteger(base)) && (base >= 2);
}

function isValidDigitArray(digitArr) {
  return digitArr.length !== 0
    && digitArr[0] !== 0 
    && digitArr.length >= 1;
}

function isZeroDigitArray(digitArr) {
  return (digitArr.length === 1) && (digitArr[0] === 0);
}

function calcBase10Sum(digitArr, inputBase) {
  return digitArr.reduce(
    (sum, digit, index, arr) =>{
      const maxValidDigit = inputBase - 1
      if (digit < 0 || maxValidDigit < digit) throw formatError;
      return sum + digit * inputBase**(arr.length - index - 1)
    } , 0);
}

function convert(digitArr, inputBase, outputBase) {
  if (!isValidBase(inputBase)) throw inputBaseError;
  else if (!isValidBase(outputBase)) throw outputBaseError;
  else if (isZeroDigitArray(digitArr)) return [ 0 ];
  else if (!isValidDigitArray(digitArr)) throw formatError;

  let base10 = calcBase10Sum(digitArr, inputBase)

  const convertedArr = [];
  while (base10 > 0) {
    const remainder = base10 % outputBase
    convertedArr.unshift(remainder);
    base10 = Math.floor(base10 / outputBase);
  }

  return convertedArr;
}

module.exports = { convert };
