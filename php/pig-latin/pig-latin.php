<?php

function translate(string $input): string {
  return implode(" ", array_map(
    function($word) { return translateOneWord($word); }
  , explode(' ', $input)));
}

function translateOneWord(string $input): string {
  if (preg_match('/^([aouei])|(yt)|(xr)/', $input)) {
    return $input . 'ay'; 
  } else {
    preg_match('/^(sch)|(ch)|(.qu)|(qu)|(thr)|(th)/',substr($input, 0, 3), $matches);
    return empty($matches)
      ? substr($input, 1) . $input[0] . 'ay'
      : substr($input, strlen($matches[0])) . $matches[0] . 'ay';
  }
}