<?php

function isLeap($year) {
  $divisibleBy4 = $year % 4 === 0;
  $notDivisbleBy100 = $year % 100 !== 0;
  $divisbleBy400 = $year % 400 === 0;
  return $divisibleBy4 && ($notDivisbleBy100 || $divisbleBy400);
}
