class Pangram {
  constructor(public sentence: string) {}

  isPangram(): boolean {
    const letters = this.sentence.toLowerCase().replace(/[^a-z]/g, "");
    return new Set(letters).size === 26;
  }
}

export default Pangram;
