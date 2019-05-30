
// AUG Methionine
// UUU, UUC Phenylalanine
// UUA, UUG Leucine
// UCU, UCC, UCA, UCG Serine
// UAU, UAC Tyrosine
// UGU, UGC Cysteine
// UGG Tryptophan
// UAA, UAG, UGA STOP

const CODON_PROTEIN_MAP = new Map([
  ['AUG', 'Methionine'],
  ['UUU', 'Phenylalanine'],
  ['UUC', 'Phenylalanine'],
  ['UUA', 'Leucine'],
  ['UUG', 'Leucine'],
  ['UCU', 'Serine'],
  ['UCC', 'Serine'],
  ['UCA', 'Serine'],
  ['UCG', 'Serine'],
  ['UAU', 'Tyrosine'],
  ['UAC', 'Tyrosine'],
  ['UGU', 'Cysteine'],
  ['UGC', 'Cysteine'],
  ['UGG', 'Tryptophan'],
  ['UAA', 'STOP'],
  ['UAG', 'STOP'],
  ['UGA', 'STOP']
]);

function translate(rna) {
  if (!rna) return [];

  let stopped = false;
  const codons = rna.match(/[AUGC]{3}/g);
  if (!codons) throw Error('Invalid codon');

  return codons
    .reduce((proteins, codon) => {
      const protein = CODON_PROTEIN_MAP.get(codon)
      if (protein === 'STOP') stopped = true;

      if (!stopped) proteins.push(protein);
      return proteins;
    }, []);
}

module.exports = { translate };
