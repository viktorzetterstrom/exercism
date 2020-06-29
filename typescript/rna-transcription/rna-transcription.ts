type DNA = "G" | "C" | "T" | "A";
type RNA = "C" | "G" | "A" | "U";

class Transcriptor {
  toRna(strand: string): string {
    const dnaStrand = new DnaStrand(strand);
    return dnaStrand.transcribeToRna();
  }
}

class DnaStrand {
  private strand: DNA[];

  private readonly toRnaMap: Record<DNA, RNA> = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  constructor(strand: string) {
    if (!DnaStrand.isValidStrand(strand)) {
      throw new Error("Invalid input DNA.");
    }
    this.strand = strand.split("") as DNA[];
  }

  public transcribeToRna(): string {
    return this.strand.map((n) => this.toRnaMap[n]).join("");
  }

  public static isValidStrand(dnaStrand: string): boolean {
    return /^[ACGT]+$/.test(dnaStrand);
  }
}

export default Transcriptor;
