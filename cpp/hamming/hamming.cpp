#include "hamming.h"

int hamming::compute(std::string a, std::string b) {
  if (a.length() != b.length()) {
    throw std::domain_error("Strings need to be of same length");
  }

  int hammingDistance = 0;
  for (int i=0; i<a.length(); i++) {
    if (a[i] != b[i]) {
      hammingDistance++;
    }
  }

  return hammingDistance;
}