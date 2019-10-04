<?php

class PrimeStatus {
  const CANDIDATE = 0;
  const IS_PRIME = 1;
  const NO_PRIME = 2;
}

function sieve(int $n): array {
  if ($n < 2) return [];

  $candidates = array_combine(range(2, $n), array_fill(0, $n - 1, PrimeStatus::CANDIDATE));
  for ($i = 2; $i < count($candidates) + 2; $i++) {
    if ($candidates[$i] === PrimeStatus::CANDIDATE) {
      $candidates[$i] = PrimeStatus::IS_PRIME;

      for ($j = $i + $i; $j < count($candidates) + 2; $j += $i) {
        $candidates[$j] = PrimeStatus::NO_PRIME;
      }
    }
  }
  return array_keys($candidates, PrimeStatus::IS_PRIME);
}
