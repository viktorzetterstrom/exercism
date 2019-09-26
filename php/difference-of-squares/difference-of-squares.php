<?php

function squareOfSum($n) {
  return array_sum(range(1, $n)) ** 2;
}

function sumOfSquares($n) {
  return array_reduce(range(1, $n), function($acc, $curr) {
    return $acc + $curr ** 2;
  }, 0);
}

function difference($n) {
  return squareOfSum($n) - sumOfSquares($n);
}