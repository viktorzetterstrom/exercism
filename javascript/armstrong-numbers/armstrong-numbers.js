function validate(num) {
  const numStr = String(num);
  const digits = numStr.length;

  const armstrong = Array
    .from(numStr, Number)
    .reduce((sum, num) => sum + num ** digits, 0);

  return num == armstrong
}

module.exports = { validate };