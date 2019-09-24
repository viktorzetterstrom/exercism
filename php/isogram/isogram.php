<?php
function isIsogram(string $str): bool {
  $str_remove_non_letters = preg_replace('/[^A-Za-zäöüéß]/', '', strtolower($str));
  $letters = str_split($str_remove_non_letters);
  return count(array_unique($letters)) === count($letters);
}