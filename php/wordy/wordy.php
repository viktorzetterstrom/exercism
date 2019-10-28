<?php

function calculate($str) {
  preg_match("/^What is (-?\d+) ([\w\s]+) (-?\d+)?\??$/", $str, $matches);
  $first = intval($matches[1]);
  $operator = $matches[2];
  $second = intval($matches[3]);
  switch($operator) {
    case 'plus': return $first + $second;
    case 'minus': return $first - $second;
    case 'multiplied by': return $first * $second;
    case 'divided by': return $first / $second;
  }
}