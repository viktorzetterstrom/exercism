
export const matchingBrackets = str => {
  let invalid = false;
  const bracketStack = [];
  const matchingBracket = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  str.replace(/[^([{}\])]+/g, '')
    .split('')
    .forEach(bracket => {
      switch(bracket) {
        case '(':
        case '[':
        case '{': bracketStack.push(bracket); break;
        case matchingBracket[bracketStack[bracketStack.length - 1]]: bracketStack.pop(); break;
        default: invalid = true;
      }
  });
  return !invalid && bracketStack.length === 0;
};
