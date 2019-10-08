<?php

function detectAnagrams($word, $candidates) {
  $anagrams = [];
  foreach($candidates as $candidate) {
    if (
      count_chars(mb_strtolower($word)) == count_chars(mb_strtolower($candidate))
      && strcasecmp($word, $candidate) !== 0
    ) $anagrams[] = $candidate;
  }
  return $anagrams;
}
