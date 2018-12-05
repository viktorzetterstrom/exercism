#include "difference_of_squares.h"

int squares::square_of_sums(const int num) {
  int sum = 0;
  for (int i = 1; i <= num; i++) {
    sum += i;
  }
  return sum * sum;
}

int squares::sum_of_squares(const int num) {
  int sum = 0;
  for (int i = 1; i <= num; i++) {
    sum += i * i;
  }
  return sum;
}

int squares::difference(const int num) {
  return square_of_sums(num) - sum_of_squares(num);
}