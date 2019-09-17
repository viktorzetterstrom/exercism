<?php

function distance($a, $b) {
  $a_arr = str_split($a);
  $b_arr = str_split($b);

  if (count($a_arr) != count($b_arr)) throw new InvalidArgumentException("DNA strands must be of equal length.");

  $hammingDistance = 0;
  for ($i=0; $i < count($a_arr); $i++) { 
    if ($a[$i] != $b[$i]) $hammingDistance++;
  }
  return $hammingDistance;
}
