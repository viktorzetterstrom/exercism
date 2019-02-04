<?php

//
// This is only a SKELETON file for the "Hamming" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function distance($a, $b)
{
  // Split strings.
  $a_arr = str_split($a);
  $b_arr = str_split($b);

  // Make sure they are of the same length.
  if (count($a_arr) != count($b_arr)) throw new InvalidArgumentException("DNA strands must be of equal length.");

  // Calculate Hamming distance.
  $hammingDistance = 0;
  for ($i=0; $i < count($a_arr); $i++) { 
    if ($a[$i] != $b[$i]) $hammingDistance++;
  }
  return $hammingDistance;
}
