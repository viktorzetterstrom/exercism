#include "rna_transcription.h"

char transcription::to_rna(char dna) {
  switch (dna) {
    case 'G':
      return 'C';
    case 'A':
      return 'U';
    case 'C':
      return 'G';
    case 'T':
      return 'A';
  }
  throw std::invalid_argument("Char must be one of ['G' 'C' 'T' 'A']");
}

std::string transcription::to_rna(std::string dnaStr) {
  std::string rnaStr;
  for (auto dna : dnaStr) {
    rnaStr += to_rna(dna);
  }
  return rnaStr;
}