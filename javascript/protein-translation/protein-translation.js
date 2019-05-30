
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

  return rna
    .match(/[AUGC]{3}/g)
    .map(codon => CODON_PROTEIN_MAP.get(codon));
}

module.exports = { translate };
