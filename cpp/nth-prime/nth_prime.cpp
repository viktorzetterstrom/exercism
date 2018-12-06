#include "nth_prime.h"

int prime::nth(int n) {
  if (n<1) throw std::domain_error("n has to be larger than one");

  // Vector with primes
  std::vector<int> primes = {2};
  int nextCandidate = 3;

  // Loop until we have enough primes.
  while (primes.size() < n) {
    bool isPrime = true;

    // Loop through past primes for each candidate, until we have passed
    // the square root of the candidate.
    for (int i=0; primes[i]*primes[i] <= nextCandidate; i++) {
      // Stop if not prime.
      if (nextCandidate % primes[i] == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push_back(nextCandidate);
    }
    // Only check odd numbers.
    nextCandidate += 2;
  }

  return primes[n-1];
}