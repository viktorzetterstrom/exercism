type DNA = "G" | "C" | "T" | "A";
type RNA = "C" | "G" | "A" | "U";

const dnaToRnaMap: Record<DNA, RNA> = Object.freeze({
  G: "C",
  C: "G",
  T: "A",
  A: "U",
});

class Transcriptor {
  toRna(dnaStrand: string): string {
    if (!this.isValidDnaStrand(dnaStrand)) {
      throw new Error("Invalid input DNA.");
    }
    return dnaStrand
      .split("")
      .map((n) => dnaToRnaMap[n as DNA])
      .join("");
  }

  private isValidDnaStrand(dnaStrand: string): dnaStrand is DNA {
    return /^[ACGT]+$/.test(dnaStrand);
  }
}

export default Transcriptor;
