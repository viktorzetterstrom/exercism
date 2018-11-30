#include "nucleotide_count.h"
#include <algorithm>

dna::counter::counter(std::string pDnaString) {
  if (!validateDnaString(pDnaString)) {
    throw std::invalid_argument("Invalid dna-string");
  }
  dnaString = pDnaString;
}

std::map<char, int> dna::counter::nucleotide_counts() const {
  std::map<char, int> nucleotides = { {'G', 0}, {'C', 0}, {'T', 0}, {'A', 0} };
  // Loop through the dna-string.
  for (auto & nucleotide : dnaString) {
    // Check which nucleotide.
    if (nucleotide == 'G') {
      nucleotides['G']++;
    } else if (nucleotide == 'C') {
      nucleotides['C']++;
    } else if (nucleotide == 'T') {
      nucleotides['T']++;
    } else if (nucleotide == 'A') {
      nucleotides['A']++;
    } else {
      throw std::invalid_argument("Invalid dna-string");
    }
  }
  return nucleotides;
}

unsigned int dna::counter::count(char ntide) const {
  if (ntide == 'G' || ntide == 'C' || ntide == 'T' || ntide == 'A') {
    return std::count(dnaString.begin(), dnaString.end(), ntide);
  } else {
    throw std::invalid_argument("Invalid dna-string");
  }
}

bool dna::counter::validateDnaString(std::string dnaStr) {
  for (auto & ntide: dnaStr) {
    if ((ntide != 'G') && (ntide != 'C') && (ntide != 'T') && (ntide != 'A')) {
      return false;
    }
  }
  return true;
}