<?php


class PhoneNumber {
  function __construct($number) {
    if (preg_match("/[a-zA-z]/", $number) === 1) throw new InvalidArgumentException("letters not permitted");
    if (preg_match("/[@:!]/", $number) === 1) throw new InvalidArgumentException("punctuations not permitted");

    $strippedNumber = preg_replace("/\D/", "", $number);
    if (strlen($strippedNumber) <= 9) throw new InvalidArgumentException('incorrect number of digits');
    if (strlen($strippedNumber) === 11 && substr($strippedNumber, 0, 1) !== '1') throw new InvalidArgumentException('11 digits must start with 1');
    if (strlen($strippedNumber) > 11) throw new InvalidArgumentException('more than 11 digits');
    if (strlen($strippedNumber) === 10 && substr($strippedNumber, 0, 1) === '1'
      || strlen($strippedNumber) === 11 && substr($strippedNumber, 1, 1) === '1') throw new InvalidArgumentException('area code cannot start with one');
    if (substr($strippedNumber, 0, 1) === '0'
      || strlen($strippedNumber) === 11 && substr($strippedNumber, 1, 1) === '0') throw new InvalidArgumentException('area code cannot start with zero');
    if (substr($strippedNumber, 3, 1) === '0'
      || strlen($strippedNumber) === 11 && substr($strippedNumber, 4, 1) === '0') throw new InvalidArgumentException('exchange code cannot start with zero');
    if (substr($strippedNumber, 3, 1) === '1'
      || strlen($strippedNumber) === 11 && substr($strippedNumber, 4, 1) === '1') throw new InvalidArgumentException('exchange code cannot start with one');


    $this->number = preg_replace("/^1/", "",  $strippedNumber);
  }

  public function number() {
    return $this->number;
  }
}