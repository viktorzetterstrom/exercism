const isAnagramIgnoreCase = (wordA, wordB) => {
  if (wordA.toLowerCase() === wordB.toLowerCase()) return false;

  const lettersA = sortedLetterCount(wordA);
  const lettersB = sortedLetterCount(wordB);
  return JSON.stringify(lettersA) === JSON.stringify(lettersB);
}

const sortedLetterCount = word => [...word.toLowerCase()]
  .sort()
  .reduce((acc, letter) => ({
    ...acc, 
    [letter]: acc[letter]
      ? acc[letter] += 1
      : 1
  }), {});

export class Anagram {
  constructor(word) {
    this._word = word;
  }

  matches(words) {
    return words.filter(word => isAnagramIgnoreCase(this._word, word));
  }
}
