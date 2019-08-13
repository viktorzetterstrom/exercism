export class NucleotideCounts {
  static parse(str) {
    if (!str.match(/^[ACGT]*$/)) throw new Error('Invalid nucleotide in strand');

    const nucleotides = [...str]
      .reduce((acc, curr) => ({...acc, [curr]: acc[curr] + 1})
        , {A: 0, C: 0, G: 0, T: 0});

    return `${nucleotides.A} ${nucleotides.C} ${nucleotides.G} ${nucleotides.T}`
  }
}
