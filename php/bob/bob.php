<?php
class Bob {
  public function respondTo($str) {
    $askYell = '/^(?=.*[A-Z])[^a-z]+\?+$/';
    $ask = '/\?\s*$/';
    $yell = '/^(?=.*[A-Z])[^a-z]+$/';
    $silence = '/^\s*$/';

    if (preg_match($askYell, $str)) {
      return 'Calm down, I know what I\'m doing!';
    }
    if (preg_match($ask, $str)) { 
      return 'Sure.';
    }
    if (preg_match($yell, $str)) {
      return 'Whoa, chill out!';
    }
    if (preg_match($silence, $str)) {
      return 'Fine. Be that way!';
    }
    return 'Whatever.';
  }
}
