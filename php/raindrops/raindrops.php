<?php

function raindrops($n) {
  $sounds = '' .
    ($n % 3 === 0 ? 'Pling' : '') .
    ($n % 5 === 0 ? 'Plang' : '') .
    ($n % 7 === 0 ? 'Plong' : '');

  return $sounds == '' 
    ? strval($n) 
    : $sounds;
}
