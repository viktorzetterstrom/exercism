<?php

class Series {
  function __construct($series) {
    $this->series = $series === ""
      ? []
      : array_map(function($str) { 
        if (!preg_match('/^\d+$/', $str)) throw new InvalidArgumentException();
        return intval($str); 
      }, str_split($series));
  }

  public function largestProduct(int $length): int {
    if ($length === 0 && $this->series == []) return 1;
    if ($length > count($this->series) || $length < 0) throw new InvalidArgumentException();

    $product = 0;
    for ($tail = 0; $tail + $length - 1 < count($this->series); $tail++) {
      $newProduct = array_reduce(array_slice($this->series, $tail, $length), function($prod, $val) {
        return $prod * $val;
      }, 1);
      $product = $newProduct > $product 
        ? $newProduct 
        : $product;
    }
    return $product;
  }
}