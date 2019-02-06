#include "prime_factors.h"

std::vector<int> prime_factors::of(int number) {
  std::vector<int> primes = sieve(number);

  std::vector<int> primeFactors;
  int remainder = number;
  int primeIndex = 0;

  while (remainder > 1) {
    int currentPrime = primes[primeIndex];
    
    if (remainder % currentPrime == 0) {
      primeFactors.push_back(currentPrime);
      remainder /= currentPrime;
    } else {
      primeIndex++;
    }
  }

  return primeFactors;
}

std::vector<int> prime_factors::sieve(int upperLimit) {
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
  for (std::size_t i = 0; i < numbers.size(); i++) {
    // Mark first unchecked number as prime.
    if (numbers[i] == NOT_CHECKED) {
      numbers[i] = PRIME;

      // Mark the multiples of that number as not prime.
      for (std::size_t j = i+i; j < numbers.size(); j += i) {
        numbers[j] = NOT_PRIME;
      }
    }
  }

  // Extract primes.
  std::vector<int> primes;
  for (std::size_t i = 0; i < numbers.size(); i++) {
    if (numbers[i] == PRIME) primes.push_back(i);
  }

  return primes;
}

