class Pangram {
  private letters: string;

  constructor(sentence: string) {
    this.letters = sentence.toLowerCase().replace(/[^a-z]/g, "");
  }

  isPangram(): boolean {
    return new Set(this.letters).size === 26;
  }
}

export default Pangram;
