export function reverseString(str) {
  let revStr = '';

  // Loop backwards and add strings to revStr.
  for (let i = str.length - 1; i >= 0; i -= 1) {
    revStr += str[i];
  }
  return revStr;
}
