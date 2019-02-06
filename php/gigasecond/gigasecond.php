<?php

function from(DateTime $date) {
  $newDate = clone $date;
  $newDate->add(DateInterval::createFromDateString('1000000000 seconds'));
  return $newDate;
}