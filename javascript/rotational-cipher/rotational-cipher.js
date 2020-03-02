const ignoredChars = " 12345678'!.,";

const charBaseValue = char => {
  if ("abcdefghijklmnopqrstuvwxyz".includes(char)) return 97;
  else if ("ABCDEFGIHJKLMNOPQRSTUVWXYZ".includes(char)) return 65;
  else return 0;
};

const calcCharCode = (char, inc) =>
  charBaseValue(char) + ((char.charCodeAt(0) - charBaseValue(char) + inc) % 26);

const incChar = (char, inc) =>
  ignoredChars.includes(char)
    ? char
    : String.fromCharCode(calcCharCode(char, inc));

export class RotationalCipher {
  static rotate(str, inc) {
    return [...str].map(char => incChar(char, inc)).join("");
  }
}
