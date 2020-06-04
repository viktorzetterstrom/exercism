const vowelStart = /^([aeiou]|xr|yt)/;
const consonantStart = /^(s?qu|thr?|s?ch|rh|[bcdfghjklmnpqrstvwxyz])/;

const translateWord = (word) => {
  if (vowelStart.test(word)) {
    return `${word}ay`;
  }

  const [match] = word.match(consonantStart);
  if (match) {
    return `${word.replace(consonantStart, "")}${match}ay`;
  }
};

export class translator {
  static translate(str) {
    return str.split(" ").map(translateWord).join(" ");
  }
}
