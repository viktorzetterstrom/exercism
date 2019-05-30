function encode(str) {
  return str.replace(/(.)\1{1,}/g, captured => captured.length + captured[0]);
}

function decode(str) {
  return str.replace(/(\d+)(\D)/g, 
    (group, amount, char) => new Array(Number(amount) + 1).join(char));
}

module.exports = { encode, decode };
