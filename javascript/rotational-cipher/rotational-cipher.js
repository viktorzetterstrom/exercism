const charBaseValue = char =>
  /[A-Z]/.test(char) ? "A".charCodeAt(0) : "a".charCodeAt(0);

const calcCharCode = (char, inc) =>
  charBaseValue(char) + ((char.charCodeAt(0) - charBaseValue(char) + inc) % 26);

export class RotationalCipher {
  static rotate(str, inc) {
    return str.replace(/[a-z]/gi, char =>
      String.fromCharCode(calcCharCode(char, inc))
    );
  }
}
