#include <cmath>
#include "binary.h"

int binary::convert(std::string binaryString) {
  int decimal = 0;

  int binaryStringSize = binaryString.size();
  for (int i = 0; i < binaryStringSize; i++) {
    int charValue = binaryString[i] - '0';

    if (charValue != 1 && charValue != 0) return 0;

    decimal += pow(2, binaryStringSize - i - 1) * charValue;
  }

  return decimal;
}