#include "sum_of_multiples.h"
#include <vector>

int sum_of_multiples::to(const std::vector<int> multiples , const int limit) {
  int multipleSum = 0;

  for (int number = 1; number < limit; number++) {
    for (const int &multiple : multiples) {
      if (number % multiple == 0) {
        multipleSum += number;
        break;
      }
    }
  }

  return multipleSum;
}