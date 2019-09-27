<?php

class School {
  private $studentsByGrade = [];

  public function add($name, $grade) {
    $this->studentsByGrade[$grade][] = $name;
    sort($this->studentsByGrade[$grade]);
  }

  public function grade($grade) {
    if (empty($this->studentsByGrade[$grade])) {
      return [];
    }
    return $this->studentsByGrade[$grade];
  }

  public function studentsByGradeAlphabetical() {
    ksort($this->studentsByGrade);
    return $this->studentsByGrade;
  }
}