<?php
function toRna($dnaString) {
  $dnaToRnaTable = [
    'G' => 'C',
    'C' => 'G',
    'T' => 'A',
    'A' => 'U',
  ];
  return strtr($dnaString, $dnaToRnaTable);
}