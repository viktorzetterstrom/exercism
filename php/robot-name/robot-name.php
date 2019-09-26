<?php

class Robot {
  private $name = '';

  function __construct() {
    $this->reset();
  }

  public function reset(): void {
    $this->name = $this->generateName();
  }

  public function getName(): string {
    return $this->name;
  }

  private function generateName(): string {
    $letters = 'abcdefghijklmnopqrstuvwxyz';
    static $letterIndex = 0;
    static $digit = 0;

    $firstPart = $letters[intdiv($letterIndex, 26) % 26] . $letters[$letterIndex % 26];
    $secondPart = str_pad($digit, 3, '0', STR_PAD_LEFT);

    $letterIndex++;
    $digit++;
    return $firstPart . $secondPart;
  }
}

