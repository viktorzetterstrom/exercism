<?php

class Clock {
  function __construct($hr, $min = 0) {
    $this->min = $this->wrapMin($hr * 60 + $min);
  }

  function __toString() {
    $hr = intdiv($this->min, 60);
    $min = $this->min % 60;
    return str_pad($hr, 2, '0', STR_PAD_LEFT) . ':' . str_pad($min, 2, '0', STR_PAD_LEFT);
  }

  public function add($min) {
    return new Clock(0, $this->min + $min);
  }

  public function sub($min) {
    return new Clock(0, $this->min - $min);
  }

  private function wrapMin($min) {
    $minutesPerDay = 60 * 24;
    return ($min % $minutesPerDay + $minutesPerDay) % $minutesPerDay;
  }
}