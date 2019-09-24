<?php

function isValid(string $str): bool {
  $str = preg_replace('/\s+/', '', $str);
  if (strlen($str) <= 1 || !preg_match('/^\d+$/', $str)) {
    return false;
  }

  $arr = array_map('intval', array_reverse(str_split($str)));
  for ($i = 0; $i < count($arr); $i++) {
    if (($i > 0) && (($i+1) % 2 == 0)) {
      $arr[$i] = luhnDouble($arr[$i]);
    }
  }
  return array_sum($arr) % 10 === 0;
}

function luhnDouble(int $n): int {
  return 2*$n > 9 
    ? 2*$n -9 
    : 2*$n;
}