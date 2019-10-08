<?php

function toDecimal($trinary) {
  if (!preg_match('/^[012]+$/', $trinary)) return 0;
  $trinaryDigits = array_map(function($digit) { return intval($digit); }, array_reverse(str_split($trinary)));
  $decimal = 0;
  foreach ($trinaryDigits as $position => $value) {
    $decimal += $value * 3 ** $position;
  }
  return $decimal;
}
