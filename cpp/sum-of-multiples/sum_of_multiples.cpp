#include "sum_of_multiples.h"

int sum_of_multiples::to(int multiples[] , int number) {
  int multipleCount = 0;

  int multiplesLength = sizeof(multiples) / sizeof(multiples[0]);
  for (int i = 0; i < multiplesLength; i++) {
    for (int j = 1; j < number; j++) {
      if (number % j == 0) {
        multipleCount++;
      }
    }
  }

  return multipleCount;
}