<?php

class Game {
  private $frames = [];
  private $fi = 0;

  public function roll(int $pins): void {
    if ($pins < 0 || 10 < $pins) throw new Exception('Pins must be between 0 and 10');
    
    $isNewFrame = count($this->frames) === 0 
    || (!empty(end($this->frames)) && count(end($this->frames)) === 2)
    || (array_sum(end($this->frames)) === 10);
    $isLastFrame = $this->fi === 9;
    $isStrike = $isNewFrame && $pins === 10;
    
    if ($isLastFrame) {
      if (!empty($this->frames[$this->fi]) 
        && count($this->frames[$this->fi]) === 2
        && $this->frames[$this->fi][0] + $this->frames[$this->fi][1] < 10) throw new Exception();

      $this->frames[$this->fi][] = $pins;

    } else if ($isStrike) {
      $this->frames[$this->fi] = [$pins];
      $this->fi += 1;
    } else if ($isNewFrame) {
      $this->frames[$this->fi] = [$pins];
    } else {
      $this->frames[$this->fi][] = $pins;
      $this->fi += 1;
    }
  }

  public function score() {
    if (count($this->frames) < 10) throw new Exception('Cannot score incomplete games or games with more than 11 frames');

    $score = 0;
    foreach($this->frames as $fi => $frame) {
      $isLastFrame = $fi >= 9;
      $first = $frame[0];
      $second = empty($frame[1]) ? 0 : $frame[1];
      $third = empty($frame[2]) ? 0 : $frame[2]; // Last frame
      if (!$isLastFrame && $first + $second > 10) throw new Exception('Invalid data');
      if ($first === 10 && $second !== 10 && $second + $third > 10) throw new Exception('Invalid data');
      if ($isLastFrame && $first === 10 && (empty($frame[1]) || empty($frame[2]))) throw new Exception('Must throw bonus throws after strike');
      if ($isLastFrame && $first + $second === 10 && empty($frame[2])) throw new Exception('Must throws bonus throws after spare');

      $isStrike = $first === 10;
      $isSpare = !$isStrike && $first + $second === 10;

      if ($isStrike && !$isLastFrame) {
        $bonus1 =  !empty($this->frames[$fi + 1][0])
          ? $this->frames[$fi + 1][0]
          : 0;
        $bonus2 = !empty($this->frames[$fi + 1][1])
          ? $this->frames[$fi + 1][1]
          : $this->frames[$fi + 2][0];

          $score += $first + $second + $bonus1 + $bonus2;

      } else if ($isSpare && !$isLastFrame) {
        $bonus = !empty($this->frames[$fi + 1][0])
          ? $this->frames[$fi + 1][0]
          : 0;
        $score += $first + $second + $bonus;

      } else {
        $score += $first + $second + $third;
      }

    }
    return $score;
  }
}

