#include "sieve.h"

#include <iostream>
std::vector<int> sieve::primes(int upperLimit) {
  enum is_prime { PRIME, NOT_PRIME, NOT_CHECKED };

  std::vector<is_prime> numbers;

  // Flag 0 and 1 as not prime.
  numbers.push_back(NOT_PRIME);
  numbers.push_back(NOT_PRIME);

  // Populate vector.
  for (int i = 2; i <= upperLimit; i++) {
    numbers.push_back(NOT_CHECKED);
  }

  // Use Sieve of Eratosthenes to find primes.
  for (int i = 0; i < numbers.size(); i++) {
    // Mark first unchecked number as prime.
    if (numbers[i] == NOT_CHECKED) {
      numbers[i] = PRIME;

      // Mark the multiples of that number as not prime.
      for (int j = i+i; j < numbers.size(); j += i) {
        numbers[j] = NOT_PRIME;
      }
    }
  }

  // Extract primes.
  std::vector<int> primes;
  for (int i = 0; i < numbers.size(); i++) {
    if (numbers[i] == PRIME) primes.push_back(i);
  }

  return primes;
}