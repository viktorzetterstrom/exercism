const isAnagram = (wordA, wordB) => 
    wordA.toLowerCase() !== wordB.toLowerCase()
    && normalize(wordA) === normalize(wordB);

const normalize = word => word.toLowerCase()
  .split('')
  .sort()
  .join('');

export class Anagram {
  constructor(word) {
    this._word = word;
  }

  matches(words) {
    return words.filter(word => isAnagram(this._word, word));
  }
}
