<?php

function isPangram(string $input): bool {
  $alphabet = str_split('abcdefghijklmnopqrstuvwxyz');
  foreach ($alphabet as $letter) {
    if (strpos(strtolower($input), $letter) === false) return false;
  }
  return true;
}
