type DNA = "G" | "C" | "T" | "A";
type RNA = "C" | "G" | "A" | "U";
type Strand = string;

class Transcriptor {
  toRna(strand: string): string {
    const dnaStrand = new DnaStrand(strand);
    return dnaStrand.transcribeToRna();
  }
}

class DnaStrand {
  private strand: Strand;

  private readonly toRnaMap: Record<DNA, RNA> = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  constructor(strand: Strand) {
    if (!DnaStrand.isValidStrand(strand)) {
      throw new Error("Invalid input DNA.");
    }
    this.strand = strand;
  }

  public transcribeToRna(): Strand {
    return this.strand.replace(/[ACGT]/g, (match) => {
      return this.toRnaMap[match as DNA];
    });
  }

  public static isValidStrand(dnaStrand: string): boolean {
    return /^[ACGT]+$/.test(dnaStrand);
  }
}

export default Transcriptor;
