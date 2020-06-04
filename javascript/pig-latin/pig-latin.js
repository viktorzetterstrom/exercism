const vowels = "aouei";
const consonants = "bcdfghjklmnpqrstvwxyz";
const clusters = [`[${consonants}]qu`, "thr", "sch", "ch", "qu", "th", "rh"];

const translateWord = (word) => {
  const clusterRegex = new RegExp(`^(${clusters.join("|")})`, "i");
  const clusterMatch = word.match(clusterRegex);
  if (clusterMatch) {
    const [match] = clusterMatch;
    return `${word.substring(match.length)}${match}ay`;
  }

  const vowelsRegex = new RegExp(`^([${vowels}])`, "i");
  const vowelsExceptionsRegex = /^(xr|yt)/;
  if (vowelsRegex.test(word) || vowelsExceptionsRegex.test(word)) {
    return `${word}ay`;
  }

  const consonantsRegex = new RegExp(`^([${consonants}])`, "i");
  if (consonantsRegex.test(word)) {
    return `${word.substring(1)}${word.substring(0, 1)}ay`;
  }
};

export class translator {
  static translate(str) {
    return str.split(" ").map(translateWord).join(" ");
  }
}
